/**
 * Page Spécialités
 * Détail des domaines d'intervention et approches thérapeutiques
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Spécialités et domaines d\'intervention',
  description:
    'Psychologue spécialisée en stress/anxiété, confiance en soi, attachement, neurodiversité, paradoxes internes. TCC, psychodynamique et thérapie narrative à Bordeaux.',
  path: '/specialites',
})

const specialties = [
  {
    title: 'Stress, anxiété et surcharge mentale',
    icon: '🧠',
    description:
      'Compréhension des mécanismes anxieux et accompagnement dans la gestion de la charge cognitive.',
    details: [
      'Compréhension des mécanismes anxieux',
      'Gestion de la charge cognitive',
      'Stratégies d\'évitement',
      'Hypervigilance',
      'Anticipation anxieuse',
      'Surmenage',
    ],
    approach:
      'Analyse des cycles anxieux, identification des déclencheurs et mise en place de stratégies de régulation via TCC.',
  },
  {
    title: 'Confiance en soi, estime personnelle et limites',
    icon: '💪',
    description:
      'Travail sur l\'auto-critique, l\'exigence interne et les difficultés à poser des limites.',
    details: [
      'Auto-critique excessive',
      'Exigence interne',
      'Peur du jugement',
      'Difficultés à poser des limites',
      'Suradaptation relationnelle',
      'Perfectionnisme',
    ],
    approach:
      'Analyse des schémas d\'exigence, travail sur les récits identitaires et développement de l\'affirmation de soi.',
  },
  {
    title: 'Relations affectives et attachement',
    icon: '💙',
    description:
      'Accompagnement des difficultés relationnelles et des schémas d\'attachement.',
    details: [
      'Ambivalence affective',
      'Dépendance affective',
      'Peur de l\'abandon',
      'Répétition de schémas relationnels',
      'Difficultés à se situer dans le lien',
      'Patterns d\'attachement insécure',
    ],
    approach:
      'Exploration des schémas d\'attachement, compréhension des répétitions et travail sur la sécurité relationnelle.',
  },
  {
    title: 'Dynamiques familiales et place dans le système',
    icon: '👨‍👩‍👧',
    description:
      'Travail sur les loyautés invisibles et la place dans le système familial.',
    details: [
      'Loyautés invisibles',
      'Rôle dans la fratrie',
      'Répétitions transgénérationnelles',
      'Difficulté à s\'extraire de positions figées',
      'Conflits de loyauté',
      'Parentification',
    ],
    approach:
      'Approche systémique et analyse des dynamiques familiales inconscientes, mise au jour des répétitions.',
  },
  {
    title: 'Paradoxes internes et conflits psychiques',
    icon: '⚖️',
    description:
      'Travail clinique centré sur les tensions internes et les paradoxes sans pathologiser.',
    details: [
      'Tensions volonté/peur',
      'Autonomie vs besoin de lien',
      'Contrôle vs fatigue du contrôle',
      'Désir d\'indépendance vs dépendance',
      'Organisations psychiques paradoxales',
    ],
    approach:
      'Analyse des tensions internes comme organisations cohérentes, exploration des zones de contradiction.',
  },
  {
    title: 'Émotions intenses et régulation émotionnelle',
    icon: '🌊',
    description:
      'Compréhension des cycles émotionnels et reprise progressive de contrôle.',
    details: [
      'Compréhension des déclencheurs',
      'Analyse des cycles émotionnels',
      'Comportements compensatoires',
      'Reprise de contrôle progressif',
      'Outils TCC de régulation',
      'Gestion de l\'intensité émotionnelle',
    ],
    approach:
      'TCC avec identification des cycles, restructuration cognitive et techniques de régulation émotionnelle.',
  },
  {
    title: 'Trauma relationnel léger à modéré',
    icon: '🩹',
    description:
      'Accompagnement des événements marquants et des relations d\'emprise psychologique.',
    details: [
      'Événements marquants',
      'Ruptures relationnelles',
      'Expériences de dévalorisation',
      'Micro-agressions répétées',
      'Relations d\'emprise psychologique',
      'Blessures narcissiques',
    ],
    approach:
      'Travail psychodynamique et narratif, externalisation du trauma et reconstruction du récit identitaire.',
  },
  {
    title: 'Ressources internes et récit identitaire',
    icon: '📖',
    description:
      'Travail narratif sur la manière de se raconter et déconstruction des récits limitants.',
    details: [
      'Manière dont la personne se raconte',
      'Déconstruction des récits limitants',
      'Mise en valeur des actes de résistance',
      'Récits alternatifs',
      'Reconstruction identitaire',
      'Ressources et compétences',
    ],
    approach:
      'Thérapie narrative centrée sur l\'externalisation et la reconstruction de récits identitaires plus souples.',
  },
]

export default function SpecialitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Spécialités' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Mes spécialités et domaines d'intervention
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Une approche clinique intégrative adaptée à vos besoins spécifiques
          </p>
        </div>
      </section>

      {/* Liste des spécialités */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            {specialties.map((specialty, index) => (
              <Card key={index} padding="lg" hover>
                <div className="flex items-start gap-6">
                  {/* Icône */}
                  <div className="flex-shrink-0 text-5xl" role="img" aria-label={specialty.title}>
                    {specialty.icon}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-3">
                      {specialty.title}
                    </h2>
                    <p className="text-lg text-neutral-700 mb-4">{specialty.description}</p>

                    {/* Détails */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Points d'attention :
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {specialty.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-neutral-700">
                            <svg
                              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Approche */}
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h3 className="font-semibold text-neutral-900 mb-2">Approche thérapeutique :</h3>
                      <p className="text-sm text-neutral-700">{specialty.approach}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Public accueilli */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Public accueilli
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Adultes</h3>
                <p className="text-neutral-700">
                  Accompagnement des adultes confrontés à des tensions internes, des difficultés
                  relationnelles, une surcharge mentale ou un questionnement identitaire.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Jeunes adultes</h3>
                <p className="text-neutral-700">
                  Étudiants ou jeunes professionnels en période de transition (entrée dans la vie
                  active, choix de carrière, formation exigeante, pression de réussite).
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Professionnels à forte exigence
                </h3>
                <p className="text-neutral-700">
                  Élèves magistrats, juristes, soignants, cadres, personnes occupant des fonctions où
                  la responsabilité, la charge cognitive et la pression décisionnelle sont élevées.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Personnes en remise en question
                </h3>
                <p className="text-neutral-700">
                  Séparation, rupture biographique, fatigue psychique, perte de repères,
                  réorganisation du récit de soi.
                </p>
              </Card>

              <Card padding="lg" className="md:col-span-2">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Personnes concernées par la neurodiversité
                </h3>
                <p className="text-neutral-700 mb-3">
                  Accompagnement des personnes présentant des particularités neuropsychologiques
                  (TSA, TDAH, HPI, profil anxieux, difficultés attentionnelles, hypersensibilité,
                  besoin d'adaptation cognitive).
                </p>
                <p className="text-neutral-700">
                  Travail centré sur la compréhension du fonctionnement, l'analyse des schémas
                  internes, la régulation émotionnelle et la construction d'une manière de vivre
                  cohérente avec son mode de pensée.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
                Vous vous reconnaissez dans l'une de ces situations ?
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Contactez-moi pour convenir d'un premier rendez-vous. Nous pourrons échanger sur
                vos besoins et définir ensemble un accompagnement adapté.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prendre-rendez-vous">
                  <Button variant="accent" size="lg">
                    Prendre rendez-vous
                  </Button>
                </Link>
                <Link href="/qui-suis-je">
                  <Button variant="secondary" size="lg">
                    Découvrir mon approche
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
