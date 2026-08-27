import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL(".vercel/output/", projectRoot);
const staticOutput = new URL("static/", outputRoot);

async function renderPage(pathname) {
  const workerUrl = new URL(
    `../dist/server/index.js?static-export=${Date.now()}`,
    import.meta.url,
  );
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`https://pain-opiol.vercel.app${pathname}`, {
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

  if (!response.ok) {
    throw new Error(`Failed to render ${pathname}: ${response.status}`);
  }

  return response.text();
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(staticOutput, { recursive: true });

await cp(new URL("../dist/client/", import.meta.url), staticOutput, {
  recursive: true,
});

const html = await renderPage("/");
await writeFile(new URL("index.html", staticOutput), html);
await writeFile(
  new URL("config.json", outputRoot),
  JSON.stringify({ version: 3 }, null, 2),
);

console.log("Vercel static output ready in .vercel/output");
