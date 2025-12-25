/**
 * Composant Footer avec informations de contact et liens légaux
 */

import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-neutral-200" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne 1 : À propos */}
          <div>
            <h2 className="text-lg font-heading font-semibold text-white mb-4">
              Léa Sgiaravello
            </h2>
            <p className="text-sm text-neutral-300 mb-4">
              Psychologue clinicienne à Bordeaux. Clinique intégrative (TCC, psychodynamique,
              thérapie narrative). J'accueille enfants, adolescents et adultes.
            </p>
            <p className="text-xs text-neutral-400">
              N° ADELI : {siteConfig.professional.adeli}
            </p>
          </div>

          {/* Colonne 2 : Adresse & Rendez-vous */}
          <div>
            <h2 className="text-lg font-heading font-semibold text-white mb-4">
              Cabinet
            </h2>
            <address className="not-italic text-sm space-y-4">
              <p className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {siteConfig.professional.address.street}
                  <br />
                  {siteConfig.professional.address.postalCode}{' '}
                  {siteConfig.professional.address.city}
                </span>
              </p>

              <div>
                <a
                  href="https://www.doctolib.fr/psychologue/bordeaux/lea-sgiaravello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800"
                >
                  <svg
                    className="w-4 h-4"
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
                  Prendre rendez-vous
                </a>
              </div>
            </address>
          </div>

          {/* Colonne 3 : Horaires & Liens */}
          <div>
            <h2 className="text-lg font-heading font-semibold text-white mb-4">
              Horaires
            </h2>
            <div className="text-sm space-y-1 mb-6">
              <p>Lundi - Vendredi : 10h00 - 19h00</p>
              <p className="text-neutral-400">Samedi - Dimanche : Fermé</p>
              <p className="text-xs text-neutral-400 mt-2">Sur rendez-vous uniquement</p>
            </div>

            <h3 className="text-sm font-semibold text-white mb-2">
              Liens utiles
            </h3>
            <nav aria-label="Liens légaux" className="text-sm space-y-1">
              <Link
                href="/mentions-legales"
                className="block hover:text-white transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block hover:text-white transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Politique de confidentialité
              </Link>
            </nav>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div className="text-center md:text-left">
              <p className="mb-2">
                © {currentYear} Léa Sgiaravello - Psychologue. Tous droits réservés.
              </p>
              <p className="text-xs">
                Site créé par{' '}
                <a
                  href="https://killian-lecrut.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  l'agence Killian Lecrut
                </a>
              </p>
            </div>
            <p className="text-xs">
              Site conforme RGPD • Accessible WCAG 2.1 AA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
