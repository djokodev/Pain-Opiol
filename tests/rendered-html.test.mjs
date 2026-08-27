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
    /Pain Opiol \| Livraison de pain Saker à domicile à Logpom/i,
  );
  assert.match(html, /Votre[^<]*<[^>]*>pain Saker/);
  assert.match(html, /150[^<]*<[^>]*>FCFA/);
  assert.match(html, /500[^<]*<[^>]*>FCFA/);
  assert.match(html, /Logpom/);
  assert.match(html, /Nous commençons par Logpom/);
  assert.match(html, /Images de baguettes de pain/);
  assert.match(html, /https:\/\/wa\.me\/237XXXXXXXXX\?text=/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("centralizes the editable WhatsApp placeholder", async () => {
  const [config, landing] = await Promise.all([
    readFile(new URL("../lib/site-config.ts", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/LandingPage.tsx", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(config, /PAIN_OPIOL_WHATSAPP = "237XXXXXXXXX"/);
  assert.match(
    config,
    /const orderMessage = `Bonjour Pain Opiol\nJe souhaite commander du pain Saker`/,
  );
  assert.doesNotMatch(landing, /237\d{6,}/);
  assert.match(landing, /siteConfig\.orderUrl/);
  assert.match(landing, /siteConfig\.coverageUrl/);
});
