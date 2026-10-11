"use client";

import { useState } from "react";
import {
  BREAD_PRICE,
  SERVICE_FEE,
  formatFcfa,
  orderMessage,
  whatsappLink,
} from "@/lib/site-config";

const MIN = 1;
const MAX = 30;

export function PriceCalculator() {
  const [quantity, setQuantity] = useState(4);
  const breadsTotal = quantity * BREAD_PRICE;
  const total = breadsTotal + SERVICE_FEE;

  const change = (delta: number) =>
    setQuantity((q) => Math.min(MAX, Math.max(MIN, q + delta)));

  return (
    <div className="ticket relative bg-white p-6 text-cacao shadow-[0_30px_60px_-30px_rgba(59,26,14,0.55)] sm:p-8">
      <p className="font-display text-lg font-bold">Combien de pains ce soir ?</p>

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={() => change(-1)}
          disabled={quantity <= MIN}
          aria-label="Un pain de moins"
          className="grid size-14 place-items-center rounded-xl border-2 border-cacao text-3xl font-bold leading-none transition-colors hover:bg-cacao hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cacao focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-croute"
        >
          −
        </button>
        <output
          aria-live="polite"
          className="min-w-[4ch] text-center font-display text-6xl font-extrabold tabular-nums"
        >
          {quantity}
        </output>
        <button
          type="button"
          onClick={() => change(1)}
          disabled={quantity >= MAX}
          aria-label="Un pain de plus"
          className="grid size-14 place-items-center rounded-xl border-2 border-cacao text-3xl font-bold leading-none transition-colors hover:bg-cacao hover:text-white disabled:opacity-30 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-croute"
        >
          +
        </button>
      </div>

      <dl className="mt-7 space-y-3 border-t-2 border-dashed border-cacao/25 pt-5 text-[0.95rem]">
        <div className="flex justify-between gap-4">
          <dt>
            {quantity} pain{quantity > 1 ? "s" : ""} Saker × {BREAD_PRICE} F
          </dt>
          <dd className="font-semibold tabular-nums">{formatFcfa(breadsTotal)} F</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Livraison à domicile</dt>
          <dd className="font-semibold tabular-nums">{formatFcfa(SERVICE_FEE)} F</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t-2 border-cacao pt-4">
          <dt className="font-display text-lg font-bold leading-tight sm:text-xl">À payer à la livraison</dt>
          <dd className="font-display whitespace-nowrap text-3xl font-extrabold tabular-nums text-croute">
            {formatFcfa(total)} F
          </dd>
        </div>
      </dl>

      <a
        href={whatsappLink(orderMessage(quantity))}
        target="_blank"
        rel="noreferrer"
        className="mt-7 flex min-h-14 w-full items-center justify-center rounded-xl bg-feuille px-5 py-3 text-center font-bold text-white transition-colors hover:bg-feuille-fonce focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-croute"
      >
        Commander {quantity} pain{quantity > 1 ? "s" : ""} sur WhatsApp
      </a>
    </div>
  );
}
