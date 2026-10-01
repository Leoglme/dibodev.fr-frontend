export type DashboardIconName =
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-up-right'
  | 'badge-check'
  | 'bold'
  | 'building-2'
  | 'calendar'
  | 'calendar-clock'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevrons-up-down'
  | 'circle-alert'
  | 'circle-check'
  | 'circle-help'
  | 'circle-x'
  | 'clock'
  | 'command'
  | 'copy'
  | 'copy-check'
  | 'corner-down-left'
  | 'download'
  | 'ellipsis'
  | 'external-link'
  | 'eye'
  | 'eye-off'
  | 'file-text'
  | 'files'
  | 'folder'
  | 'gauge'
  | 'git-commit-horizontal'
  | 'globe'
  | 'grip-vertical'
  | 'heading-2'
  | 'heading-3'
  | 'history'
  | 'house'
  | 'image'
  | 'info'
  | 'italic'
  | 'keyboard'
  | 'languages'
  | 'laptop'
  | 'layout-dashboard'
  | 'link'
  | 'list'
  | 'list-checks'
  | 'list-ordered'
  | 'loader-circle'
  | 'lock'
  | 'log-out'
  | 'menu'
  | 'minus'
  | 'monitor'
  | 'panel-left'
  | 'pen-line'
  | 'pencil'
  | 'plus'
  | 'quote'
  | 'refresh-cw'
  | 'rocket'
  | 'rotate-cw'
  | 'save'
  | 'scan-search'
  | 'search'
  | 'send'
  | 'share'
  | 'smartphone'
  | 'sparkles'
  | 'square-arrow-out-up-right'
  | 'tablet'
  | 'tag'
  | 'target'
  | 'trash-2'
  | 'trending-up'
  | 'triangle-alert'
  | 'wand-sparkles'
  | 'wifi-off'
  | 'x'

/** Inner SVG markup of each dashboard icon, keyed by its Lucide name. */
export const DASHBOARD_ICONS: Record<DashboardIconName, string> = {
  'arrow-down':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7l-7 7l-7-7"/>',
  'arrow-left':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 19l-7-7l7-7m7 7H5"/>',
  'arrow-right':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7l-7 7"/>',
  'arrow-up':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 12l7-7l7 7m-7 7V5"/>',
  'arrow-up-right':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 7h10v10M7 17L17 7"/>',
  'badge-check':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"/><path d="m9 12l2 2l4-4"/></g>',
  bold: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>',
  'building-2':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></g>',
  calendar:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></g>',
  'calendar-clock':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"/><circle cx="16" cy="16" r="6"/></g>',
  check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>',
  'chevron-down':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6 9l6 6l6-6"/>',
  'chevron-left':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15 18l-6-6l6-6"/>',
  'chevron-right':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 18l6-6l-6-6"/>',
  'chevron-up':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18 15l-6-6l-6 6"/>',
  'chevrons-up-down':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 15l5 5l5-5M7 9l5-5l5 5"/>',
  'circle-alert':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></g>',
  'circle-check':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12l2 2l4-4"/></g>',
  'circle-help':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/></g>',
  'circle-x':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9l-6 6m0-6l6 6"/></g>',
  clock:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g>',
  command:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',
  copy: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>',
  'copy-check':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 15l2 2l4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>',
  'corner-down-left':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4v7a4 4 0 0 1-4 4H4"/><path d="m9 10l-5 5l5 5"/></g>',
  download:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10l5 5l5-5"/></g>',
  ellipsis:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></g>',
  'external-link':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  eye: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></g>',
  'eye-off':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"/></g>',
  'file-text':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"/></g>',
  files:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706zM5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"/></g>',
  folder:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  gauge:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"/>',
  'git-commit-horizontal':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h6m6 0h6"/></g>',
  globe:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g>',
  'grip-vertical':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></g>',
  'heading-2':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6c0-1.5-2-2.5-4-1"/>',
  'heading-3':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 12h8m-8 6V6m8 12V6m5.5 4.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2m-2 3.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/>',
  history:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5m4-1v5l4 2"/></g>',
  house:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></g>',
  image:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></g>',
  info: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></g>',
  italic:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 4h-9m4 16H5M15 4L9 20"/>',
  keyboard:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></g>',
  languages:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"/>',
  laptop:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
  'layout-dashboard':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></g>',
  link: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>',
  list: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"/>',
  'list-checks':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4"/>',
  'list-ordered':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 5h10m-10 7h10m-10 7h10M4 4h1v5M4 9h2m.5 11H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"/>',
  'loader-circle':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-6.219-8.56"/>',
  lock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>',
  'log-out':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
  menu: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 5h16M4 12h16M4 19h16"/>',
  minus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>',
  monitor:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8m-4-4v4"/></g>',
  'panel-left':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></g>',
  'pen-line':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
  pencil:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/>',
  plus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7v14"/>',
  quote:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
  'refresh-cw':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></g>',
  rocket:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></g>',
  'rotate-cw':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></g>',
  save: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"/></g>',
  'scan-search':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16l-1.9-1.9"/></g>',
  search:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g>',
  send: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"/>',
  share:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>',
  smartphone:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></g>',
  sparkles:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"/><circle cx="4" cy="20" r="2"/></g>',
  'square-arrow-out-up-right':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m10 0l-9 9m3-9h6v6"/>',
  tablet:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></g>',
  tag: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></g>',
  target:
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></g>',
  'trash-2':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  'trending-up':
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h6v6"/><path d="m22 7l-8.5 8.5l-5-5L2 17"/></g>',
  'triangle-alert':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/>',
  'wand-sparkles':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"/>',
  'wifi-off':
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 20h.01M8.5 16.429a5 5 0 0 1 7 0M5 12.859a10 10 0 0 1 5.17-2.69m8.83 2.69a10 10 0 0 0-2.007-1.523M2 8.82a15 15 0 0 1 4.177-2.643M22 8.82a15 15 0 0 0-11.288-3.764M2 2l20 20"/>',
  x: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12"/>',
}
