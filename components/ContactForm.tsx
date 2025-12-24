'use client'

/**
 * Formulaire de contact accessible et sécurisé
 * Conforme WCAG 2.1 niveau AA et RGPD
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { Button } from './Button'
import InfoBox from './InfoBox'
import Toast from './Toast'
import Link from 'next/link'

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isToastOpen, setIsToastOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    setErrorMessage('')

    try {
      // Formater le message avec toutes les informations du formulaire
      const consultationTypes: Record<string, string> = {
        'première-consultation': 'Première consultation',
        'suivi-adulte': 'Suivi adulte',
        'adolescent': 'Adolescent (16 ans et +)',
        'autre': 'Autre',
      }

      const fullMessage = `
Nouvelle demande de contact

Nom complet : ${data.firstName} ${data.lastName}
Téléphone : ${data.phone}
Type de consultation : ${consultationTypes[data.consultationType] || data.consultationType}

Message :
${data.message}
      `.trim()

      // Appel à l'API emailpro (URL définie dans .env.local ou .env.production)
      const apiUrl = process.env.NEXT_PUBLIC_EMAILPRO_API_URL || 'http://localhost:3001'
      const apiKey = process.env.NEXT_PUBLIC_EMAILPRO_API_KEY || 'fc8e5449-3ea0-40a7-9dcf-35bed680a4c6'

      const response = await fetch(`${apiUrl}/api/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          subject: `Nouvelle demande de contact - ${data.firstName} ${data.lastName}`,
          message: fullMessage,
          replyTo: data.email,
          senderName: `${data.firstName} ${data.lastName}`,
          metadata: {
            formType: 'contact',
            consultationType: data.consultationType,
          },
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Erreur lors de l\'envoi')
      }

      setSubmitStatus('success')
      setIsToastOpen(true)
      reset()
    } catch (error: unknown) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
      const message = error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.'
      setErrorMessage(message)
      setIsToastOpen(true)
    }
  }

  return (
    <div>
      {/* Toast pour les notifications de succès et d'erreur */}
      <Toast
        type={submitStatus === 'success' ? 'success' : 'error'}
        title={submitStatus === 'success' ? 'Message envoyé avec succès !' : 'Erreur d\'envoi'}
        message={
          submitStatus === 'success'
            ? 'Votre demande de contact a bien été envoyée. Vous recevrez une réponse dans les plus brefs délais, généralement sous 24 à 48 heures.'
            : errorMessage
        }
        isOpen={isToastOpen}
        onClose={() => {
          setIsToastOpen(false)
          if (submitStatus === 'success') {
            setSubmitStatus('idle')
          }
        }}
        autoCloseDuration={submitStatus === 'success' ? 5000 : 0}
      />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Grille pour prénom et nom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Prénom */}
          <div>
            <label htmlFor="firstName" className="form-label">
              Prénom <span className="text-red-500" aria-label="requis">*</span>
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className="form-input"
              aria-required="true"
              aria-invalid={errors.firstName ? 'true' : 'false'}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              autoComplete="given-name"
            />
            {errors.firstName && (
              <p id="firstName-error" className="form-error" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="lastName" className="form-label">
              Nom <span className="text-red-500" aria-label="requis">*</span>
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className="form-input"
              aria-required="true"
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              autoComplete="family-name"
            />
            {errors.lastName && (
              <p id="lastName-error" className="form-error" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="form-label">
            Adresse email <span className="text-red-500" aria-label="requis">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="form-input"
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-error" className="form-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Téléphone */}
        <div className="mb-6">
          <label htmlFor="phone" className="form-label">
            Téléphone <span className="text-red-500" aria-label="requis">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="form-input"
            placeholder="06 XX XX XX XX"
            aria-required="true"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error phone-hint' : 'phone-hint'}
            autoComplete="tel"
          />
          <p id="phone-hint" className="text-sm text-neutral-600 mt-1">
            Format : 06 12 34 56 78 ou +33 6 12 34 56 78
          </p>
          {errors.phone && (
            <p id="phone-error" className="form-error" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Type de consultation */}
        <div className="mb-6">
          <label htmlFor="consultationType" className="form-label">
            Type de consultation <span className="text-red-500" aria-label="requis">*</span>
          </label>
          <select
            {...register('consultationType')}
            id="consultationType"
            className="form-input"
            aria-required="true"
            aria-invalid={errors.consultationType ? 'true' : 'false'}
            aria-describedby={
              errors.consultationType ? 'consultationType-error' : undefined
            }
          >
            <option value="">-- Sélectionnez --</option>
            <option value="première-consultation">Première consultation</option>
            <option value="suivi-adulte">Suivi adulte</option>
            <option value="adolescent">Adolescent (16 ans et +)</option>
            <option value="autre">Autre</option>
          </select>
          {errors.consultationType && (
            <p id="consultationType-error" className="form-error" role="alert">
              {errors.consultationType.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="form-label">
            Votre message <span className="text-red-500" aria-label="requis">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="form-input resize-y"
            placeholder="Décrivez brièvement le motif de votre demande..."
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={
              errors.message ? 'message-error message-hint' : 'message-hint'
            }
          />
          <p id="message-hint" className="text-sm text-neutral-600 mt-1">
            Minimum 10 caractères, maximum 1000 caractères
          </p>
          {errors.message && (
            <p id="message-error" className="form-error" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Honeypot (anti-spam) - champ caché */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Site web</label>
          <input
            {...register('website')}
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Consentement RGPD */}
        <div className="mb-6">
          <div className="flex items-start gap-3">
            <input
              {...register('rgpdConsent')}
              type="checkbox"
              id="rgpdConsent"
              className="mt-1 h-5 w-5 rounded border-neutral-300 text-primary-500 focus:ring-2 focus:ring-primary-500"
              aria-required="true"
              aria-invalid={errors.rgpdConsent ? 'true' : 'false'}
              aria-describedby={errors.rgpdConsent ? 'rgpdConsent-error' : undefined}
            />
            <label htmlFor="rgpdConsent" className="text-sm text-neutral-700">
              J'accepte que mes données personnelles soient collectées et traitées dans le
              cadre de ma demande de contact, conformément à la{' '}
              <Link
                href="/politique-confidentialite"
                className="text-primary-500 hover:text-primary-600 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                target="_blank"
              >
                politique de confidentialité
              </Link>
              . <span className="text-red-500" aria-label="requis">*</span>
            </label>
          </div>
          {errors.rgpdConsent && (
            <p id="rgpdConsent-error" className="form-error ml-8" role="alert">
              {errors.rgpdConsent.message}
            </p>
          )}
        </div>

        {/* Informations supplémentaires */}
        <InfoBox type="info" className="mb-6">
          <p className="text-sm">
            <strong>Confidentialité :</strong> Vos données sont protégées et ne seront
            jamais partagées avec des tiers. Vous recevrez une réponse sous 24 à 48 heures.
          </p>
        </InfoBox>

        {/* Bouton de soumission */}
        <Button
          type="submit"
          variant="accent"
          size="lg"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </Button>

        <p className="text-xs text-neutral-600 mt-4 text-center">
          Les champs marqués d'un astérisque (*) sont obligatoires
        </p>
      </form>
    </div>
  )
}
