import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./WhatsAppButton";

const navigation = [
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Tarif", href: "#tarif" },
  { label: "Zone desservie", href: "#zone" },
  { label: "FAQ", href: "#faq" },
];

const steps = [
  {
    number: "01",
    title: "Passez votre commande",
    text: "Envoyez-nous dans la journée le nombre de pains souhaité.",
  },
  {
    number: "02",
    title: "Nous préparons la livraison",
    text: "Pain Opiol récupère votre commande auprès de Saker.",
  },
  {
    number: "03",
    title: "Recevez votre pain",
    text: "Nous vous livrons directement chez vous le soir.",
  },
];

const benefits = [
  ["Du temps gagné", "Évitez le déplacement et la file d’attente.", "⌚"],
  ["Une livraison simple", "Vous commandez, nous nous occupons du reste.", "✓"],
  [
    "Pensé pour les familles",
    "Pain Opiol dessert directement les foyers.",
    "⌂",
  ],
  [
    "Un service local",
    "Nous commençons à Logpom pour mieux nous organiser.",
    "◎",
  ],
];

const faqs = [
  ["Quel pain livrez-vous ?", "Nous livrons actuellement du pain Saker."],
  [
    "Combien coûte la livraison ?",
    "Le service Pain Opiol coûte 100 FCFA par commande.",
  ],
  ["Combien coûte un pain ?", "Un pain Saker est vendu à 150 FCFA."],
  [
    "Quand dois-je commander ?",
    "La commande doit être passée dans la journée afin de préparer la tournée du soir.",
  ],
  [
    "À quelle heure livrez-vous ?",
    "Les livraisons sont effectuées le soir. L’horaire précis peut varier selon la tournée.",
  ],
  [
    "Dans quels quartiers livrez-vous ?",
    "Pain Opiol démarre à Logpom. Les zones voisines seront ajoutées progressivement.",
  ],
  [
    "Puis-je commander pour une boutique ?",
    "Non. Pain Opiol est actuellement réservé aux foyers.",
  ],
  [
    "Comment payer ?",
    "Le paiement se fait à la livraison dans la version actuelle du service.",
  ],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#accueil"
      aria-label="Pain Opiol — retour à l’accueil"
      className="inline-flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
    >
      <Image
        src="/pain-opiol-logo.jpg"
        width={compact ? 176 : 200}
        height={compact ? 80 : 78}
        priority={compact}
        alt="Pain Opiol, livraison de pain Saker à domicile"
        className={compact ? "h-16 w-auto lg:h-20" : "h-20 w-auto"}
      />
    </a>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-[#fffdf8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Logo compact />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded text-sm font-semibold text-stone-700 transition hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton href={siteConfig.orderUrl}>Commander</WhatsAppButton>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <WhatsAppButton
            href={siteConfig.orderUrl}
            className="hidden sm:inline-flex"
          >
            Commander
          </WhatsAppButton>
          <details className="mobile-menu relative">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-orange-200 bg-white font-black text-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              <span className="sr-only">Ouvrir le menu</span>
              <span aria-hidden="true" className="text-xl leading-none">
                ☰
              </span>
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-14 w-[min(82vw,300px)] rounded-3xl border border-orange-100 bg-white p-3 shadow-xl"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-bold text-stone-800 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-orange-600"
                >
                  {item.label}
                </a>
              ))}
              <WhatsAppButton
                href={siteConfig.orderUrl}
                className="mt-2 w-full sm:hidden"
              >
                Commander
              </WhatsAppButton>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#fffdf8]">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[520px] rounded-full bg-orange-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-56 -left-44 size-[480px] rounded-full bg-amber-100/60 blur-3xl"
      />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center justify-center px-4 py-16 sm:min-h-[680px] sm:px-6 sm:py-20 lg:min-h-[720px] lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-[2.7rem] font-black leading-[1.03] tracking-[-0.05em] text-stone-950 sm:text-6xl lg:text-[5.25rem]">
            Votre pain Saker livré directement{" "}
            <span className="text-orange-600">chez vous.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Plus besoin de vous déplacer ni de faire la file. Commandez votre
            pain dans la journée et Pain Opiol vous livre à domicile le soir.
          </p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton
              href={siteConfig.orderUrl}
              className="w-full sm:w-auto sm:px-8 sm:py-4"
            >
              Commander sur WhatsApp
            </WhatsAppButton>
            <a
              href="#comment-ca-marche"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 transition hover:border-orange-300 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 sm:w-auto"
            >
              Voir comment ça marche ↓
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-stone-500">
            À partir de{" "}
            <strong className="text-stone-800">150 F le pain + 100 F</strong> de
            service par commande.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const points = [
    "Plus de détour par la boulangerie",
    "Plus de longue attente",
    "Votre pain arrive à la maison",
  ];
  return (
    <section className="border-y border-orange-100 bg-orange-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">Pourquoi Pain Opiol ?</p>
            <h2 className="section-title mt-3">
              Le pain oui. La file d’attente, non.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-stone-600">
              Après une longue journée, personne n’a envie de passer encore 20
              minutes ou plus dans une file simplement pour acheter du pain.
            </p>
          </div>
          <div className="divide-y divide-orange-200 border-y border-orange-200 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {points.map((point) => (
              <p
                key={point}
                className="px-4 py-5 text-center font-extrabold leading-6 text-stone-900"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Comment ça marche</p>
          <h2 className="section-title mt-3">
            Commander votre pain n’a jamais été aussi simple.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="card-hover relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:p-8"
            >
              <span className="absolute right-5 top-3 text-6xl font-black tracking-tighter text-orange-100">
                {step.number}
              </span>
              <span className="relative grid size-12 place-items-center rounded-2xl bg-orange-600 font-black text-white">
                {step.number}
              </span>
              <h3 className="relative mt-8 text-xl font-black text-stone-950">
                {step.title}
              </h3>
              <p className="relative mt-3 leading-7 text-stone-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-stone-500">
          Commandez dans la journée · Nous livrons le soir · Vous payez à la
          livraison
        </p>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section
      id="tarif"
      className="scroll-mt-24 bg-stone-950 py-20 text-white sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
        <div>
          <p className="section-kicker text-orange-400">Tarif clair</p>
          <h2 className="section-title mt-3 text-white">
            Simple. Pas de surprise.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-stone-300">
            Vous payez simplement votre pain et 100 F de service pour toute la
            commande.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-stone-700 px-4 py-2 text-sm font-bold text-stone-200">
            <span className="size-2 rounded-full bg-emerald-400" /> Paiement à
            la livraison
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-[#fffaf0] p-5 text-stone-950 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="rounded-3xl bg-white p-5">
              <p className="text-sm font-bold text-stone-500">Pain Saker</p>
              <p className="mt-2 text-3xl font-black text-orange-700">
                150 <span className="text-base">FCFA</span>
              </p>
              <p className="mt-1 text-sm text-stone-500">par pain</p>
            </div>
            <span className="text-center text-3xl font-light text-orange-500">
              +
            </span>
            <div className="rounded-3xl bg-white p-5">
              <p className="text-sm font-bold text-stone-500">
                Service Pain Opiol
              </p>
              <p className="mt-2 text-3xl font-black text-orange-700">
                100 <span className="text-base">FCFA</span>
              </p>
              <p className="mt-1 text-sm text-stone-500">par commande</p>
            </div>
          </div>
          <div className="mt-5 rounded-3xl bg-orange-600 p-5 text-white sm:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-orange-400 pb-4">
              <p className="font-extrabold">Exemple : 3 pains chez vous</p>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">
                UNE COMMANDE
              </span>
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt>3 × 150 F</dt>
                <dd className="font-bold">450 F</dd>
              </div>
              <div className="flex justify-between">
                <dt>Service</dt>
                <dd className="font-bold">100 F</dd>
              </div>
              <div className="flex justify-between border-t border-orange-400 pt-4 text-lg">
                <dt className="font-black">Total</dt>
                <dd className="font-black">550 FCFA</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoverageSection() {
  return (
    <section id="zone" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-orange-50 p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 size-72 rounded-full border-[40px] border-orange-100"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                <span className="size-2 rounded-full bg-emerald-500" /> Logpom —
                disponible
              </span>
              <h2 className="section-title mt-5">
                Nous commençons par Logpom.
              </h2>
              <p className="mt-5 leading-7 text-stone-600">
                Pain Opiol démarre à Logpom afin de garantir des livraisons
                simples, rapides et bien organisées.
              </p>
              <p className="mt-3 text-sm font-bold text-stone-800">
                Zone de départ : Logpom et environs proches selon disponibilité.
              </p>
            </div>
            <WhatsAppButton
              href={siteConfig.coverageUrl}
              variant="outline"
              className="relative w-full lg:w-auto"
            >
              Vérifier si ma maison est desservie
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="bg-[#fffdf8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Pourquoi nous choisir</p>
          <h2 className="section-title mt-3">
            Le service du quartier, pensé pour la maison.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, text, icon]) => (
            <article
              key={title}
              className="card-hover rounded-3xl border border-orange-100 bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="grid size-11 place-items-center rounded-2xl bg-orange-100 text-xl font-black text-orange-700"
              >
                {icon}
              </span>
              <h3 className="mt-6 text-lg font-black text-stone-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_rgba(120,53,15,0.08)] sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="grid size-20 place-items-center rounded-3xl bg-orange-600 text-3xl text-white">
            ⌂
          </div>
          <div>
            <p className="section-kicker">Testé sur le terrain</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-stone-950 sm:text-3xl">
              Déjà testé auprès de familles à Logpom.
            </h2>
            <p className="mt-4 leading-7 text-stone-600">
              Lors de nos premières prospections, plusieurs foyers ont accepté
              le service et ont commencé à recevoir leur pain directement à
              domicile.
            </p>
            <p className="mt-4 text-sm font-bold text-orange-800">
              Premier test terrain : environ 10 foyers clients sur une vingtaine
              de foyers approchés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-600 px-6 py-12 text-center text-white sm:px-10 sm:py-16">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-100">
          Votre pain, sans la file.
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
          Et si ce soir, vous ne faisiez pas la file ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-orange-50">
          Envoyez simplement votre commande à Pain Opiol. Nous nous occupons du
          pain.
        </p>
        <WhatsAppButton
          href={siteConfig.orderUrl}
          variant="light"
          className="mt-8 w-full sm:w-auto sm:px-8 sm:py-4"
        >
          Commander maintenant
        </WhatsAppButton>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <div>
          <p className="section-kicker">Questions fréquentes</p>
          <h2 className="section-title mt-3">
            Une question ? Voici l’essentiel.
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Besoin d’une précision sur votre quartier ou votre commande ?
            Écrivez-nous directement.
          </p>
          <WhatsAppButton
            href={siteConfig.orderUrl}
            variant="outline"
            className="mt-6 w-full sm:w-auto"
          >
            Nous écrire sur WhatsApp
          </WhatsAppButton>
        </div>
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map(([question, answer]) => (
            <details key={question} className="faq-item group py-1">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-2 py-4 font-extrabold text-stone-900 focus-visible:outline-2 focus-visible:outline-orange-600">
                {question}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-orange-50 text-xl text-orange-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-2 pb-5 pr-12 leading-7 text-stone-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-[#fffaf0] pb-24 pt-12 sm:pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm font-semibold text-stone-700">
            Livraison de pain Saker à domicile.
          </p>
          <p className="mt-1 text-sm text-stone-500">
            Logpom — Douala, Cameroun
          </p>
          <p className="mt-3 max-w-md text-xs leading-5 text-stone-500">
            Pain Opiol est un service indépendant de livraison et n’est pas
            affilié à la boulangerie Saker.
          </p>
        </div>
        <div>
          <nav
            aria-label="Navigation de pied de page"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-stone-700"
          >
            <a href="#comment-ca-marche" className="hover:text-orange-700">
              Comment ça marche
            </a>
            <a href="#tarif" className="hover:text-orange-700">
              Tarif
            </a>
            <a href="#faq" className="hover:text-orange-700">
              FAQ
            </a>
            <a
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="text-orange-700"
            >
              WhatsApp
            </a>
          </nav>
          <p className="mt-5 text-sm text-stone-500 md:text-right">
            © 2026 Pain Opiol
          </p>
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
        className="w-full border-4 border-white shadow-2xl"
      >
        Commander sur WhatsApp
      </WhatsAppButton>
    </div>
  );
}
