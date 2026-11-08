import type { DibodevFreeTemplateCatalogEntry } from '~/core/types/DibodevFreeTemplateCatalog'
import { BIKE_REPAIR_TICKET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/bikeRepairTicket/pageShared'
import {
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_ROUTE_NAME,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/boilerServiceCertificate/pageShared'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageShared'
import { BOOKING_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/bookingSchedule/pageShared'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/carpentryCuttingList/pageShared'
import { CLEANING_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/cleaningSchedule/pageShared'
import { DRIVING_SCHOOL_CONTRACT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/drivingSchoolContract/pageShared'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageShared'
import { EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageShared'
import { GARAGE_REPAIR_ORDER_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/garageRepairOrder/pageShared'
import { INTERVENTION_SLIP_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/interventionSlip/pageShared'
import { INVENTORY_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/inventorySheet/pageShared'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageShared'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageShared'
import { PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageShared'
import {
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_ROUTE_NAME,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/worksAcceptanceReport/pageShared'
import {
  BIKE_SHOP_TEMPLATE_PDF_PATH,
  BIKE_SHOP_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import {
  DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
  DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'
import {
  EVENT_RENTAL_TEMPLATE_PDF_PATH,
  EVENT_RENTAL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import {
  AUTO_REPAIR_TEMPLATE_PDF_PATH,
  AUTO_REPAIR_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import {
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'
import {
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/carpentrySoftware/pageShared'
import {
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'
import {
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import {
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import {
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'
import {
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import {
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'
import {
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'
import {
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import {
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'
import {
  AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
  BIKE_SHOP_SOFTWARE_TEASER,
  BODY_SHOP_SOFTWARE_TEASER,
  CARPENTRY_SOFTWARE_TEASER,
  CLEANING_BUSINESS_SOFTWARE_TEASER,
  DRIVING_SCHOOL_SOFTWARE_TEASER,
  ELECTRICIAN_SOFTWARE_TEASER,
  EVENT_RENTAL_SOFTWARE_TEASER,
  FIELD_SERVICE_SOFTWARE_TEASER,
  INVENTORY_MANAGEMENT_SOFTWARE_TEASER,
  LANDSCAPING_SOFTWARE_TEASER,
  LEISURE_BOOKING_SOFTWARE_TEASER,
  PERSONAL_TRAINER_SOFTWARE_TEASER,
  PLUMBING_HEATING_SOFTWARE_TEASER,
  TRAINING_CENTER_SOFTWARE_TEASER,
} from '~/core/constants/tools/toolTeasers'

export const FREE_TEMPLATES_HUB_ROUTE_NAME: string = 'tools-free-templates'

/** Day the hub went online; the templates carry their own date. */
export const FREE_TEMPLATES_HUB_UPDATED_AT: string = '2026-11-01'

/** `location` of the PostHog events sent from the hub and from every template page. */
export const FREE_TEMPLATES_HUB_TRACKING_LOCATION: string = 'free_templates_hub'
export const FREE_TEMPLATE_PAGE_TRACKING_LOCATION: string = 'free_template_page'

/** The seventeen templates in the order of the hub: one per trade tool page, then the trade-wide documents, newest last. */
export const FREE_TEMPLATE_CATALOG: DibodevFreeTemplateCatalogEntry[] = [
  {
    key: 'plumber-quote',
    routeName: PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME,
    pdfPath: PLUMBING_HEATING_TEMPLATE_PDF_PATH,
    xlsxPath: PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
    icon: 'Flame',
    teaser: PLUMBING_HEATING_SOFTWARE_TEASER,
  },
  {
    key: 'intervention-slip',
    routeName: INTERVENTION_SLIP_TEMPLATE_ROUTE_NAME,
    pdfPath: FIELD_SERVICE_TEMPLATE_PDF_PATH,
    xlsxPath: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
    icon: 'ClipboardCheck',
    teaser: FIELD_SERVICE_SOFTWARE_TEASER,
  },
  {
    key: 'garage-repair-order',
    routeName: GARAGE_REPAIR_ORDER_TEMPLATE_ROUTE_NAME,
    pdfPath: AUTO_REPAIR_TEMPLATE_PDF_PATH,
    xlsxPath: AUTO_REPAIR_TEMPLATE_XLSX_PATH,
    icon: 'Wrench',
    teaser: AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
  },
  {
    key: 'electrician-commissioning-report',
    routeName: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_ROUTE_NAME,
    pdfPath: ELECTRICIAN_TEMPLATE_PDF_PATH,
    xlsxPath: ELECTRICIAN_TEMPLATE_XLSX_PATH,
    icon: 'Zap',
    teaser: ELECTRICIAN_SOFTWARE_TEASER,
  },
  {
    key: 'personal-trainer-client-review',
    routeName: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_ROUTE_NAME,
    pdfPath: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
    xlsxPath: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
    icon: 'Dumbbell',
    teaser: PERSONAL_TRAINER_SOFTWARE_TEASER,
  },
  {
    key: 'landscaping-maintenance-contract',
    routeName: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_ROUTE_NAME,
    pdfPath: LANDSCAPING_TEMPLATE_PDF_PATH,
    xlsxPath: LANDSCAPING_TEMPLATE_XLSX_PATH,
    icon: 'Sprout',
    teaser: LANDSCAPING_SOFTWARE_TEASER,
  },
  {
    key: 'cleaning-schedule',
    routeName: CLEANING_SCHEDULE_TEMPLATE_ROUTE_NAME,
    pdfPath: CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
    xlsxPath: CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
    icon: 'SprayCan',
    teaser: CLEANING_BUSINESS_SOFTWARE_TEASER,
  },
  {
    key: 'inventory-sheet',
    routeName: INVENTORY_SHEET_TEMPLATE_ROUTE_NAME,
    pdfPath: INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
    xlsxPath: INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
    icon: 'FileSpreadsheet',
    teaser: INVENTORY_MANAGEMENT_SOFTWARE_TEASER,
  },
  {
    key: 'body-shop-claim-tracking',
    routeName: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_ROUTE_NAME,
    pdfPath: BODY_SHOP_TEMPLATE_PDF_PATH,
    xlsxPath: BODY_SHOP_TEMPLATE_XLSX_PATH,
    icon: 'Car',
    teaser: BODY_SHOP_SOFTWARE_TEASER,
  },
  {
    key: 'carpentry-cutting-list',
    routeName: CARPENTRY_CUTTING_LIST_TEMPLATE_ROUTE_NAME,
    pdfPath: CARPENTRY_TEMPLATE_PDF_PATH,
    xlsxPath: CARPENTRY_TEMPLATE_XLSX_PATH,
    icon: 'Armchair',
    teaser: CARPENTRY_SOFTWARE_TEASER,
  },
  {
    key: 'training-attendance-sheet',
    routeName: TRAINING_ATTENDANCE_SHEET_TEMPLATE_ROUTE_NAME,
    pdfPath: TRAINING_CENTER_TEMPLATE_PDF_PATH,
    xlsxPath: TRAINING_CENTER_TEMPLATE_XLSX_PATH,
    icon: 'CalendarCheck',
    teaser: TRAINING_CENTER_SOFTWARE_TEASER,
  },
  {
    key: 'booking-schedule',
    routeName: BOOKING_SCHEDULE_TEMPLATE_ROUTE_NAME,
    pdfPath: LEISURE_BOOKING_TEMPLATE_PDF_PATH,
    xlsxPath: LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
    icon: 'Tent',
    teaser: LEISURE_BOOKING_SOFTWARE_TEASER,
  },
  {
    key: 'equipment-rental-agreement',
    routeName: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_ROUTE_NAME,
    pdfPath: EVENT_RENTAL_TEMPLATE_PDF_PATH,
    xlsxPath: EVENT_RENTAL_TEMPLATE_XLSX_PATH,
    icon: 'Truck',
    teaser: EVENT_RENTAL_SOFTWARE_TEASER,
  },
  {
    key: 'driving-school-contract',
    routeName: DRIVING_SCHOOL_CONTRACT_TEMPLATE_ROUTE_NAME,
    pdfPath: DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
    xlsxPath: DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
    icon: 'KeyRound',
    teaser: DRIVING_SCHOOL_SOFTWARE_TEASER,
  },
  {
    key: 'bike-repair-ticket',
    routeName: BIKE_REPAIR_TICKET_TEMPLATE_ROUTE_NAME,
    pdfPath: BIKE_SHOP_TEMPLATE_PDF_PATH,
    xlsxPath: BIKE_SHOP_TEMPLATE_XLSX_PATH,
    icon: 'Bike',
    teaser: BIKE_SHOP_SOFTWARE_TEASER,
  },
  {
    key: 'boiler-service-certificate',
    routeName: BOILER_SERVICE_CERTIFICATE_TEMPLATE_ROUTE_NAME,
    pdfPath: BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
    xlsxPath: BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
    icon: 'ShieldCheck',
    teaser: PLUMBING_HEATING_SOFTWARE_TEASER,
  },
  {
    key: 'works-acceptance-report',
    routeName: WORKS_ACCEPTANCE_REPORT_TEMPLATE_ROUTE_NAME,
    pdfPath: WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
    xlsxPath: WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
    icon: 'Hammer',
    teaser: CARPENTRY_SOFTWARE_TEASER,
  },
]
