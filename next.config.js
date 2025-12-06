/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique pour hébergement simple
  // Le formulaire appelle maintenant une API externe (emailpro), donc l'export statique fonctionne
  output: 'export',

  images: {
    // Pour l'export statique, on doit désactiver l'optimisation d'images
    unoptimized: true,
  },

  reactStrictMode: true,
  // Optimisations pour la performance
  swcMinify: true,
}

module.exports = nextConfig
