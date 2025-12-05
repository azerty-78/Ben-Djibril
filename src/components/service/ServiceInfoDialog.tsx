import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  CheckCircleIcon,
  CloudIcon,
  CodeBracketIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

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
  
  // Récupérer les fonctionnalités possibles
  const possibleFeaturesRaw = t(`${serviceBaseKey}.possibleFeatures`, { returnObjects: true, defaultValue: [] }) as string[]
  const possibleFeatures = Array.isArray(possibleFeaturesRaw) ? possibleFeaturesRaw : []

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Envoyer le formulaire
    console.log('Form submitted:', {
      serviceId,
      planType: selectedPlanType,
      saasPlan: selectedSaaSPlan,
      fullControlPlan: selectedFullControlPlan,
      formData,
    })
    // Fermer le dialogue après soumission
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4 overflow-y-auto"
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
            className="relative max-w-4xl w-full my-8 bg-white dark:bg-secondary-900 rounded-2xl lg:rounded-3xl shadow-2xl border border-secondary-100/80 dark:border-secondary-700/80 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-secondary-100 dark:border-secondary-800 bg-gradient-to-r from-primary-50/90 via-white to-accent-50/80 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800/90">
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
                    {title}
                  </h2>
                  <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 mt-1">
                    {description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 max-h-[calc(90vh-200px)] overflow-y-auto">
              {/* Description détaillée */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3 flex items-center gap-2">
                  <InformationCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Description
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  {detailedDescription}
                </p>
              </div>

              {/* Plus-value */}
              {valueProposition && (
                <div className="mb-6 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    Plus-value du projet
                  </h3>
                  <p className="text-primary-800 dark:text-primary-200 leading-relaxed">
                    {valueProposition}
                  </p>
                </div>
              )}

              {/* Fonctionnalités possibles */}
              {possibleFeatures.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    Fonctionnalités pouvant être développées
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {possibleFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Formulaire de demande de devis */}
              <div className="mt-8 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                  Demander un devis
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Choix du type de forfait */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
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
                          className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                            selectedPlanType === 'saas'
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                              : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <CloudIcon className="w-5 h-5" />
                            <span className="font-medium">SaaS</span>
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
                          className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                            selectedPlanType === 'fullControl'
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                              : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <CodeBracketIcon className="w-5 h-5" />
                            <span className="font-medium">Full Control</span>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Choix du forfait SaaS */}
                  {selectedPlanType === 'saas' && hasSaaS && (
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Forfait SaaS *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {eligiblePlans.saas.map((plan) => {
                          const planKey = plan === 'goodDeal' ? 'goodDeal' : plan === 'pro' ? 'pro' : 'ultra'
                          return (
                            <button
                              key={plan}
                              type="button"
                              onClick={() => setSelectedSaaSPlan(planKey as SaaSPlan)}
                              className={`px-3 py-2 rounded-lg border-2 text-sm transition-all ${
                                selectedSaaSPlan === planKey
                                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                                  : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
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
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Forfait Full Control *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {eligiblePlans.fullControl.map((plan) => {
                          const planKey = plan === 'normal' ? 'normal' : plan === 'speed' ? 'speed' : 'ultraSpeed'
                          return (
                            <button
                              key={plan}
                              type="button"
                              onClick={() => setSelectedFullControlPlan(planKey as FullControlPlan)}
                              className={`px-3 py-2 rounded-lg border-2 text-sm transition-all ${
                                selectedFullControlPlan === planKey
                                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                                  : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                              }`}
                            >
                              {t(`services.fullControl.${planKey}.name`)}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Informations de contact */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors font-medium"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={!selectedPlanType || (selectedPlanType === 'saas' && !selectedSaaSPlan) || (selectedPlanType === 'fullControl' && !selectedFullControlPlan)}
                      className="flex-1 px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Envoyer la demande
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

