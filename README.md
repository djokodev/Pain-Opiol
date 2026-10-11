# Pain Opiol

Site vitrine de Pain Opiol : livraison de pain Saker à domicile à Logpom
(Douala). Les commandes arrivent directement sur WhatsApp.

## Modifier les infos importantes

Tout est dans `lib/site-config.ts` :

- `PAIN_OPIOL_WHATSAPP` : numéro qui reçoit les commandes (format `237…`, sans `+`)
- `PAIN_OPIOL_PHONE_DISPLAY` : le même numéro, tel qu'il s'affiche sur le site
- `BREAD_PRICE` et `SERVICE_FEE` : prix du pain et frais de livraison
- `SITE_URL` : domaine public du site (utilisé pour l'aperçu des liens partagés)
- les messages WhatsApp pré-remplis

Les textes de la page sont dans `app/components/LandingPage.tsx`.

## Commandes

Node.js `>=22.13.0`.

```bash
npm install
npm run dev           # développement local
npm test              # build + vérification du HTML rendu
npm run vercel:build  # build statique pour Vercel (.vercel/output)
```

## Structure

- `app/page.tsx` : ordre des sections
- `app/components/LandingPage.tsx` : toutes les sections
- `app/components/PriceCalculator.tsx` : calculateur de prix (nombre de pains → total → WhatsApp)
- `app/globals.css` : couleurs, polices et effets
- `public/` : logo, photos et image de partage `og.png`

Le projet tourne sur [vinext](https://github.com/cloudflare/vinext) (Next.js
sur Vite). `scripts/export-static.mjs` transforme le build en site statique
pour Vercel.
