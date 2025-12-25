/**
 * Utilitaires et configurations SEO pour le site
 */

import { Metadata } from 'next'

// Informations du site (à personnaliser)
export const siteConfig = {
  name: 'Léa Sgiaravello',
  title: 'Psychologue à Bordeaux | Léa Sgiaravello',
  description: 'Psychologue clinicienne à Bordeaux. Prise de RDV en ligne sur Doctolib. Clinique intégrative (TCC, psychodynamique, thérapie narrative). Accompagnement adultes, neurodiversité. Mon Soutien Psy.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lea-sgiaravello-psy.fr',
  locale: 'fr_FR',
  author: 'Léa Sgiaravello',

  // Coordonnées professionnelles
  professional: {
    name: 'Léa Sgiaravello',
    title: 'Psychologue Clinicienne',
    adeli: '0779321256',
    siret: '989 924 253 00010',
    rpps: '10009026849',
    email: 'lea.sgiaravello@hotmail.fr',
    phone: '07 75 24 85 09',
    address: {
      street: '6 rue père louis de Jabrun',
      postalCode: '33000',
      city: 'Bordeaux',
      region: 'Nouvelle-Aquitaine',
      country: 'FR'
    }
  },

  // Réseaux sociaux (optionnel)
  social: {
    // facebook: '',
    // linkedin: '',
    // instagram: '',
  }
}

/**
 * Génère les métadonnées de base pour une page
 */
export function generateMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const image = ogImage || `${siteConfig.url}/images/profil_sgiaravello.webp`

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    keywords: [
      'psychologue Bordeaux',
      'psychologue Bordeaux centre',
      'Doctolib psychologue Bordeaux',
      'rendez-vous psychologue en ligne',
      'thérapie Bordeaux',
      'consultation psychologique',
      'anxiété',
      'stress',
      'confiance en soi',
      'TCC Bordeaux',
      'thérapie cognitive comportementale',
      'thérapie narrative',
      'psychodynamique',
      'neurodiversité',
      'TDAH',
      'HPI',
      'TSA',
      'Mon Soutien Psy',
      'remboursement psychologue',
      'Léa Sgiaravello',
    ],
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Génère le JSON-LD pour Schema.org (LocalBusiness + Psychologist)
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    '@id': siteConfig.url,
    name: siteConfig.professional.name,
    image: `${siteConfig.url}/images/profil_sgiaravello.webp`,
    url: siteConfig.url,
    telephone: siteConfig.professional.phone,
    email: siteConfig.professional.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.professional.address.street,
      addressLocality: siteConfig.professional.address.city,
      postalCode: siteConfig.professional.address.postalCode,
      addressRegion: siteConfig.professional.address.region,
      addressCountry: siteConfig.professional.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Coordonnées de Bordeaux centre (6 rue père louis de Jabrun)
      latitude: 44.8378,
      longitude: -0.5792,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Bordeaux',
      '@id': 'https://www.wikidata.org/wiki/Q1479',
    },
    sameAs: [
      'https://www.doctolib.fr/psychologue/bordeaux/lea-sgiaravello',
      'https://www.google.com/maps/place/?q=place_id:ChIJCZLHxVm3Vg0RcF1Kf0QqKAE',
      ...Object.values(siteConfig.social).filter(Boolean),
    ],
  }
}

/**
 * Génère le JSON-LD pour une page d'article/blog
 */
export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${siteConfig.url}/og-image.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.professional.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.professional.name,
    },
  }
}

/**
 * Génère le JSON-LD pour la page FAQ
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Génère le breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
