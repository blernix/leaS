/**
 * Composant CTA pour rediriger vers Doctolib
 * Remplace le formulaire de contact traditionnel
 */

import React from 'react'
import Card from './Card'
import InfoBox from './InfoBox'

const DOCTOLIB_URL = 'https://www.doctolib.fr/psychologue/bordeaux/lea-sgiaravello'

export default function DoctolibCTA() {
  return (
    <Card padding="lg">
      <div className="text-center space-y-6">
        {/* Titre principal */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
            Réservez votre rendez-vous en ligne
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Prenez rendez-vous directement via Doctolib pour une confirmation immédiate et un
            suivi simplifié de vos séances.
          </p>
        </div>

        {/* Bouton principal Doctolib */}
        <div className="py-4">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-accent-600 hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 min-h-touch"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Prendre rendez-vous sur Doctolib
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Avantages Doctolib */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500 mb-3">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">
              Confirmation immédiate
            </h3>
            <p className="text-sm text-neutral-600">
              Votre rendez-vous est confirmé instantanément
            </p>
          </div>

          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500 mb-3">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">
              Disponibilités en temps réel
            </h3>
            <p className="text-sm text-neutral-600">
              Choisissez le créneau qui vous convient le mieux
            </p>
          </div>

          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500 mb-3">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">
              Rappels automatiques
            </h3>
            <p className="text-sm text-neutral-600">
              Recevez des rappels avant votre séance
            </p>
          </div>
        </div>

        {/* InfoBox supplémentaire */}
        <InfoBox type="info">
          <p className="text-sm">
            <strong>Gestion facile :</strong> Vous pouvez modifier ou annuler votre rendez-vous
            directement sur Doctolib jusqu'à 24h avant la séance.
          </p>
        </InfoBox>
      </div>
    </Card>
  )
}
