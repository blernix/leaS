/**
 * Composant avec informations utiles avant le rendez-vous
 * Préparer sa première consultation
 */

import React from 'react'
import Card from './Card'

export default function BeforeAppointment() {
  return (
    <div className="space-y-6">
      {/* Comment se préparer */}
      <Card>
        <h3 className="text-xl font-heading font-bold text-neutral-900 mb-4">
          Comment se préparer à votre première séance ?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">
                Réfléchissez à votre demande
              </h4>
              <p className="text-sm text-neutral-700">
                Qu'est-ce qui vous amène à consulter ? Quelles sont vos attentes ? Il n'y a pas
                de "bonnes" ou "mauvaises" raisons de consulter un psychologue.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">
                Notez vos questions
              </h4>
              <p className="text-sm text-neutral-700">
                Si vous avez des questions sur le déroulement des séances, la durée du suivi ou
                les tarifs, n'hésitez pas à les noter pour les aborder lors du premier
                rendez-vous.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">
                Arrivez détendu(e)
              </h4>
              <p className="text-sm text-neutral-700">
                Prévoyez d'arriver 5 minutes en avance pour vous installer sereinement. La
                première séance est un moment d'écoute et d'échange, dans un cadre
                bienveillant.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Ce qu'il faut savoir */}
      <Card>
        <h3 className="text-xl font-heading font-bold text-neutral-900 mb-4">
          Informations pratiques
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
            <div>
              <p className="font-semibold text-neutral-900">Durée des séances</p>
              <p className="text-neutral-700">
                45 à 50 minutes pour chaque consultation
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div>
              <p className="font-semibold text-neutral-900">Tarifs et remboursement</p>
              <p className="text-neutral-700">
                55€ la séance • Éligible au dispositif "Mon Soutien Psy" (12 séances
                remboursées par an) • Remboursement possible par votre mutuelle
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
            <div>
              <p className="font-semibold text-neutral-900">Annulation</p>
              <p className="text-neutral-700">
                Merci de prévenir au moins 24h à l'avance. Toute séance non annulée dans ce
                délai sera due.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="font-semibold text-neutral-900">Téléconsultation</p>
              <p className="text-neutral-700">
                Les séances en visioconférence sont possibles via un outil sécurisé
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Que se passe-t-il lors de la première séance */}
      <Card>
        <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
          La première séance
        </h3>
        <p className="text-sm text-neutral-700 leading-relaxed mb-3">
          La première séance est un temps d'écoute et d'échange. Nous discuterons de votre
          situation, de vos difficultés et de vos attentes.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed">
          Ensemble, nous définirons les objectifs thérapeutiques et les modalités du suivi
          (fréquence, approche). C'est aussi l'occasion de voir si vous vous sentez à l'aise
          pour poursuivre un accompagnement.
        </p>
      </Card>
    </div>
  )
}
