import Image from "next/image";
import {
  BREAD_PRICE,
  HOUSEHOLDS_PER_ZONE,
  PAIN_OPIOL_PHONE_DISPLAY,
  SERVICE_FEE,
  siteConfig,
} from "@/lib/site-config";
import { WhatsAppButton } from "./WhatsAppButton";
import { PriceCalculator } from "./PriceCalculator";

const navigation = [
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Tarif", href: "#tarif" },
  { label: "Votre quartier", href: "#quartiers" },
  { label: "Questions", href: "#faq" },
];

const evening = [
  {
    time: "Avant 18 h",
    title: "Vous commandez sur WhatsApp",
    text: "Le nombre de pains, votre quartier et votre repère. C’est tout.",
  },
  {
    time: "Vers 18 h",
    title: "On achète et on emballe",
    text: "On récupère votre pain frais chez Saker, on revient dans nos locaux et on emballe chaque commande à part, au nom de chaque client.",
  },
  {
    time: "18 h – 21 h",
    title: "On vous livre à domicile",
    text: "Maison ou appartement, le livreur vous prévient quand il est en route et vous remet la commande en main propre. Vous payez à la réception.",
  },
];

const openingSteps = [
  {
    title: "Inscrivez votre foyer",
    text: "Envoyez-nous votre quartier et votre repère sur WhatsApp.",
  },
  {
    title: "Invitez vos voisins",
    text: "Résidence, immeuble, rue : partagez Pain Opiol autour de vous.",
  },
  {
    title: `À ${HOUSEHOLDS_PER_ZONE} foyers, on démarre`,
    text: "On vous prévient et la tournée passe chez vous tous les soirs.",
  },
];

const faqs = [
  [
    "Quel pain livrez-vous ?",
    "Uniquement du pain Saker, acheté frais le jour même et emballé commande par commande.",
  ],
  [
    "Combien ça coûte ?",
    `Le pain reste à ${BREAD_PRICE} F, son prix normal chez Saker. On ajoute ${SERVICE_FEE} F de livraison par commande, que vous preniez 2 pains ou 15.`,
  ],
  [
    "Jusqu’à quelle heure je peux commander ?",
    "Envoyez votre commande avant 18 h pour être livré le soir même.",
  ],
  [
    "À quelle heure vous livrez ?",
    "Entre 18 h et 21 h. On vous prévient dès que le livreur est en route.",
  ],
  [
    "Vous livrez dans mon quartier ?",
    `On livre partout où au moins ${HOUSEHOLDS_PER_ZONE} foyers du même quartier ou de la même résidence se sont inscrits. On a commencé à Logpom. Votre quartier n’est pas encore ouvert ? Inscrivez votre foyer et invitez vos voisins : dès ${HOUSEHOLDS_PER_ZONE} foyers, la tournée démarre.`,
  ],
  [
    "Je n’ai pas d’adresse précise, c’est grave ?",
    "Pas du tout. Donnez-nous un repère (une pharmacie, une église, la couleur du portail) et le livreur vous appelle en arrivant.",
  ],
  [
    "Je peux commander pour ma boutique ?",
    "Non. Pain Opiol livre uniquement les familles et les particuliers.",
  ],
  [
    "Comment je paie ?",
    "À la livraison, en espèces ou par Mobile Money.",
  ],
];

function Logo({ variant = "wide" }: { variant?: "wide" | "square" }) {
  const wide = variant === "wide";
  return (
    <a
      href="#accueil"
      aria-label="Pain Opiol, retour en haut de la page"
      className="inline-flex shrink-0 items-center rounded-lg focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-croute"
    >
      <Image
        src={wide ? "/pain-opiol-logo-wide.png" : "/pain-opiol-logo.jpg"}
        width={wide ? 1076 : 720}
        height={wide ? 240 : 720}
        priority={wide}
        unoptimized
        alt="Pain Opiol"
        className={wide ? "h-11 w-auto sm:h-13" : "h-24 w-auto"}
      />
    </a>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cacao/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded font-semibold text-cacao/80 transition-colors hover:text-croute focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-croute"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton href={siteConfig.orderUrl}>Commander</WhatsAppButton>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="hidden sm:block">
            <WhatsAppButton href={siteConfig.orderUrl}>Commander</WhatsAppButton>
          </div>
          <details className="mobile-menu relative">
            <summary className="flex h-11 cursor-pointer list-none items-center rounded-xl border-2 border-cacao px-4 font-bold text-cacao focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-croute">
              Menu
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-14 w-[min(84vw,300px)] rounded-2xl border border-cacao/10 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(59,26,14,0.45)]"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 font-semibold text-cacao hover:bg-mie focus-visible:outline-3 focus-visible:outline-croute"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

type Bubble = {
  from: "client" | "opiol";
  text: string;
  time: string;
};

const conversation: Bubble[] = [
  {
    from: "client",
    text: "Bonsoir, 4 pains pour ce soir svp. Repère : après la pharmacie, portail bleu.",
    time: "16:42",
  },
  {
    from: "opiol",
    text: "Bien reçu ! 4 pains Saker + livraison, ça fait 1 100 F. On passe entre 18 h et 21 h.",
    time: "16:44",
  },
  {
    from: "opiol",
    text: "Bonsoir, le livreur est en route. Il arrive dans 10 minutes.",
    time: "19:02",
  },
  { from: "client", text: "D’accord, merci. Je sors.", time: "19:03" },
];

function ChatMockup() {
  return (
    <div
      role="img"
      aria-label="Une commande de 4 pains passée sur WhatsApp, puis le message du livreur en route"
      className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:justify-self-end"
    >
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1e0d06] bg-[#efe4d3] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-3 bg-[#1e0d06] px-4 pb-3 pt-4 text-white">
          <Image
            src="/pain-opiol-logo.jpg"
            width={720}
            height={720}
            unoptimized
            alt=""
            className="size-10 rounded-full bg-white object-cover"
          />
          <div className="leading-tight">
            <p className="font-bold">Pain Opiol</p>
            <p className="text-xs text-white/60">en ligne</p>
          </div>
        </div>
        <ol className="chat flex flex-col gap-2.5 px-3 py-5">
          {conversation.map((bubble, index) => (
            <li
              key={bubble.time + index}
              style={{ animationDelay: `${0.35 + index * 0.55}s` }}
              className={`bubble max-w-[85%] rounded-2xl px-3.5 py-2 text-[0.92rem] leading-snug text-[#1b1b1b] shadow-sm ${
                bubble.from === "client"
                  ? "self-end rounded-br-md bg-[#d9fdd3]"
                  : "self-start rounded-bl-md bg-white"
              }`}
            >
              {bubble.text}
              <span className="mt-0.5 block text-right text-[0.7rem] text-black/45">
                {bubble.time}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-cacao text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.3fr_.7fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.1rem]">
            <span className="sm:block">Votre temps est </span>
            <span className="sm:block">trop précieux </span>
            <span className="sm:block">pour faire le rang.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-8 text-white/80">
            Pain Opiol achète votre pain Saker, l’emballe avec soin et vous le
            livre à domicile le soir même. Vous, vous profitez de votre soirée.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              href={siteConfig.orderUrl}
              className="min-h-14 px-7 text-base"
            >
              Commander sur WhatsApp
            </WhatsAppButton>
            <a
              href="#tarif"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-white/30 px-7 font-bold text-white transition-colors hover:border-soleil hover:text-soleil focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-soleil"
            >
              Calculer ma commande
            </a>
          </div>
          <p className="mt-6 text-white/70">
            Commandez avant 18&nbsp;h, livraison entre 18&nbsp;h et 21&nbsp;h.{" "}
            <strong className="text-white">{BREAD_PRICE} F</strong> le pain +{" "}
            <strong className="text-white">{SERVICE_FEE} F</strong> la
            livraison.
          </p>
        </div>
        <ChatMockup />
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:px-8">
        <figure className="relative">
          <Image
            src="/hero-family-breakfast.jpg"
            width={1800}
            height={1201}
            unoptimized
            alt="Une famille prépare des tartines dans la cuisine"
            className="aspect-[3/2] w-full rounded-3xl object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-cacao backdrop-blur">
            Le pain vient à vous, pas l’inverse.
          </figcaption>
        </figure>
        <div>
          <h2 className="section-title">
            18 h 30, le rang chez Saker. On connaît.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cacao/80">
            Vous sortez du travail, il y a la circulation, et au bout il faut
            encore attendre pour quelques baguettes. Et demain matin, il faut du
            pain pour le petit-déjeuner des enfants.
          </p>
          <p className="mt-4 text-lg leading-8 text-cacao/80">
            Avec Pain Opiol, vous rentrez directement. On fait le déplacement
            pour vous et votre pain arrive chez vous, bien emballé.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="comment-ca-marche"
      className="scroll-mt-20 border-t border-cacao/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title max-w-2xl">
          Votre soirée avec Pain Opiol.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {evening.map((step) => (
            <li key={step.time} className="border-t-2 border-cacao pt-6">
              <p className="font-display text-3xl font-extrabold text-croute sm:text-4xl">
                {step.time}
              </p>
              <h3 className="mt-3 text-xl font-bold text-cacao">{step.title}</h3>
              <p className="mt-2 leading-7 text-cacao/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="tarif" className="scroll-mt-20 bg-mie py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-20 lg:px-8">
        <div>
          <h2 className="section-title">
            Le pain au prix Saker. La livraison à {SERVICE_FEE} F.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cacao/80">
            Un pain coûte {BREAD_PRICE} F, exactement comme à la boulangerie. On
            ajoute {SERVICE_FEE} F par commande pour la course et l’emballage,
            que vous preniez 2 pains ou 15.
          </p>
          <p className="mt-6 max-w-xl leading-7 text-cacao/70">
            Rien à payer à l’avance : vous réglez au livreur, en espèces ou par
            Mobile Money.
          </p>
        </div>
        <PriceCalculator />
      </div>
    </section>
  );
}

export function CoverageSection() {
  return (
    <section id="quartiers" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="section-title">
            {HOUSEHOLDS_PER_ZONE} foyers dans votre quartier ? On vient livrer.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cacao/80">
            Pain Opiol fonctionne par tournées de quartier. Dès que{" "}
            {HOUSEHOLDS_PER_ZONE} foyers d’un même quartier ou d’une même
            résidence s’inscrivent, on ouvre une tournée chez vous, tous les
            soirs.
          </p>
          <p className="mt-4 text-lg leading-8 text-cacao/80">
            On a commencé à Logpom. Chaque nouveau groupe de{" "}
            {HOUSEHOLDS_PER_ZONE} foyers ouvre un nouveau quartier, n’importe où
            à Douala.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton href={siteConfig.joinUrl}>
              Inscrire mon foyer
            </WhatsAppButton>
            <WhatsAppButton href={siteConfig.shareUrl} variant="outline">
              Partager à mes voisins
            </WhatsAppButton>
          </div>
        </div>

        <div className="rounded-3xl bg-cacao p-7 text-white sm:p-9">
          <h3 className="font-display text-2xl font-bold">
            Ouvrir votre quartier en 3 étapes
          </h3>
          <ol className="mt-7 space-y-6">
            {openingSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-4">
                <span className="grid size-9 place-items-center rounded-full bg-soleil font-display font-extrabold text-cacao">
                  {index + 1}
                </span>
                <div>
                  <p className="font-bold">{step.title}</p>
                  <p className="mt-1 leading-6 text-white/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 border-t border-white/15 pt-6">
            <div aria-hidden="true" className="flex gap-1.5">
              {Array.from({ length: HOUSEHOLDS_PER_ZONE }, (_, i) => (
                <span key={i} className="h-2.5 flex-1 rounded-full bg-soleil" />
              ))}
            </div>
            <p className="mt-3 text-sm text-white/70">
              {HOUSEHOLDS_PER_ZONE} foyers inscrits = une tournée ouverte chaque
              soir dans votre quartier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-cacao/10 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="section-title">Vos questions.</h2>
          <p className="mt-6 text-lg leading-8 text-cacao/80">
            Vous ne trouvez pas la réponse ? Écrivez-nous directement, on répond
            vite.
          </p>
          <WhatsAppButton
            href={siteConfig.orderUrl}
            variant="outline"
            className="mt-7 w-full sm:w-auto"
          >
            Poser ma question sur WhatsApp
          </WhatsAppButton>
        </div>
        <div className="border-t-2 border-cacao">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="faq-item group border-b border-cacao/15"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-cacao focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-croute">
                {question}
                <span
                  aria-hidden="true"
                  className="text-2xl font-normal leading-none text-croute transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 leading-7 text-cacao/80">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-feuille text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Ce soir, laissez le rang aux autres.
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Commandez avant 18 h sur WhatsApp au{" "}
            <span className="whitespace-nowrap font-bold text-white">
              {PAIN_OPIOL_PHONE_DISPLAY}
            </span>
            .
          </p>
        </div>
        <WhatsAppButton
          href={siteConfig.orderUrl}
          variant="light"
          className="min-h-14 w-full shrink-0 px-8 text-base sm:w-auto"
        >
          Commander maintenant
        </WhatsAppButton>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white pb-28 pt-12 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="flex items-center gap-4">
          <Logo variant="square" />
          <div className="text-sm leading-6 text-cacao/75">
            <p>Livraison de pain Saker à domicile, à Douala.</p>
            <p>
              Nouveau quartier dès {HOUSEHOLDS_PER_ZONE} foyers inscrits.
            </p>
            <p>
              WhatsApp :{" "}
              <a
                href={siteConfig.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cacao hover:text-croute"
              >
                {PAIN_OPIOL_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
        <div className="md:text-right">
          <nav
            aria-label="Navigation de pied de page"
            className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-cacao/80 md:justify-end"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-croute">
                {item.label}
              </a>
            ))}
          </nav>
          <p className="mt-4 text-sm text-cacao/55">© 2026 Pain Opiol</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileWhatsAppBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 sm:hidden">
      <WhatsAppButton
        href={siteConfig.orderUrl}
        className="min-h-14 w-full text-base shadow-[0_12px_30px_-8px_rgba(0,0,0,0.45)]"
      >
        Commander sur WhatsApp
      </WhatsAppButton>
    </div>
  );
}
