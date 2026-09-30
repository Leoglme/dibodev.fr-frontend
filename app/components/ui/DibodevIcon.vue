<template>
  <svg
    class="relative"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="color"
    :aria-labelledby="name"
    :data-icon="name"
  >
    <g :fill="mode === 'fill' ? color : undefined" :stroke="mode === 'stroke' ? color : undefined">
      <component :is="iconComponent" v-if="iconComponent" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType, ComputedRef } from 'vue'
import AlertCircle from '~/components/icons/AlertCircle.vue'
import Armchair from '~/components/icons/Armchair.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import ArrowRight from '~/components/icons/ArrowRight.vue'
import BatteryCharging from '~/components/icons/BatteryCharging.vue'
import Bike from '~/components/icons/Bike.vue'
import CalendarCheck from '~/components/icons/CalendarCheck.vue'
import Car from '~/components/icons/Car.vue'
import Check from '~/components/icons/Check.vue'
import CheckCircle from '~/components/icons/CheckCircle.vue'
import ChevronDown from '~/components/icons/ChevronDown.vue'
import ChevronLeft from '~/components/icons/ChevronLeft.vue'
import ChevronRight from '~/components/icons/ChevronRight.vue'
import ChevronUp from '~/components/icons/ChevronUp.vue'
import Copy from '~/components/icons/Copy.vue'
import Disc from '~/components/icons/Disc.vue'
import DoubleChevronsDown from '~/components/icons/DoubleChevronsDown.vue'
import ExternalLink from '~/components/icons/ExternalLink.vue'
import Eye from '~/components/icons/Eye.vue'
import EyeOff from '~/components/icons/EyeOff.vue'
import FileSpreadsheet from '~/components/icons/FileSpreadsheet.vue'
import Flag from '~/components/icons/Flag.vue'
import Github from '~/components/icons/Github.vue'
import Info from '~/components/icons/Info.vue'
import KeyRound from '~/components/icons/KeyRound.vue'
import Laptop from '~/components/icons/Laptop.vue'
import Linkedin from '~/components/icons/Linkedin.vue'
import LogOut from '~/components/icons/LogOut.vue'
import Mail from '~/components/icons/Mail.vue'
import MapPin from '~/components/icons/MapPin.vue'
import Menu from '~/components/icons/Menu.vue'
import MessageCircle from '~/components/icons/MessageCircle.vue'
import Monitor from '~/components/icons/Monitor.vue'
import Moon from '~/components/icons/Moon.vue'
import PartyPopper from '~/components/icons/PartyPopper.vue'
import Phone from '~/components/icons/Phone.vue'
import RotateCcw from '~/components/icons/RotateCcw.vue'
import Search from '~/components/icons/Search.vue'
import Send from '~/components/icons/Send.vue'
import ShieldCheck from '~/components/icons/ShieldCheck.vue'
import SlidersHorizontal from '~/components/icons/SlidersHorizontal.vue'
import Smartphone from '~/components/icons/Smartphone.vue'
import Smile from '~/components/icons/Smile.vue'
import Speaker from '~/components/icons/Speaker.vue'
import SprayCan from '~/components/icons/SprayCan.vue'
import Star from '~/components/icons/Star.vue'
import Store from '~/components/icons/Store.vue'
import Tent from '~/components/icons/Tent.vue'
import Truck from '~/components/icons/Truck.vue'
import Wrench from '~/components/icons/Wrench.vue'
import X from '~/components/icons/X.vue'
import XCircle from '~/components/icons/XCircle.vue'
import Zap from '~/components/icons/Zap.vue'
import type { DibodevIconMode, DibodevIconProps, IconComponent } from '~/core/types/DibodevIcon'
import { iconsList } from '~/core/types/DibodevIcon'

/**
 * Props definition with strict typing.
 * @constant {DibodevIconProps}
 */
const props: DibodevIconProps = defineProps({
  name: {
    type: String as PropType<(typeof iconsList)[number]>,
    required: true,
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  viewBox: {
    type: String as PropType<string>,
    default: '0 0 24 24',
  },
  mode: {
    type: String as PropType<DibodevIconMode>,
    default: 'fill',
  },
  color: {
    type: String as PropType<string>,
    default: 'currentColor',
  },
})

/**
 * Icon dictionary with all the available icons.
 * @constant {Record<string, IconComponent>}
 */
const iconsDictionary: Record<string, IconComponent> = {
  AlertCircle,
  Armchair,
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Bike,
  CalendarCheck,
  Car,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Copy,
  Disc,
  DoubleChevronsDown,
  ExternalLink,
  Eye,
  EyeOff,
  FileSpreadsheet,
  Flag,
  Github,
  Info,
  KeyRound,
  Laptop,
  Linkedin,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Moon,
  PartyPopper,
  Phone,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Smile,
  Speaker,
  SprayCan,
  Star,
  Store,
  Tent,
  Truck,
  Wrench,
  X,
  XCircle,
  Zap,
}

/**
 * Icon component computed with the props name and the icon dictionary.
 * @constant {ComputedRef<IconComponent>}
 */
const iconComponent: ComputedRef<IconComponent | undefined> = computed(() => iconsDictionary[props.name])
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
