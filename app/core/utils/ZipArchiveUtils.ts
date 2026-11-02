export type ZipArchiveEntry = {
  path: string
  data: Uint8Array
}

const LOCAL_FILE_HEADER_SIGNATURE: number = 0x04034b50
const CENTRAL_DIRECTORY_SIGNATURE: number = 0x02014b50
const END_OF_CENTRAL_DIRECTORY_SIGNATURE: number = 0x06054b50
const ZIP_VERSION: number = 20
const UTF8_NAMES_FLAG: number = 0x0800
/** 1 January 2026, 00:00, in MS-DOS format: a fixed date keeps the same answers producing the same file. */
const DOS_TIME: number = 0
const DOS_DATE: number = ((2026 - 1980) << 9) | (1 << 5) | 1

let crcTable: Uint32Array | null = null

/** Uncompressed (« stored ») ZIP archives, enough for an Office document. */
export class ZipArchiveUtils {
  /**
   * Builds the archive bytes from its files.
   * @param {ZipArchiveEntry[]} entries - The files, in the order they are written.
   * @returns {Uint8Array<ArrayBuffer>} The archive.
   */
  static create(entries: ZipArchiveEntry[]): Uint8Array<ArrayBuffer> {
    const encoder: TextEncoder = new TextEncoder()
    const localParts: Uint8Array[] = []
    const centralParts: Uint8Array[] = []
    let offset: number = 0

    for (const entry of entries) {
      const name: Uint8Array = encoder.encode(entry.path)
      const crc: number = this.crc32(entry.data)
      const localHeader: Uint8Array = new Uint8Array(30 + name.length)
      const local: DataView = new DataView(localHeader.buffer)
      local.setUint32(0, LOCAL_FILE_HEADER_SIGNATURE, true)
      local.setUint16(4, ZIP_VERSION, true)
      local.setUint16(6, UTF8_NAMES_FLAG, true)
      local.setUint16(8, 0, true)
      local.setUint16(10, DOS_TIME, true)
      local.setUint16(12, DOS_DATE, true)
      local.setUint32(14, crc, true)
      local.setUint32(18, entry.data.length, true)
      local.setUint32(22, entry.data.length, true)
      local.setUint16(26, name.length, true)
      local.setUint16(28, 0, true)
      localHeader.set(name, 30)

      const centralHeader: Uint8Array = new Uint8Array(46 + name.length)
      const central: DataView = new DataView(centralHeader.buffer)
      central.setUint32(0, CENTRAL_DIRECTORY_SIGNATURE, true)
      central.setUint16(4, ZIP_VERSION, true)
      central.setUint16(6, ZIP_VERSION, true)
      central.setUint16(8, UTF8_NAMES_FLAG, true)
      central.setUint16(10, 0, true)
      central.setUint16(12, DOS_TIME, true)
      central.setUint16(14, DOS_DATE, true)
      central.setUint32(16, crc, true)
      central.setUint32(20, entry.data.length, true)
      central.setUint32(24, entry.data.length, true)
      central.setUint16(28, name.length, true)
      central.setUint32(42, offset, true)
      centralHeader.set(name, 46)

      localParts.push(localHeader, entry.data)
      centralParts.push(centralHeader)
      offset += localHeader.length + entry.data.length
    }

    const centralSize: number = centralParts.reduce((total: number, part: Uint8Array): number => total + part.length, 0)
    const end: Uint8Array = new Uint8Array(22)
    const endView: DataView = new DataView(end.buffer)
    endView.setUint32(0, END_OF_CENTRAL_DIRECTORY_SIGNATURE, true)
    endView.setUint16(8, entries.length, true)
    endView.setUint16(10, entries.length, true)
    endView.setUint32(12, centralSize, true)
    endView.setUint32(16, offset, true)

    return this.concat([...localParts, ...centralParts, end])
  }

  /**
   * CRC-32 checksum (polynomial 0xEDB88320) required for every file of the archive.
   * @param {Uint8Array} data - The file bytes.
   * @returns {number} The unsigned checksum.
   */
  static crc32(data: Uint8Array): number {
    const table: Uint32Array = this.crcTableOf()
    let crc: number = 0xffffffff
    for (const byte of data) {
      crc = (table[(crc ^ byte) & 0xff] ?? 0) ^ (crc >>> 8)
    }
    return (crc ^ 0xffffffff) >>> 0
  }

  /**
   * Lookup table of the checksum, computed on first use.
   * @returns {Uint32Array} The 256 values.
   */
  private static crcTableOf(): Uint32Array {
    if (crcTable) {
      return crcTable
    }
    const table: Uint32Array = new Uint32Array(256)
    for (let index: number = 0; index < 256; index++) {
      let value: number = index
      for (let bit: number = 0; bit < 8; bit++) {
        value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1
      }
      table[index] = value >>> 0
    }
    crcTable = table
    return table
  }

  /**
   * Joins byte arrays one after the other.
   * @param {Uint8Array[]} parts - The arrays.
   * @returns {Uint8Array} The joined bytes.
   */
  private static concat(parts: Uint8Array[]): Uint8Array<ArrayBuffer> {
    const total: number = parts.reduce((length: number, part: Uint8Array): number => length + part.length, 0)
    const result: Uint8Array<ArrayBuffer> = new Uint8Array(total)
    let position: number = 0
    for (const part of parts) {
      result.set(part, position)
      position += part.length
    }
    return result
  }
}
