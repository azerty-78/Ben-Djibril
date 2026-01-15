import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  CheckCircleIcon,
  CloudIcon,
  CodeBracketIcon,
  InformationCircleIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa6'

type ServiceId = 
  | 'web-dev' | 'showcase' | 'portfolio' | 'ecommerce' | 'web-app' | 'mobile' | 'desktop' | 'api' | 'devops' | 'consulting'
  | 'inventory' | 'restaurant' | 'billing' | 'orders' | 'pos' | 'crm' | 'delivery' | 'booking'
  | 'pharmacy' | 'gym' | 'salon' | 'transport' | 'rental' | 'accounting' | 'payroll' | 'mobile-money'
  | 'market' | 'parking' | 'school' | 'hospital'

type PlanType = 'saas' | 'fullControl'
type SaaSPlan = 'goodDeal' | 'pro' | 'ultra'
type FullControlPlan = 'normal' | 'speed' | 'ultraSpeed'

type ServiceInfoDialogProps = {
  open: boolean
  serviceId: ServiceId | null
  onClose: () => void
}

function ServiceInfoDialog({ open, serviceId, onClose }: ServiceInfoDialogProps) {
  const { t } = useTranslation()
  const [selectedPlanType, setSelectedPlanType] = useState<PlanType | null>(null)
  const [selectedSaaSPlan, setSelectedSaaSPlan] = useState<SaaSPlan | null>(null)
  const [selectedFullControlPlan, setSelectedFullControlPlan] = useState<FullControlPlan | null>(null)
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  if (!open || !serviceId) return null

  // Mapping des IDs de services vers les clés de traduction
  const serviceKeyMap: Record<string, string> = {
    'web-dev': 'serviceWebDev',
    'showcase': 'serviceShowcase',
    'portfolio': 'servicePortfolio',
    'ecommerce': 'serviceEcom',
    'web-app': 'serviceApp',
    'mobile': 'serviceMobile',
    'desktop': 'serviceDesktop',
    'api': 'serviceAPI',
    'devops': 'serviceDevOps',
    'consulting': 'serviceConsult',
    'inventory': 'serviceInventory',
    'restaurant': 'serviceRestaurant',
    'billing': 'serviceBilling',
    'orders': 'serviceOrders',
    'pos': 'servicePOS',
    'crm': 'serviceCRM',
    'delivery': 'serviceDelivery',
    'booking': 'serviceBooking',
    'pharmacy': 'servicePharmacy',
    'gym': 'serviceGym',
    'salon': 'serviceSalon',
    'transport': 'serviceTransport',
    'rental': 'serviceRental',
    'accounting': 'serviceAccounting',
    'payroll': 'servicePayroll',
    'mobile-money': 'serviceMobileMoney',
    'market': 'serviceMarket',
    'parking': 'serviceParking',
    'school': 'serviceSchool',
    'hospital': 'serviceHospital',
  }

  const serviceKey = serviceKeyMap[serviceId] || serviceId
  const serviceBaseKey = `services.${serviceKey}`

  // Récupérer les informations du service
  const title = t(`${serviceBaseKey}.title`)
  const description = t(`${serviceBaseKey}.desc`)
  const detailedDescription = t(`${serviceBaseKey}.detailedDescription`, { defaultValue: description })
  const valueProposition = t(`${serviceBaseKey}.valueProposition`, { defaultValue: '' })
  
  // Récupérer les fonctionnalités de base (feature1-4)
  const baseFeatures = [
    t(`${serviceBaseKey}.feature1`, { defaultValue: '' }),
    t(`${serviceBaseKey}.feature2`, { defaultValue: '' }),
    t(`${serviceBaseKey}.feature3`, { defaultValue: '' }),
    t(`${serviceBaseKey}.feature4`, { defaultValue: '' }),
  ].filter(f => f !== '')
  
  // Récupérer les fonctionnalités possibles (liste étendue)
  const possibleFeaturesRaw = t(`${serviceBaseKey}.possibleFeatures`, { returnObjects: true, defaultValue: [] }) as string[]
  const possibleFeatures = Array.isArray(possibleFeaturesRaw) && possibleFeaturesRaw.length > 0 
    ? possibleFeaturesRaw 
    : baseFeatures // Utiliser les features de base si possibleFeatures n'existe pas

  // Récupérer les forfaits éligibles avec valeurs par défaut
  // Par défaut, tous les services sont éligibles à tous les forfaits sauf indication contraire
  const eligiblePlansRaw = t(`${serviceBaseKey}.eligiblePlans`, { returnObjects: true, defaultValue: null })
  let eligiblePlans: { saas: string[], fullControl: string[] }
  
  if (eligiblePlansRaw && typeof eligiblePlansRaw === 'object' && 'saas' in eligiblePlansRaw) {
    eligiblePlans = eligiblePlansRaw as { saas: string[], fullControl: string[] }
  } else {
    // Valeur par défaut : tous les forfaits disponibles
    eligiblePlans = {
      saas: ['goodDeal', 'pro', 'ultra'],
      fullControl: ['normal', 'speed', 'ultraSpeed'],
    }
  }

  const hasSaaS = eligiblePlans.saas.length > 0
  const hasFullControl = eligiblePlans.fullControl.length > 0

  // Formater le message pour WhatsApp
  const formatWhatsAppMessage = () => {
    const serviceName = title
    const planTypeName = selectedPlanType === 'saas' ? 'SaaS' : 'Full Control'
    const planName = selectedPlanType === 'saas' 
      ? t(`services.saas.${selectedSaaSPlan}.name`)
      : t(`services.fullControl.${selectedFullControlPlan}.name`)
    
    let message = `Bonjour,\n\n`
    message += `Je souhaite demander un devis pour le service : *${serviceName}*\n\n`
    message += `*Informations sur le forfait :*\n`
    message += `- Type : ${planTypeName}\n`
    message += `- Forfait : ${planName}\n\n`
    message += `*Mes informations :*\n`
    message += `- Nom : ${formData.name}\n`
    message += `- Email : ${formData.email}\n`
    message += `- Téléphone : ${formData.phone}\n`
    if (formData.company) {
      message += `- Entreprise : ${formData.company}\n`
    }
    if (formData.message) {
      message += `\n*Message :*\n${formData.message}\n`
    }
    message += `\nMerci de me recontacter pour discuter de ce projet.`
    
    return encodeURIComponent(message)
  }

  // Formater le message pour Email
  const formatEmailMessage = () => {
    const serviceName = title
    const planTypeName = selectedPlanType === 'saas' ? 'SaaS' : 'Full Control'
    const planName = selectedPlanType === 'saas' 
      ? t(`services.saas.${selectedSaaSPlan}.name`)
      : t(`services.fullControl.${selectedFullControlPlan}.name`)
    
    let message = `Bonjour,\n\n`
    message += `Je souhaite demander un devis pour le service : ${serviceName}\n\n`
    message += `Informations sur le forfait :\n`
    message += `- Type : ${planTypeName}\n`
    message += `- Forfait : ${planName}\n\n`
    message += `Mes informations :\n`
    message += `- Nom : ${formData.name}\n`
    message += `- Email : ${formData.email}\n`
    message += `- Téléphone : ${formData.phone}\n`
    if (formData.company) {
      message += `- Entreprise : ${formData.company}\n`
    }
    if (formData.message) {
      message += `\nMessage :\n${formData.message}\n`
    }
    message += `\nMerci de me recontacter pour discuter de ce projet.\n\n`
    message += `Cordialement,\n${formData.name}`
    
    return message
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!contactMethod) return
    
    if (contactMethod === 'whatsapp') {
      const message = formatWhatsAppMessage()
      const whatsappUrl = `https://wa.me/237655938501?text=${message}`
      window.open(whatsappUrl, '_blank')
    } else if (contactMethod === 'email') {
      const subject = encodeURIComponent(`Demande de devis - ${title}`)
      const body = encodeURIComponent(formatEmailMessage())
      const emailUrl = `mailto:bendjiril789@gmail.com?subject=${subject}&body=${body}`
      window.location.href = emailUrl
    }
    
    // Fermer le dialogue après soumission
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 xs:px-3 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-4xl w-full max-h-[95vh] xs:max-h-[90vh] bg-white dark:bg-secondary-900 rounded-xl xs:rounded-2xl lg:rounded-3xl shadow-2xl border border-secondary-100/80 dark:border-secondary-700/80 overflow-hidden mx-2 xs:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-3 xs:px-4 sm:px-6 md:px-8 pt-3 xs:pt-4 sm:pt-5 pb-2.5 xs:pb-3 sm:pb-4 border-b border-secondary-100 dark:border-secondary-800 bg-gradient-to-r from-primary-50/90 via-white to-accent-50/80 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800/90">
              <div className="flex items-center justify-between gap-2 xs:gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white break-words leading-tight">
                    {title}
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base text-secondary-600 dark:text-secondary-300 mt-1">
                    {description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1.5 xs:p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5 xs:w-6 xs:h-6 text-secondary-600 dark:text-secondary-300" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-5 sm:py-6 md:py-7 max-h-[calc(95vh-140px)] xs:max-h-[calc(90vh-160px)] sm:max-h-[calc(90vh-180px)] overflow-y-auto bg-white dark:bg-secondary-900 scrollbar-thin scrollbar-thumb-secondary-300 dark:scrollbar-thumb-secondary-600 scrollbar-track-transparent">
              {/* Section principale - Description détaillée */}
              <div className="space-y-6 mb-8">
                {/* Description détaillée - Mise en avant */}
                <div className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-800/50 dark:to-secondary-900/50 rounded-2xl p-6 sm:p-8 border border-secondary-200 dark:border-secondary-700 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <InformationCircleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                        À propos de ce service
                      </h3>
                      <p className="text-base text-secondary-700 dark:text-secondary-300 leading-relaxed">
                        {detailedDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features de base - Toujours affichées */}
                {baseFeatures.length > 0 && (
                  <div className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 border border-secondary-200 dark:border-secondary-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                        <CheckCircleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                          Fonctionnalités principales
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                          Les fonctionnalités clés incluses dans ce service
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {baseFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-900/50 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Plus-value - Mise en évidence */}
                {valueProposition && (
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-6 sm:p-8 text-white shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">
                          Plus-value du projet
                        </h3>
                      </div>
                      <p className="text-primary-50 leading-relaxed text-base">
                        {valueProposition}
                      </p>
                    </div>
                  </div>
                )}

                {/* Fonctionnalités possibles - Design amélioré */}
                {possibleFeatures.length > 0 && (
                  <div className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 border border-secondary-200 dark:border-secondary-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center">
                        <CheckCircleIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                          Fonctionnalités pouvant être développées
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                          Liste exhaustive des fonctionnalités disponibles pour ce service
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {possibleFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-900/50 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stack technique */}
                <div className="bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/20 dark:to-secondary-800 rounded-2xl p-6 sm:p-8 border border-accent-200 dark:border-accent-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center">
                      <CodeBracketIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                        Stack technique
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                        Technologies et outils utilisés pour développer ce service
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Spring Boot', 'MongoDB', 'AWS/Cloud/VPS', 'Docker'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-secondary-900 border border-accent-200 dark:border-accent-800 text-sm font-medium text-accent-700 dark:text-accent-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section Formulaire de demande de devis */}
              <div className="mt-8 pt-8 border-t-2 border-secondary-200 dark:border-secondary-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                    Demander un devis
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour ce service
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Choix du type de forfait */}
                  <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-4 mb-4">
                    <label className="block text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                      Type de forfait *
                    </label>
                    <div className="flex gap-3">
                      {hasSaaS && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPlanType('saas')
                            setSelectedFullControlPlan(null)
                          }}
                          className={`flex-1 px-4 py-4 rounded-xl border-2 transition-all ${
                            selectedPlanType === 'saas'
                              ? 'border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                              : 'border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:border-primary-300 dark:hover:border-primary-600'
                          }`}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <CloudIcon className={`w-6 h-6 ${selectedPlanType === 'saas' ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                            <span className="font-semibold">SaaS</span>
                            <span className="text-xs opacity-80">Abonnement mensuel</span>
                          </div>
                        </button>
                      )}
                      {hasFullControl && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPlanType('fullControl')
                            setSelectedSaaSPlan(null)
                          }}
                          className={`flex-1 px-4 py-4 rounded-xl border-2 transition-all ${
                            selectedPlanType === 'fullControl'
                              ? 'border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                              : 'border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:border-primary-300 dark:hover:border-primary-600'
                          }`}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <CodeBracketIcon className={`w-6 h-6 ${selectedPlanType === 'fullControl' ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                            <span className="font-semibold">Full Control</span>
                            <span className="text-xs opacity-80">Propriété complète</span>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Choix du forfait SaaS */}
                  {selectedPlanType === 'saas' && hasSaaS && (
                    <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-4 mb-4">
                      <label className="block text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                        Sélectionnez votre forfait SaaS *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {eligiblePlans.saas.map((plan) => {
                          const planKey = plan === 'goodDeal' ? 'goodDeal' : plan === 'pro' ? 'pro' : 'ultra'
                          const isSelected = selectedSaaSPlan === planKey
                          return (
                            <button
                              key={plan}
                              type="button"
                              onClick={() => setSelectedSaaSPlan(planKey as SaaSPlan)}
                              className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                isSelected
                                  ? 'border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                  : 'border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:border-primary-300 dark:hover:border-primary-600'
                              }`}
                            >
                              {t(`services.saas.${planKey}.name`)}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Choix du forfait Full Control */}
                  {selectedPlanType === 'fullControl' && hasFullControl && (
                    <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-4 mb-4">
                      <label className="block text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                        Sélectionnez votre forfait Full Control *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {eligiblePlans.fullControl.map((plan) => {
                          const planKey = plan === 'normal' ? 'normal' : plan === 'speed' ? 'speed' : 'ultraSpeed'
                          const isSelected = selectedFullControlPlan === planKey
                          return (
                            <button
                              key={plan}
                              type="button"
                              onClick={() => setSelectedFullControlPlan(planKey as FullControlPlan)}
                              className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                isSelected
                                  ? 'border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                  : 'border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:border-primary-300 dark:hover:border-primary-600'
                              }`}
                            >
                              {t(`services.fullControl.${planKey}.name`)}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Choix de la méthode de contact */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-4 sm:p-6 border-2 border-primary-200 dark:border-primary-800 mb-4">
                    <label className="block text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                      Comment souhaitez-vous nous contacter ? *
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setContactMethod('whatsapp')}
                        className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border-2 transition-all ${
                          contactMethod === 'whatsapp'
                            ? 'border-success-500 bg-success-500 text-white shadow-lg shadow-success-500/30'
                            : 'border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:border-success-300 dark:hover:border-success-600'
                        }`}
                      >
                        <FaWhatsapp className={`w-6 h-6 ${contactMethod === 'whatsapp' ? 'text-white' : 'text-success-600 dark:text-success-400'}`} />
                        <div className="text-left">
                          <div className="font-semibold">WhatsApp</div>
                          <div className="text-xs opacity-80">Contact rapide</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('email')}
                        className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border-2 transition-all ${
                          contactMethod === 'email'
                            ? 'border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                            : 'border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:border-primary-300 dark:hover:border-primary-600'
                        }`}
                      >
                        <EnvelopeIcon className={`w-6 h-6 ${contactMethod === 'email' ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                        <div className="text-left">
                          <div className="font-semibold">Email</div>
                          <div className="text-xs opacity-80">Contact formel</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Informations de contact */}
                  <div className="bg-white dark:bg-secondary-800 rounded-xl p-4 sm:p-6 border border-secondary-200 dark:border-secondary-700 shadow-sm">
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Vos informations
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Entreprise <span className="text-xs text-secondary-500">(optionnel)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Nom de votre entreprise (optionnel)"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Message <span className="text-xs text-secondary-500">(optionnel)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Décrivez brièvement vos besoins ou questions..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="sm:flex-1 px-4 py-3 rounded-lg border-2 border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors font-medium"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={
                        !contactMethod || 
                        !selectedPlanType || 
                        (selectedPlanType === 'saas' && !selectedSaaSPlan) || 
                        (selectedPlanType === 'fullControl' && !selectedFullControlPlan) ||
                        !formData.name ||
                        !formData.email ||
                        !formData.phone
                      }
                      className="sm:flex-1 px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                    >
                      {contactMethod === 'whatsapp' && <FaWhatsapp className="w-5 h-5" />}
                      {contactMethod === 'email' && <EnvelopeIcon className="w-5 h-5" />}
                      Envoyer via {contactMethod === 'whatsapp' ? 'WhatsApp' : contactMethod === 'email' ? 'Email' : '...'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ServiceInfoDialog

