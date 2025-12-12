'use client'

/**
 * Composant Toast/Modal pour afficher les notifications de succès ou d'erreur
 * Centré à l'écran et responsive
 */

import { useEffect } from 'react'

interface ToastProps {
  type: 'success' | 'error'
  title: string
  message: string
  isOpen: boolean
  onClose: () => void
  autoCloseDuration?: number // en millisecondes
}

export default function Toast({
  type,
  title,
  message,
  isOpen,
  onClose,
  autoCloseDuration = 5000,
}: ToastProps) {
  // Fermeture automatique après un délai
  useEffect(() => {
    if (isOpen && type === 'success' && autoCloseDuration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDuration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, type, autoCloseDuration, onClose])

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Gestion de la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50'
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200'
  const titleColor = type === 'success' ? 'text-green-800' : 'text-red-800'
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700'
  const iconColor = type === 'success' ? 'text-green-500' : 'text-red-500'
  const buttonHoverBg = type === 'success' ? 'hover:bg-green-100' : 'hover:bg-red-100'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="toast-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Toast content */}
      <div
        className={`relative w-full max-w-md ${bgColor} ${borderColor} border-2 rounded-xl shadow-2xl p-6 animate-slideUp`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icône et titre */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icône */}
          <div className={`flex-shrink-0 ${iconColor}`}>
            {type === 'success' ? (
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* Titre */}
          <div className="flex-1">
            <h3 id="toast-title" className={`text-xl font-semibold ${titleColor}`}>
              {title}
            </h3>
          </div>

          {/* Bouton de fermeture */}
          <button
            onClick={onClose}
            className={`flex-shrink-0 rounded-lg p-1 ${buttonHoverBg} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500`}
            aria-label="Fermer"
          >
            <svg
              className={`w-6 h-6 ${textColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Message */}
        <p className={`${textColor} text-base leading-relaxed ml-12`}>{message}</p>

        {/* Bouton OK pour fermer (surtout utile pour les erreurs) */}
        {type === 'error' && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-colors"
            >
              Fermer
            </button>
          </div>
        )}
      </div>

      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
