# Instructions SEO - Déploiement sur VPS

## ✅ Ce qui a été corrigé

### 1. Sitemap.xml créé
- ✅ Fichier `/public/sitemap.xml` généré avec toutes les pages
- ✅ Script automatique `scripts/generate-sitemap.js` créé
- ✅ Intégration au build via `prebuild` dans package.json
- ✅ 8 pages incluses avec priorités optimisées

### 2. robots.txt mis à jour
- ✅ Pointe maintenant vers `https://lea-sgiaravello.fr/sitemap.xml`
- ✅ Autorise l'indexation de toutes les pages
- ✅ Bloque `/api/` uniquement

### 3. Google Search Console préparé
- ✅ Champ `verification.google` ajouté dans `app/layout.tsx`
- ✅ Variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` documentée

---

## 🚀 Actions à faire sur le VPS

### Étape 1 : Mettre à jour le code sur le VPS

```bash
# Se connecter au VPS
ssh root@srv462637

# Aller dans le dossier du projet
cd /var/www/lea/leaS

# Pull les derniers changements
git pull origin main

# Rebuild le projet (le sitemap sera généré automatiquement)
npm run build
```

### Étape 2 : Ajouter le code Google Search Console (optionnel)

Si tu as utilisé la **méthode meta tag** pour vérifier ton site sur Google Search Console :

```bash
# Éditer le fichier .env sur le VPS
nano .env

# Ajouter cette ligne (remplace par ton vrai code) :
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ton-code-verification-google

# Sauvegarder (Ctrl+O, Enter, Ctrl+X)

# Rebuild
npm run build
```

**Note :** Si tu as utilisé la méthode DNS (enregistrement TXT), cette étape n'est pas nécessaire.

---

## 🔍 Vérifications post-déploiement

### 1. Vérifier que le sitemap est accessible

Ouvre dans ton navigateur :
```
https://lea-sgiaravello.fr/sitemap.xml
```

Tu devrais voir un fichier XML avec toutes tes pages.

### 2. Vérifier le robots.txt

```
https://lea-sgiaravello.fr/robots.txt
```

Tu devrais voir :
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://lea-sgiaravello.fr/sitemap.xml
```

### 3. Soumettre le sitemap à Google Search Console

1. Va sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionne ta propriété `lea-sgiaravello.fr`
3. Menu **Sitemaps** (colonne de gauche)
4. Entre : `sitemap.xml`
5. Clique sur **Envoyer**

Google va crawler ton site dans les prochaines heures/jours.

### 4. Vérifier l'indexation dans quelques jours

Dans Google Search Console, vérifie :
- **Couverture** : combien de pages sont indexées
- **Performances** : apparitions dans les résultats de recherche

Tu peux aussi tester directement sur Google :
```
site:lea-sgiaravello.fr
```

Cela affichera toutes les pages indexées.

---

## 📊 Optimisations SEO supplémentaires (optionnel)

### 1. Ajouter des images og:image

Les métadonnées Open Graph sont configurées mais l'image `/og-image.jpg` n'existe pas.

**À faire :**
- Créer une image 1200x630px avec le nom/logo de Léa
- La placer dans `/public/og-image.jpg`
- Rebuild le site

### 2. Créer un profil Google Business

Pour apparaître dans Google Maps et les recherches locales :
1. Créer un profil sur [Google Business](https://www.google.com/intl/fr_fr/business/)
2. Vérifier l'adresse : 6 rue père louis de Jabrun, 33000 Bordeaux
3. Ajouter photos, horaires, services

### 3. Stratégie de contenu

Pour améliorer le référencement :
- Publier régulièrement du contenu (blog, articles)
- Optimiser les textes avec des mots-clés locaux
- Obtenir des backlinks (annuaires psy, partenaires)

---

## 🐛 Dépannage

### Le sitemap ne se met pas à jour

```bash
# Regénérer manuellement le sitemap
npm run generate-sitemap

# Rebuild
npm run build
```

### Google ne trouve pas le sitemap

Vérifie que le fichier existe dans le dossier `out/` après le build :
```bash
ls -la /var/www/lea/leaS/out/sitemap.xml
```

Si absent, le build n'a pas copié les fichiers `public/`. Relance :
```bash
npm run build
```

### Le site n'apparaît toujours pas sur Google après 1 semaine

1. Vérifie dans Google Search Console qu'il n'y a pas d'erreurs
2. Demande une indexation manuelle :
   - Google Search Console → Inspection de l'URL
   - Entre l'URL de ta page d'accueil
   - Clique sur "Demander une indexation"

---

## 📝 Résumé

**Fichiers modifiés :**
- ✅ `public/sitemap.xml` - Sitemap généré
- ✅ `public/robots.txt` - Pointe vers le sitemap
- ✅ `scripts/generate-sitemap.js` - Script de génération auto
- ✅ `package.json` - Commande prebuild ajoutée
- ✅ `app/layout.tsx` - Google verification préparée
- ✅ `.env.local.example` - Variable documentée

**À faire sur le VPS :**
1. Git pull
2. npm run build
3. Vérifier sitemap accessible
4. Soumettre à Google Search Console
5. Attendre l'indexation (24-72h)

**Délai d'indexation attendu :** 2-7 jours après soumission du sitemap.

---

Bon courage ! 🚀
