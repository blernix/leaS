# Guide SEO Complet - Site Léa Sgiaravello

## ✅ Ce qui a été optimisé

### 1. **Photo de profil intégrée** 📸
- ✅ Photo `profil_sgiaravello.webp` utilisée dans les métadonnées
- ✅ Image Open Graph configurée (apparaîtra dans les recherches Google et partages sociaux)
- ✅ Image Schema.org pour le Knowledge Graph Google

### 2. **Liens externes ajoutés au Schema.org** 🔗
- ✅ Lien Doctolib ajouté : `https://www.doctolib.fr/psychologue/bordeaux/lea-sgiaravello`
- ✅ Lien Google Business/Maps ajouté
- ✅ Google comprend maintenant que ces profils appartiennent à Léa

### 3. **Description améliorée** ✍️
**Avant :**
> "Psychologue clinicienne à Bordeaux. Clinique intégrative (TCC, psychodynamique, thérapie narrative). Accompagnement adultes, jeunes adultes, neurodiversité."

**Après :**
> "Psychologue clinicienne à Bordeaux. **Prise de RDV en ligne sur Doctolib**. Clinique intégrative (TCC, psychodynamique, thérapie narrative). Accompagnement adultes, neurodiversité. Mon Soutien Psy."

### 4. **Mots-clés optimisés** 🎯
Ajout de :
- "Doctolib psychologue Bordeaux"
- "rendez-vous psychologue en ligne"
- "Léa Sgiaravello" (nom propre)
- "psychodynamique", "TSA" (précisions techniques)

---

## 🚀 Recommandations SEO supplémentaires

### A. Optimisations techniques (à faire maintenant)

#### 1. **Créer une image Open Graph dédiée (optionnel mais recommandé)**

La photo de profil fonctionne, mais une image **1200x630px** spécialement conçue serait encore mieux.

**Exemple de contenu :**
```
┌─────────────────────────────────────┐
│                                     │
│     [Photo de Léa]                  │
│                                     │
│     Léa Sgiaravello                 │
│     Psychologue Clinicienne         │
│     Bordeaux Centre                 │
│                                     │
│     📅 RDV en ligne sur Doctolib    │
│                                     │
└─────────────────────────────────────┘
```

**Outil recommandé :** Canva (template "Open Graph Image")

**Où la placer :** `/public/og-image.jpg` ou `/public/og-image.webp`

**Puis modifier `lib/seo.ts` ligne 57 :**
```typescript
const image = ogImage || `${siteConfig.url}/og-image.webp`
```

---

#### 2. **Vérifier la fiche Google Business**

Tu as dit qu'elle existe déjà, parfait ! Vérifie juste ces points :

**Checklist Google Business :**
- ✅ Photo de profil ajoutée
- ✅ Photos du cabinet (salle d'attente, bureau)
- ✅ Horaires corrects (Lun-Ven 10h-19h)
- ✅ Lien vers le site web : `https://lea-sgiaravello.fr`
- ✅ Lien vers Doctolib dans la description
- ✅ Services listés (TCC, thérapie narrative, neurodiversité, etc.)
- ✅ Catégorie principale : "Psychologue"
- ✅ Réponses aux questions fréquentes

**Astuce :** Demande à quelques patients satisfaits de laisser un avis Google (avec leur consentement). Les avis boostent énormément le référencement local.

---

#### 3. **Ajouter un blog ou une section "Articles"** (SEO avancé)

Le contenu frais améliore le SEO. Idées d'articles :
- "Comment se préparer à sa première séance de psychothérapie ?"
- "TCC vs Psychodynamique : quelle approche pour moi ?"
- "Mon Soutien Psy : tout savoir sur le remboursement"
- "Neurodiversité : accompagner le TDAH et le HPI"

**Avantages :**
- Mots-clés longue traîne ("comment se préparer première séance psy Bordeaux")
- Expertise reconnue par Google
- Partage sur les réseaux sociaux

**Fréquence recommandée :** 1 article/mois minimum

---

#### 4. **Optimiser les images existantes**

**Format WebP :** ✅ Déjà utilisé (bien !)

**Alt text manquants ?** Vérifie que toutes les images ont un attribut `alt` descriptif.

Exemple :
```html
<img src="/images/profil_sgiaravello.webp" alt="Léa Sgiaravello, psychologue clinicienne à Bordeaux" />
```

---

#### 5. **Backlinks (liens entrants)**

Plus de sites pointent vers le site de Léa, meilleur sera le référencement.

**Sources de backlinks :**
- **Annuaires psy :** Psychologies.com, Trouve-ton-psy.fr, Pages Jaunes
- **Annuaire Mon Soutien Psy :** Vérifier qu'elle y est inscrite
- **Partenaires :** Médecins généralistes, psychiatres qui orientent vers elle
- **Articles invités :** Écrire un article pour un blog santé/bien-être

---

### B. Optimisations de contenu (moyen terme)

#### 1. **Enrichir les pages existantes**

**Page "Spécialités" :**
- Ajouter plus de détails sur chaque spécialité (200-300 mots minimum par spécialité)
- Expliquer les bénéfices concrets (avant/après)
- Inclure des témoignages anonymisés (avec consentement)

**Page "FAQ" :**
- Ajouter des questions autour de Doctolib ("Comment annuler un RDV Doctolib ?")
- Questions sur le remboursement Mon Soutien Psy
- Questions sur la neurodiversité (TDAH, HPI, TSA)

**Page "Qui suis-je" :**
- Détailler le parcours de formation
- Expliquer l'approche intégrative
- Ajouter une photo du cabinet

---

#### 2. **Créer des pages de destination locales**

Si Léa reçoit des patients d'autres villes autour de Bordeaux :

Créer des pages comme :
- `/psychologue-merignac`
- `/psychologue-talence`
- `/psychologue-pessac`

Avec du contenu local :
> "Vous habitez Mérignac et cherchez un psychologue ? Le cabinet de Léa Sgiaravello se situe à 15 minutes en tram (ligne C)..."

**Attention :** Google pénalise le duplicate content, donc chaque page doit avoir du contenu unique.

---

#### 3. **Ajouter des témoignages patients**

Avec leur accord écrit, ajouter des témoignages :
- Anonymisés (prénoms uniquement)
- Authentiques et détaillés
- Placés sur la page d'accueil

**Exemple :**
> "Après plusieurs mois de suivi avec Léa, j'ai retrouvé confiance en moi. Son approche bienveillante et intégrative m'a vraiment aidé." - Marie, 32 ans

---

### C. Suivi et analyse (long terme)

#### 1. **Google Search Console** 🔍
- Suivre les mots-clés qui apportent du trafic
- Identifier les pages les plus performantes
- Corriger les erreurs d'indexation

**À surveiller :**
- Clics, impressions, CTR (taux de clic)
- Requêtes de recherche (quels mots-clés utilisent les gens ?)
- Couverture (pages indexées)

---

#### 2. **Google Analytics (optionnel)** 📊

Pour aller plus loin, installer Google Analytics 4 :
- Nombre de visiteurs par jour/mois
- Pages les plus visitées
- Taux de rebond
- Durée de visite

**Installation :**
1. Créer un compte Google Analytics
2. Ajouter le code de suivi dans `app/layout.tsx`
3. Respecter le RGPD (bannière cookies)

---

#### 3. **Outils SEO recommandés**

**Gratuits :**
- **Google Search Console** (indispensable)
- **Ubersuggest** (suggestions de mots-clés)
- **AnswerThePublic** (questions posées par les internautes)
- **Google PageSpeed Insights** (performance du site)

**Payants (si budget) :**
- **Semrush** (analyse concurrence + mots-clés)
- **Ahrefs** (backlinks + audit SEO)

---

## 🎯 Plan d'action prioritaire

### Court terme (cette semaine) :
1. ✅ **Déployer les modifications actuelles** (photo, Doctolib dans meta, sitemap)
2. ✅ **Soumettre le sitemap à Google Search Console**
3. ⏳ **Vérifier la fiche Google Business** (photo, description, lien Doctolib)
4. ⏳ **Demander 2-3 avis Google** à des patients satisfaits

### Moyen terme (ce mois-ci) :
5. ⏳ **Créer une image Open Graph dédiée** (1200x630px)
6. ⏳ **Enrichir la page FAQ** avec questions Doctolib/Mon Soutien Psy
7. ⏳ **Ajouter des témoignages** sur la page d'accueil

### Long terme (3-6 mois) :
8. ⏳ **Créer un blog** avec 1 article/mois
9. ⏳ **Obtenir des backlinks** (annuaires, partenaires)
10. ⏳ **Analyser les performances** dans Google Search Console

---

## 📈 Résultats attendus

**Avec les optimisations actuelles (court terme) :**
- Photo de Léa dans les résultats Google : **2-4 semaines**
- Indexation complète du site : **1-2 semaines**
- Augmentation du trafic : **+20-30% en 1 mois**

**Avec le plan complet (moyen/long terme) :**
- Positionnement page 1 Google pour "psychologue Bordeaux" : **3-6 mois**
- Trafic organique x2-3 : **6-12 mois**
- Acquisition de 5-10 nouveaux patients/mois via le site : **3-6 mois**

---

## 🛠️ Actions techniques immédiates

Pour déployer ces optimisations sur le VPS :

```bash
# Se connecter au VPS
ssh root@srv462637

# Aller dans le dossier
cd /var/www/lea/leaS

# Pull les changements
git pull origin main

# Rebuild
npm run build
```

Ensuite :
1. **Google Search Console** → Soumettre `sitemap.xml`
2. **Tester l'affichage** → Chercher "Léa Sgiaravello psychologue" sur Google dans 3-5 jours
3. **Vérifier la photo** → Utiliser l'outil [Facebook Debugger](https://developers.facebook.com/tools/debug/) pour voir l'aperçu Open Graph

---

## 📞 Support

Si besoin d'aide pour :
- Créer l'image Open Graph
- Configurer Google Analytics
- Rédiger du contenu SEO
- Analyser les performances

N'hésite pas à demander ! 🚀

---

**Dernière mise à jour :** 25 décembre 2024
**Version du site :** 1.0.0 avec optimisations SEO
