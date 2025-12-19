import { useState, type FormEvent, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon, 
  StarIcon, 
  UserIcon, 
  BriefcaseIcon, 
  BuildingOfficeIcon,
  PhotoIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/solid'
import { addTestimonial, imageToBase64, type Testimonial } from '../../utils/testimonials'

type AddTestimonialFormProps = {
  onClose: () => void
  onSuccess?: () => void
}

function AddTestimonialForm({ onClose, onSuccess }: AddTestimonialFormProps) {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
    image: '',
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})
    setStatus('submitting')

    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = t('testimonials.form.errors.nameRequired') || 'Le nom est requis'
    }
    if (!formData.role.trim()) {
      newErrors.role = t('testimonials.form.errors.roleRequired') || 'La fonction est requise'
    }
    if (!formData.content.trim()) {
      newErrors.content = t('testimonials.form.errors.contentRequired') || 'Le message est requis'
    }
    if (formData.content.trim().length < 10) {
      newErrors.content = t('testimonials.form.errors.contentTooShort') || 'Le message doit contenir au moins 10 caractères'
    }
    if (formData.content.trim().length > 500) {
      newErrors.content = t('testimonials.form.errors.contentTooLong') || 'Le message ne doit pas dépasser 500 caractères'
    }
    if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = t('testimonials.form.errors.ratingInvalid') || 'La note doit être entre 1 et 5'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('idle')
      return
    }

    try {
      await addTestimonial({
        name: formData.name.trim(),
        role: formData.role.trim(),
        company: formData.company.trim() || undefined,
        content: formData.content.trim(),
        rating: formData.rating,
        image: formData.image || undefined,
      })

      setStatus('success')
      setTimeout(() => {
        onSuccess?.()
        onClose()
      }, 1500)
    } catch (error) {
      console.error('Error adding testimonial:', error)
      setStatus('error')
      setErrorMessage(t('testimonials.form.errors.submitError') || 'Une erreur est survenue lors de l\'ajout du témoignage')
    }
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors({ ...errors, image: t('testimonials.form.errors.imageTooLarge') || 'L\'image ne doit pas dépasser 2MB' })
        return
      }
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, image: t('testimonials.form.errors.imageInvalid') || 'Le fichier doit être une image' })
        return
      }
      try {
        const base64 = await imageToBase64(file)
        setFormData({ ...formData, image: base64 })
        setErrors({ ...errors, image: '' })
      } catch (error) {
        setErrors({ ...errors, image: t('testimonials.form.errors.imageError') || 'Erreur lors du chargement de l\'image' })
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl bg-white dark:bg-secondary-900 rounded-2xl sm:rounded-3xl shadow-2xl my-4 sm:my-8 max-h-[95vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-700 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-10 backdrop-blur-sm bg-white/95 dark:bg-secondary-900/95">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white">
            {t('testimonials.form.title') || 'Ajouter un témoignage'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            aria-label={t('testimonials.form.close') || t('services.details.close') || 'Fermer'}
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Success message */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 flex items-center gap-3"
              >
                <CheckCircleIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                  {t('testimonials.form.success') || 'Témoignage ajouté avec succès !'}
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-700 flex items-center gap-3"
              >
                <ExclamationCircleIcon className="w-6 h-6 text-danger-600 dark:text-danger-400 flex-shrink-0" />
                <p className="text-danger-700 dark:text-danger-300 font-medium">
                  {errorMessage || t('testimonials.form.errors.submitError') || 'Une erreur est survenue'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
              {t('testimonials.form.name') || 'Nom *'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-secondary-400" />
              </div>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.name 
                    ? 'border-danger-500 focus:ring-danger-500' 
                    : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                }`}
                placeholder={t('testimonials.form.namePlaceholder') || 'Votre nom complet'}
              />
            </div>
            {errors.name && (
              <p className="text-danger-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
              {t('testimonials.form.role') || 'Fonction / Poste *'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <BriefcaseIcon className="h-5 w-5 text-secondary-400" />
              </div>
              <input
                id="role"
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.role 
                    ? 'border-danger-500 focus:ring-danger-500' 
                    : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                }`}
                placeholder={t('testimonials.form.rolePlaceholder') || 'Ex: CEO, Développeur, Directeur...'}
              />
            </div>
            {errors.role && (
              <p className="text-danger-500 text-sm mt-2">{errors.role}</p>
            )}
          </div>

          {/* Company (optional) */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
              {t('testimonials.form.company') || 'Entreprise (optionnel)'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <BuildingOfficeIcon className="h-5 w-5 text-secondary-400" />
              </div>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder={t('testimonials.form.companyPlaceholder') || 'Nom de votre entreprise'}
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-secondary-900 dark:text-white">
              {t('testimonials.form.rating') || 'Note *'}
            </label>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none transition-all hover:scale-110 active:scale-95"
                  aria-label={`${star} ${star === 1 ? 'étoile' : 'étoiles'}`}
                >
                  <StarIcon
                    className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                      star <= formData.rating
                        ? 'text-warning-500 fill-warning-500'
                        : 'text-secondary-300 dark:text-secondary-700'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm sm:text-base font-semibold text-secondary-700 dark:text-secondary-300">
                {formData.rating}/5
              </span>
            </div>
            {errors.rating && (
              <p className="text-danger-500 text-sm mt-2">{errors.rating}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
              {t('testimonials.form.content') || 'Message *'}
            </label>
              <textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={5}
                maxLength={500}
                className={`w-full px-4 py-3 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none text-sm sm:text-base ${
                  errors.content 
                    ? 'border-danger-500 focus:ring-danger-500' 
                    : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                }`}
                placeholder={t('testimonials.form.contentPlaceholder') || 'Votre témoignage...'}
              />
            <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
              {errors.content && (
                <p className="text-danger-500 text-xs sm:text-sm flex-1 min-w-0">{errors.content}</p>
              )}
              <p className={`text-xs text-secondary-500 dark:text-secondary-400 ${errors.content ? 'ml-auto' : 'ml-auto'} ${
                formData.content.length < 10 ? 'text-warning-600 dark:text-warning-400' : 'text-emerald-600 dark:text-emerald-400'
              }`}>
                {formData.content.length} / {t('testimonials.form.minLength') || '10'} {formData.content.length >= 10 ? '✓' : 'caractères minimum'}
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
              {t('testimonials.form.image') || 'Photo (optionnel)'}
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-4 py-3 border-2 border-dashed border-secondary-300 dark:border-secondary-600 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:bg-primary-50/50 dark:hover:bg-primary-900/20 flex items-center justify-center gap-2 text-secondary-600 dark:text-secondary-400 font-medium"
              >
                <PhotoIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">{t('testimonials.form.selectImage') || 'Sélectionner une image'}</span>
              </button>
              {formData.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative rounded-xl overflow-hidden border-2 border-primary-200 dark:border-primary-700"
                >
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, image: '' })}
                    className="absolute top-2 right-2 p-2 bg-danger-500 text-white rounded-lg hover:bg-danger-600 transition-colors shadow-lg"
                    aria-label={t('testimonials.form.removeImage') || 'Supprimer l\'image'}
                  >
                    <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </motion.div>
              )}
              {errors.image && (
                <p className="text-danger-500 text-sm">{errors.image}</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="sticky bottom-0 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700 px-4 sm:px-6 py-4 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 backdrop-blur-sm bg-white/95 dark:bg-secondary-900/95">
            <button
              type="button"
              onClick={onClose}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors font-medium text-sm sm:text-base"
            >
              {t('testimonials.form.cancel') || 'Annuler'}
            </button>
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {status === 'submitting' 
                ? (t('testimonials.form.submitting') || 'Ajout en cours...')
                : (t('testimonials.form.submit') || 'Ajouter le témoignage')
              }
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default AddTestimonialForm
