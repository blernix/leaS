/**
 * Page Qui suis-je ?
 * Présentation du psychologue, parcours, formation, approches thérapeutiques
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Qui suis-je ?',
  description:
    'Léa Sgiaravello, psychologue clinicienne à Bordeaux. Clinique intégrative (TCC, psychodynamique, thérapie narrative). Spécialisée en neurodiversité, paradoxes internes, attachement.',
  path: '/qui-suis-je',
})

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero simple */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Qui suis-je ?' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Qui suis-je ?
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Une clinique intégrative au service de la compréhension de vos mécanismes psychiques
          </p>
        </div>
      </section>

      {/* Section avec photo et présentation */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo professionnelle */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-medium mb-6">
                  <img
                    src="/images/profil_sgiaravello.webp"
                    alt="Léa Sgiaravello, Psychologue Clinicienne"
                    className="w-full h-full object-cover"
                  />
                </div>

                <Card>
                  <h3 className="font-semibold text-neutral-900 mb-2">Léa Sgiaravello</h3>
                  <p className="text-sm text-neutral-600 mb-4">Psychologue Clinicienne</p>

                  <div className="text-sm space-y-2 text-neutral-700">
                    <p>
                      <strong>N° ADELI :</strong>
                      <br />
                      0779321256
                    </p>
                    <p>
                      <strong>N° RPPS :</strong>
                      <br />
                      10009026849
                    </p>
                    <p>
                      <strong>SIRET :</strong>
                      <br />
                      989 924 253 00010
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contenu textuel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Présentation clinique */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Présentation
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    Je suis psychologue clinicienne, diplômée en psychologie avec un parcours complémentaire
                    en sociologie et en littérature. Ma pratique est intégrative, je propose un accompagnement
                    basé sur les principes de la thérapie narrative et ceux de la psychodynamique.
                  </p>
                  <p>
                    Mon expérience m'a conduite à travailler auprès de publics variés, notamment en gériatrie
                    et dans le champ du handicap mental.
                  </p>
                  <p>
                    Aujourd'hui j'accueille des <strong>enfants, des adolescents et des adultes</strong>, y compris
                    ceux concernés par la neurodiversité (autisme, TDA/H, retard intellectuel, haut potentiel,
                    hypersensibilité, etc.) en cabinet. Je reçois toute personne ayant un besoin d'accompagnement,
                    cela peut concerner des troubles de l'humeur, des troubles anxieux, des difficultés relationnelles
                    ou, tout simplement, une envie d'apprendre à mieux se connaître et se comprendre.
                  </p>
                  <p className="text-base italic border-l-4 border-primary-300 pl-4 bg-primary-50 p-3 rounded">
                    Il peut être stressant de prendre rendez-vous pour la première fois, si cela est le cas,
                    vous pouvez m'écrire en amont du rendez-vous pour que nous puissions avoir un premier échange.
                  </p>
                </div>
              </div>

              {/* Diplômes et formation */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Diplômes et formation
                </h2>
                <div className="space-y-4">
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Master en psychologie clinique et psychopathologie
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Parcours psychothérapie - Université Paris 8 - Vincennes Saint-Denis
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Licence de psychologie
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Université Paris 8 - Vincennes Saint-Denis
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-100 text-secondary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Parcours complémentaire
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Sociologie et littérature
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Ma manière de travailler */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Ma manière de travailler
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4 mb-6">
                  <p>
                    Ma pratique repose sur plusieurs axes :
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Axe 1 */}
                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      1. Analyse des schémas et des mécanismes psychiques
                    </h3>
                    <p className="text-neutral-700">
                      Identifier les fonctionnements internes (anticipations anxieuses, exigences internes,
                      suradaptation, évitements, auto-critique, etc.) et comprendre d'où ils tirent leur force et
                      comment ils s'articulent entre eux.
                    </p>
                  </Card>

                  {/* Axe 2 */}
                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      2. Approche TCC
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      Apporter des outils concrets pour :
                    </p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                      <li>comprendre les cycles émotionnels,</li>
                      <li>repérer les pensées automatiques,</li>
                      <li>modifier les comportements problématiques,</li>
                      <li>travailler la régulation émotionnelle,</li>
                      <li>réduire les stratégies d'évitement.</li>
                    </ul>
                    <p className="text-neutral-700 mt-3">
                      L'objectif est d'introduire des leviers d'action sans perdre la profondeur analytique.
                    </p>
                  </Card>

                  {/* Axe 3 */}
                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      3. Travail narratif
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      La thérapie narrative occupe une place importante dans ma pratique :
                    </p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                      <li>externaliser les problèmes pour réduire la culpabilité,</li>
                      <li>observer les récits dominants (ex. : « je dois toujours... », « je ne suis pas assez... »),</li>
                      <li>mettre au jour les récits alternatifs,</li>
                      <li>analyser la manière dont la personne raconte les événements.</li>
                    </ul>
                    <p className="text-neutral-700 mt-3">
                      Ce travail permet d'assouplir l'identité, de sortir de positions figées et de redevenir auteur
                      de son histoire.
                    </p>
                  </Card>

                  {/* Axe 4 */}
                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      4. Analyse du paradoxe et des tensions internes
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      Une part importante du travail se concentre sur les zones de contradiction :
                    </p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                      <li>volonté/peur,</li>
                      <li>dépendance/indépendance,</li>
                      <li>désir de contrôle / fatigue du contrôle,</li>
                      <li>autonomie / besoin de lien.</li>
                    </ul>
                    <p className="text-neutral-700 mt-3">
                      Ces paradoxes ne sont jamais des "incohérences", mais des organisations psychiques
                      compréhensibles, que nous explorons.
                    </p>
                  </Card>

                  {/* Axe 5 */}
                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      5. Co-construction et expertise du patient
                    </h3>
                    <p className="text-neutral-700">
                      Ma clinique est collaborative :
                      le patient est l'expert de sa vie, et ma fonction est de proposer des hypothèses, une
                      structuration, et un regard méthodique.
                      Nous avançons ensemble, en déplaçant progressivement le regard porté sur les expériences,
                      les émotions et les choix.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Résumé de l'approche */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  En résumé, mon approche clinique
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <p className="text-neutral-700">• intégrative (TCC + psychodynamique + narrative)</p>
                  </Card>
                  <Card>
                    <p className="text-neutral-700">• analytique mais concrète</p>
                  </Card>
                  <Card>
                    <p className="text-neutral-700">• centrée sur la compréhension des mécanismes internes</p>
                  </Card>
                  <Card>
                    <p className="text-neutral-700">• orientée vers la nuance, la lucidité et la capacité de choix</p>
                  </Card>
                  <Card>
                    <p className="text-neutral-700">• construite avec le patient, jamais sur lui</p>
                  </Card>
                  <Card>
                    <p className="text-neutral-700">• structurée mais non infantilisante</p>
                  </Card>
                  <Card>
                    <p className="text-neutral-700">• attentive aux récits, aux paradoxes et aux répétitions</p>
                  </Card>
                </div>
              </div>

              {/* Code de déontologie */}
              <InfoBox type="info">
                <p>
                  <strong>Éthique et déontologie :</strong> En tant que psychologue, je respecte
                  le Code de Déontologie des Psychologues (actualisé en février 2012). Ce code
                  garantit le respect de votre dignité, votre autonomie, votre vie privée et la
                  confidentialité de nos échanges.
                </p>
              </InfoBox>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Envie d'en savoir plus ou de prendre rendez-vous ?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Je serais ravie d'échanger avec vous et de répondre à vos questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/prendre-rendez-vous">
                    <Button variant="accent" size="lg">
                      Prendre rendez-vous
                    </Button>
                  </Link>
                  <Link href="/faq">
                    <Button variant="secondary" size="lg">
                      Questions fréquentes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
