import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useState, useMemo, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

// Lazy load heavy component
const ServiceInfoDialog = lazy(() => import('./ServiceInfoDialog'))
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  ServerIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  StarIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  UserGroupIcon,
  TruckIcon,
  CalendarIcon,
  BeakerIcon,
  HeartIcon,
  ScissorsIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  WalletIcon,
  MapPinIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'

type ServiceCategory = 'web' | 'ecommerce' | 'apps' | 'business' | 'vertical'

type Service = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  color: string
  bgColor: string
  textColor: string
  category: ServiceCategory
  sector?: string
}

function ServicesList() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | ServiceCategory>('all')
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

  const allServices: Service[] = [
    {
      id: 'web-dev',
      icon: GlobeAltIcon,
      title: t('services.serviceWebDev.title'),
      description: t('services.serviceWebDev.desc'),
      features: [
        t('services.serviceWebDev.feature1'),
        t('services.serviceWebDev.feature2'),
        t('services.serviceWebDev.feature3'),
        t('services.serviceWebDev.feature4'),
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400',
      category: 'web',
      sector: t('services.sectors.generic'),
    },
    {
      id: 'showcase',
      icon: DocumentTextIcon,
      title: t('services.serviceShowcase.title'),
      description: t('services.serviceShowcase.desc'),
      features: [
        t('services.serviceShowcase.feature1'),
        t('services.serviceShowcase.feature2'),
        t('services.serviceShowcase.feature3'),
        t('services.serviceShowcase.feature4'),
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      textColor: 'text-purple-600 dark:text-purple-400',
      category: 'web',
      sector: t('services.sectors.generic'),
    },
    {
      id: 'portfolio',
      icon: StarIcon,
      title: t('services.servicePortfolio.title'),
      description: t('services.servicePortfolio.desc'),
      features: [
        t('services.servicePortfolio.feature1'),
        t('services.servicePortfolio.feature2'),
        t('services.servicePortfolio.feature3'),
        t('services.servicePortfolio.feature4'),
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
      textColor: 'text-pink-600 dark:text-pink-400',
      category: 'web',
      sector: t('services.sectors.personal'),
    },
    {
      id: 'ecommerce',
      icon: ShoppingBagIcon,
      title: t('services.serviceEcom.title'),
      description: t('services.serviceEcom.desc'),
      features: [
        t('services.serviceEcom.feature1'),
        t('services.serviceEcom.feature2'),
        t('services.serviceEcom.feature3'),
        t('services.serviceEcom.feature4'),
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400',
      category: 'ecommerce',
      sector: t('services.sectors.retail'),
    },
    {
      id: 'web-app',
      icon: CodeBracketIcon,
      title: t('services.serviceApp.title'),
      description: t('services.serviceApp.desc'),
      features: [
        t('services.serviceApp.feature1'),
        t('services.serviceApp.feature2'),
        t('services.serviceApp.feature3'),
        t('services.serviceApp.feature4'),
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-100 dark:bg-primary-900/30',
      textColor: 'text-primary-600 dark:text-primary-400',
      category: 'apps',
      sector: t('services.sectors.apps'),
    },
    {
      id: 'mobile',
      icon: DevicePhoneMobileIcon,
      title: t('services.serviceMobile.title'),
      description: t('services.serviceMobile.desc'),
      features: [
        t('services.serviceMobile.feature1'),
        t('services.serviceMobile.feature2'),
        t('services.serviceMobile.feature3'),
        t('services.serviceMobile.feature4'),
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-100 dark:bg-accent-900/30',
      textColor: 'text-accent-600 dark:text-accent-400',
      category: 'apps',
      sector: t('services.sectors.apps'),
    },
    {
      id: 'desktop',
      icon: ComputerDesktopIcon,
      title: t('services.serviceDesktop.title'),
      description: t('services.serviceDesktop.desc'),
      features: [
        t('services.serviceDesktop.feature1'),
        t('services.serviceDesktop.feature2'),
        t('services.serviceDesktop.feature3'),
        t('services.serviceDesktop.feature4'),
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      category: 'apps',
      sector: t('services.sectors.internal'),
    },
    {
      id: 'api',
      icon: ServerIcon,
      title: t('services.serviceAPI.title'),
      description: t('services.serviceAPI.desc'),
      features: [
        t('services.serviceAPI.feature1'),
        t('services.serviceAPI.feature2'),
        t('services.serviceAPI.feature3'),
        t('services.serviceAPI.feature4'),
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      textColor: 'text-orange-600 dark:text-orange-400',
      category: 'apps',
      sector: t('services.sectors.backend'),
    },
    {
      id: 'devops',
      icon: CommandLineIcon,
      title: t('services.serviceDevOps.title'),
      description: t('services.serviceDevOps.desc'),
      features: [
        t('services.serviceDevOps.feature1'),
        t('services.serviceDevOps.feature2'),
        t('services.serviceDevOps.feature3'),
        t('services.serviceDevOps.feature4'),
      ],
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
      textColor: 'text-cyan-600 dark:text-cyan-400',
      category: 'business',
      sector: t('services.sectors.infrastructure'),
    },
    {
      id: 'consulting',
      icon: WrenchScrewdriverIcon,
      title: t('services.serviceConsult.title'),
      description: t('services.serviceConsult.desc'),
      features: [
        t('services.serviceConsult.feature1'),
        t('services.serviceConsult.feature2'),
        t('services.serviceConsult.feature3'),
        t('services.serviceConsult.feature4'),
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      category: 'business',
      sector: t('services.sectors.consulting'),
    },
    {
      id: 'inventory',
      icon: CubeIcon,
      title: t('services.serviceInventory.title'),
      description: t('services.serviceInventory.desc'),
      features: [
        t('services.serviceInventory.feature1'),
        t('services.serviceInventory.feature2'),
        t('services.serviceInventory.feature3'),
        t('services.serviceInventory.feature4'),
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-100 dark:bg-teal-900/30',
      textColor: 'text-teal-600 dark:text-teal-400',
      category: 'business',
      sector: t('services.sectors.retail'),
    },
    {
      id: 'restaurant',
      icon: BuildingStorefrontIcon,
      title: t('services.serviceRestaurant.title'),
      description: t('services.serviceRestaurant.desc'),
      features: [
        t('services.serviceRestaurant.feature1'),
        t('services.serviceRestaurant.feature2'),
        t('services.serviceRestaurant.feature3'),
        t('services.serviceRestaurant.feature4'),
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-600 dark:text-red-400',
      category: 'vertical',
      sector: t('services.sectors.restaurant'),
    },
    {
      id: 'billing',
      icon: CalculatorIcon,
      title: t('services.serviceBilling.title'),
      description: t('services.serviceBilling.desc'),
      features: [
        t('services.serviceBilling.feature1'),
        t('services.serviceBilling.feature2'),
        t('services.serviceBilling.feature3'),
        t('services.serviceBilling.feature4'),
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      category: 'business',
      sector: t('services.sectors.finance'),
    },
    {
      id: 'orders',
      icon: ClipboardDocumentListIcon,
      title: t('services.serviceOrders.title'),
      description: t('services.serviceOrders.desc'),
      features: [
        t('services.serviceOrders.feature1'),
        t('services.serviceOrders.feature2'),
        t('services.serviceOrders.feature3'),
        t('services.serviceOrders.feature4'),
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-100 dark:bg-violet-900/30',
      textColor: 'text-violet-600 dark:text-violet-400',
      category: 'business',
      sector: t('services.sectors.operations'),
    },
    {
      id: 'pos',
      icon: CreditCardIcon,
      title: t('services.servicePOS.title'),
      description: t('services.servicePOS.desc'),
      features: [
        t('services.servicePOS.feature1'),
        t('services.servicePOS.feature2'),
        t('services.servicePOS.feature3'),
        t('services.servicePOS.feature4'),
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      textColor: 'text-amber-600 dark:text-amber-400',
      category: 'ecommerce',
      sector: t('services.sectors.retail'),
    },
    {
      id: 'crm',
      icon: UserGroupIcon,
      title: t('services.serviceCRM.title'),
      description: t('services.serviceCRM.desc'),
      features: [
        t('services.serviceCRM.feature1'),
        t('services.serviceCRM.feature2'),
        t('services.serviceCRM.feature3'),
        t('services.serviceCRM.feature4'),
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-100 dark:bg-rose-900/30',
      textColor: 'text-rose-600 dark:text-rose-400',
      category: 'business',
      sector: t('services.sectors.crm'),
    },
    {
      id: 'delivery',
      icon: TruckIcon,
      title: t('services.serviceDelivery.title'),
      description: t('services.serviceDelivery.desc'),
      features: [
        t('services.serviceDelivery.feature1'),
        t('services.serviceDelivery.feature2'),
        t('services.serviceDelivery.feature3'),
        t('services.serviceDelivery.feature4'),
      ],
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-100 dark:bg-sky-900/30',
      textColor: 'text-sky-600 dark:text-sky-400',
      category: 'vertical',
      sector: t('services.sectors.logistics'),
    },
    {
      id: 'booking',
      icon: CalendarIcon,
      title: t('services.serviceBooking.title'),
      description: t('services.serviceBooking.desc'),
      features: [
        t('services.serviceBooking.feature1'),
        t('services.serviceBooking.feature2'),
        t('services.serviceBooking.feature3'),
        t('services.serviceBooking.feature4'),
      ],
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-100 dark:bg-lime-900/30',
      textColor: 'text-lime-600 dark:text-lime-400',
      category: 'vertical',
      sector: t('services.sectors.services'),
    },
    {
      id: 'pharmacy',
      icon: BeakerIcon,
      title: t('services.servicePharmacy.title'),
      description: t('services.servicePharmacy.desc'),
      features: [
        t('services.servicePharmacy.feature1'),
        t('services.servicePharmacy.feature2'),
        t('services.servicePharmacy.feature3'),
        t('services.servicePharmacy.feature4'),
      ],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400',
      category: 'vertical',
      sector: t('services.sectors.health'),
    },
    {
      id: 'gym',
      icon: HeartIcon,
      title: t('services.serviceGym.title'),
      description: t('services.serviceGym.desc'),
      features: [
        t('services.serviceGym.feature1'),
        t('services.serviceGym.feature2'),
        t('services.serviceGym.feature3'),
        t('services.serviceGym.feature4'),
      ],
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-600 dark:text-red-400',
      category: 'vertical',
      sector: t('services.sectors.sport'),
    },
    {
      id: 'salon',
      icon: ScissorsIcon,
      title: t('services.serviceSalon.title'),
      description: t('services.serviceSalon.desc'),
      features: [
        t('services.serviceSalon.feature1'),
        t('services.serviceSalon.feature2'),
        t('services.serviceSalon.feature3'),
        t('services.serviceSalon.feature4'),
      ],
      color: 'from-pink-600 to-pink-700',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
      textColor: 'text-pink-600 dark:text-pink-400',
      category: 'vertical',
      sector: t('services.sectors.beauty'),
    },
    {
      id: 'transport',
      icon: TruckIcon,
      title: t('services.serviceTransport.title'),
      description: t('services.serviceTransport.desc'),
      features: [
        t('services.serviceTransport.feature1'),
        t('services.serviceTransport.feature2'),
        t('services.serviceTransport.feature3'),
        t('services.serviceTransport.feature4'),
      ],
      color: 'from-slate-600 to-slate-700',
      bgColor: 'bg-slate-100 dark:bg-slate-900/30',
      textColor: 'text-slate-600 dark:text-slate-400',
      category: 'vertical',
      sector: t('services.sectors.logistics'),
    },
    {
      id: 'rental',
      icon: HomeIcon,
      title: t('services.serviceRental.title'),
      description: t('services.serviceRental.desc'),
      features: [
        t('services.serviceRental.feature1'),
        t('services.serviceRental.feature2'),
        t('services.serviceRental.feature3'),
        t('services.serviceRental.feature4'),
      ],
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      textColor: 'text-amber-600 dark:text-amber-400',
      category: 'vertical',
      sector: t('services.sectors.realEstate'),
    },
    {
      id: 'accounting',
      icon: BanknotesIcon,
      title: t('services.serviceAccounting.title'),
      description: t('services.serviceAccounting.desc'),
      features: [
        t('services.serviceAccounting.feature1'),
        t('services.serviceAccounting.feature2'),
        t('services.serviceAccounting.feature3'),
        t('services.serviceAccounting.feature4'),
      ],
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400',
      category: 'business',
      sector: t('services.sectors.finance'),
    },
    {
      id: 'payroll',
      icon: CurrencyDollarIcon,
      title: t('services.servicePayroll.title'),
      description: t('services.servicePayroll.desc'),
      features: [
        t('services.servicePayroll.feature1'),
        t('services.servicePayroll.feature2'),
        t('services.servicePayroll.feature3'),
        t('services.servicePayroll.feature4'),
      ],
      color: 'from-emerald-600 to-emerald-700',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      category: 'business',
      sector: t('services.sectors.hr'),
    },
    {
      id: 'mobile-money',
      icon: WalletIcon,
      title: t('services.serviceMobileMoney.title'),
      description: t('services.serviceMobileMoney.desc'),
      features: [
        t('services.serviceMobileMoney.feature1'),
        t('services.serviceMobileMoney.feature2'),
        t('services.serviceMobileMoney.feature3'),
        t('services.serviceMobileMoney.feature4'),
      ],
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      textColor: 'text-orange-600 dark:text-orange-400',
      category: 'vertical',
      sector: t('services.sectors.finance'),
    },
    {
      id: 'market',
      icon: MapPinIcon,
      title: t('services.serviceMarket.title'),
      description: t('services.serviceMarket.desc'),
      features: [
        t('services.serviceMarket.feature1'),
        t('services.serviceMarket.feature2'),
        t('services.serviceMarket.feature3'),
        t('services.serviceMarket.feature4'),
      ],
      color: 'from-violet-600 to-violet-700',
      bgColor: 'bg-violet-100 dark:bg-violet-900/30',
      textColor: 'text-violet-600 dark:text-violet-400',
      category: 'ecommerce',
      sector: t('services.sectors.marketplace'),
    },
    {
      id: 'parking',
      icon: BuildingOfficeIcon,
      title: t('services.serviceParking.title'),
      description: t('services.serviceParking.desc'),
      features: [
        t('services.serviceParking.feature1'),
        t('services.serviceParking.feature2'),
        t('services.serviceParking.feature3'),
        t('services.serviceParking.feature4'),
      ],
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-100 dark:bg-gray-900/30',
      textColor: 'text-gray-600 dark:text-gray-400',
      category: 'vertical',
      sector: t('services.sectors.mobility'),
    },
    {
      id: 'school',
      icon: AcademicCapIcon,
      title: t('services.serviceSchool.title'),
      description: t('services.serviceSchool.desc'),
      features: [
        t('services.serviceSchool.feature1'),
        t('services.serviceSchool.feature2'),
        t('services.serviceSchool.feature3'),
        t('services.serviceSchool.feature4'),
      ],
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      category: 'vertical',
      sector: t('services.sectors.education'),
    },
    {
      id: 'hospital',
      icon: BuildingLibraryIcon,
      title: t('services.serviceHospital.title'),
      description: t('services.serviceHospital.desc'),
      features: [
        t('services.serviceHospital.feature1'),
        t('services.serviceHospital.feature2'),
        t('services.serviceHospital.feature3'),
        t('services.serviceHospital.feature4'),
      ],
      color: 'from-red-700 to-red-800',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-600 dark:text-red-400',
      category: 'vertical',
      sector: t('services.sectors.health'),
    },
  ]

  // Liste des IDs de services valides pour la vérification
  const validServiceIds = useMemo(() => 
    allServices.map(service => service.id),
    [allServices]
  )

  // Gérer le paramètre type dans l'URL pour ouvrir automatiquement le service
  useEffect(() => {
    const typeParam = searchParams.get('type')
    if (typeParam && validServiceIds.includes(typeParam)) {
      setSelectedServiceId(typeParam)
      // Nettoyer l'URL après ouverture
      setSearchParams({}, { replace: true })
    }
  }, [searchParams, setSearchParams, validServiceIds])

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return allServices.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory

      if (!query) {
        return matchesCategory
      }

      const inText =
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.features.some((feature) => feature.toLowerCase().includes(query)) ||
        (service.sector && service.sector.toLowerCase().includes(query))

      return matchesCategory && inText
    })
  }, [allServices, searchQuery, selectedCategory])

  return (
    <section
      data-section="services"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-16 right-10 w-56 sm:w-80 h-56 sm:h-80 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-6 w-44 sm:w-64 h-44 sm:h-64 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white">
              {t('services.allServicesTitle')}
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto px-2">
            {t('services.allServicesSubtitle')}
          </p>
        </motion.div>

        {/* Filtres + barre de recherche */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          {/* Filtres par catégorie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4"
          >
            {[
              { id: 'all' as const, label: t('services.filters.all') },
              { id: 'web' as const, label: t('services.filters.web') },
              { id: 'ecommerce' as const, label: t('services.filters.ecommerce') },
              { id: 'apps' as const, label: t('services.filters.apps') },
              { id: 'business' as const, label: t('services.filters.business') },
              { id: 'vertical' as const, label: t('services.filters.vertical') },
            ].map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedCategory(filter.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                  selectedCategory === filter.id
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/30'
                    : 'bg-white/80 dark:bg-secondary-800/80 text-secondary-700 dark:text-secondary-200 border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto px-4"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400 dark:text-secondary-500" />
              <input
                type="text"
                placeholder={t('services.searchPlaceholder') || 'Rechercher un service...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-400 dark:text-secondary-500 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {(searchQuery || selectedCategory !== 'all') && (
              <p className="mt-3 text-sm text-secondary-600 dark:text-secondary-400 text-center">
                {filteredServices.length}{' '}
                {filteredServices.length === 1 ? t('services.searchResults.found') : t('services.searchResults.foundPlural')}
              </p>
            )}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <IconComponent className={`w-8 h-8 ${service.textColor}`} />
                    </motion.div>
                  </div>
                  {service.sector && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-700">
                      {service.sector}
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300"
                    >
                      <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <button
                    onClick={() => setSelectedServiceId(service.id)}
                    className="inline-flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    {t('services.actions.more')}
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <button
                    onClick={() => navigate(`/contact?service=${encodeURIComponent(service.id)}`)}
                    className="inline-flex items-center justify-center gap-2 text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm"
                  >
                    {t('services.actions.contact')}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <Suspense fallback={null}>
        <ServiceInfoDialog
          open={selectedServiceId !== null}
          serviceId={selectedServiceId as any}
          onClose={() => setSelectedServiceId(null)}
        />
      </Suspense>
    </section>
  )
}

export default ServicesList


