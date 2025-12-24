#!/usr/bin/env node

/**
 * Script de génération automatique du sitemap.xml
 * Exécuté avant chaque build pour mettre à jour les dates
 */

const fs = require('fs')
const path = require('path')

// Configuration
const SITE_URL = 'https://lea-sgiaravello.fr'
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml')

// Liste des pages avec leur configuration
const pages = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/qui-suis-je',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/specialites',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/prendre-rendez-vous',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/faq',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/informations-pratiques',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/mentions-legales',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/politique-confidentialite',
    changefreq: 'yearly',
    priority: 0.3,
  },
]

// Obtenir la date actuelle au format ISO (YYYY-MM-DD)
const today = new Date().toISOString().split('T')[0]

// Générer le XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (page) => `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}

</urlset>
`

// Écrire le fichier
try {
  fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8')
  console.log('✅ Sitemap généré avec succès:', OUTPUT_PATH)
  console.log(`   ${pages.length} pages incluses`)
  console.log(`   Date de dernière modification: ${today}`)
} catch (error) {
  console.error('❌ Erreur lors de la génération du sitemap:', error)
  process.exit(1)
}
