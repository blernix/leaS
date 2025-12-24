/**
 * Page Prendre rendez-vous
 * Redirection vers Doctolib avec informations pratiques
 */

import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import DoctolibCTA from '@/components/DoctolibCTA'
import BeforeAppointment from '@/components/BeforeAppointment'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import { generateMetadata as generatePageMetadata, siteConfig } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Prendre rendez-vous',
  description:
    'Prenez rendez-vous en ligne avec Léa Sgiaravello, psychologue à Bordeaux. Réservation immédiate sur Doctolib avec confirmation instantanée.',
  path: '/prendre-rendez-vous',
})

export default function PrendreRendezVousPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Prendre rendez-vous' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Prendre rendez-vous
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Réservez votre consultation en ligne en quelques clics
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne gauche : Informations avant le RDV */}
            <div className="lg:col-span-1">
              <BeforeAppointment />
            </div>

            {/* Colonne droite : CTA Doctolib */}
            <div className="lg:col-span-2">
              <DoctolibCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ rapide */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 text-center mb-12">
              Questions fréquentes
            </h2>

            <div className="space-y-4">
              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Comment fonctionne la prise de rendez-vous sur Doctolib ?
                </h3>
                <p className="text-sm text-neutral-700">
                  Sur Doctolib, vous pouvez consulter les créneaux disponibles en temps réel
                  et réserver directement celui qui vous convient. Vous recevrez une
                  confirmation immédiate par email et SMS, ainsi que des rappels avant votre
                  rendez-vous.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Puis-je modifier ou annuler mon rendez-vous ?
                </h3>
                <p className="text-sm text-neutral-700">
                  Oui, vous pouvez modifier ou annuler votre rendez-vous directement depuis
                  votre compte Doctolib jusqu'à 24 heures avant la séance. Au-delà de ce
                  délai, merci de me contacter directement.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Que se passe-t-il lors de la première séance ?
                </h3>
                <p className="text-sm text-neutral-700">
                  La première séance est un temps d'écoute et d'échange. Nous discuterons de
                  votre situation, de vos difficultés et de vos attentes. Ensemble, nous
                  définirons les objectifs thérapeutiques et les modalités du suivi.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Puis-je consulter en visioconférence ?
                </h3>
                <p className="text-sm text-neutral-700">
                  Oui, les consultations en visioconférence sont possibles via un outil
                  sécurisé. Vous pouvez sélectionner ce mode de consultation lors de votre
                  réservation sur Doctolib.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Suis-je remboursé(e) ?
                </h3>
                <p className="text-sm text-neutral-700">
                  Oui ! Grâce au dispositif « Mon Soutien Psy », vous pouvez bénéficier de 12
                  séances remboursées par an. De nombreuses mutuelles proposent également un
                  remboursement complémentaire.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
