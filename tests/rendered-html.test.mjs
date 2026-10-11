import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Pain Opiol landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="fr">/i);
  assert.match(
    html,
    /Pain Opiol \| Livraison de pain Saker à domicile à Douala/i,
  );
  assert.match(html, /Votre temps est .*trop précieux .*pour faire le rang\./);
  assert.match(html, /foyers dans votre quartier \? On vient livrer/);
  assert.match(html, /https:\/\/wa\.me\/237691257946\?text=/);
  assert.match(html, /\+237 691 25 79 46/);
  assert.doesNotMatch(html, /237X{3,}/);
  assert.doesNotMatch(html, /5 foyers|nombreuses familles|stresse|Exemple de commande|déjà écrit/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps the WhatsApp number and prices in one config file", async () => {
  const config = await readFile(
    new URL("../lib/site-config.ts", import.meta.url),
    "utf8",
  );

  assert.match(config, /PAIN_OPIOL_WHATSAPP = "237691257946"/);
  assert.match(config, /BREAD_PRICE = 150/);
  assert.match(config, /SERVICE_FEE = 500/);
});
