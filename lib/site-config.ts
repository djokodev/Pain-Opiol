// Numéro WhatsApp qui reçoit les commandes (format international, sans "+").
export const PAIN_OPIOL_WHATSAPP = "237691257946";
export const PAIN_OPIOL_PHONE_DISPLAY = "+237 691 25 79 46";

// Adresse publique du site (sert aux aperçus WhatsApp/Facebook et au lien partagé).
// À changer si le site est servi sur un autre domaine.
export const SITE_URL = "https://pain-opiol.vercel.app";

export const BREAD_PRICE = 150;
export const SERVICE_FEE = 500;

// Nombre de foyers inscrits nécessaires pour ouvrir une tournée dans un quartier.
export const HOUSEHOLDS_PER_ZONE = 10;

export function whatsappLink(message: string) {
  return `https://wa.me/${PAIN_OPIOL_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(quantity?: number) {
  const breads = quantity
    ? `${quantity} pain${quantity > 1 ? "s" : ""} Saker`
    : "du pain Saker";
  return `Bonjour,
Je souhaite commander ${breads} pour ce soir.

Nom :
Quartier :
Repère :`;
}

const joinMessage = `Bonjour,
Je veux inscrire mon foyer pour que Pain Opiol livre dans mon quartier.

Nom :
Quartier :
Repère :`;

const shareMessage = `Salut ! Tu connais Pain Opiol ? Ils livrent le pain Saker à domicile le soir, plus besoin de faire le rang (${BREAD_PRICE} F le pain + ${SERVICE_FEE} F la livraison).
Ils ouvrent un nouveau quartier dès que ${HOUSEHOLDS_PER_ZONE} foyers s'inscrivent. Inscris-toi aussi pour qu'on soit livrés chez nous :
${SITE_URL}`;

export const siteConfig = {
  orderUrl: whatsappLink(orderMessage()),
  joinUrl: whatsappLink(joinMessage),
  shareUrl: `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
} as const;

export function formatFcfa(value: number) {
  return value.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
}
