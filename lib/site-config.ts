export const PAIN_OPIOL_WHATSAPP = "237XXXXXXXXX";

const orderMessage = `Bonjour Pain Opiol
Je souhaite commander du pain Saker`;

const coverageMessage = `Bonjour Pain Opiol 👋
Je souhaite savoir si vous livrez chez moi.

Quartier :
Repère :`;

export const siteConfig = {
  orderUrl: `https://wa.me/${PAIN_OPIOL_WHATSAPP}?text=${encodeURIComponent(orderMessage)}`,
  coverageUrl: `https://wa.me/${PAIN_OPIOL_WHATSAPP}?text=${encodeURIComponent(coverageMessage)}`,
} as const;
