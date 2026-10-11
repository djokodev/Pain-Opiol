import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";

const description =
  "Ne perdez plus votre temps dans le rang. Commandez votre pain Saker sur WhatsApp avant 18 h, on vous le livre emballé à domicile entre 18 h et 21 h. 150 F le pain, 500 F la livraison.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pain Opiol | Livraison de pain Saker à domicile à Douala",
  description,
  icons: {
    icon: "/pain-opiol-logo.jpg",
    shortcut: "/pain-opiol-logo.jpg",
  },
  openGraph: {
    title: "Pain Opiol | Votre pain Saker livré, votre temps gagné",
    description:
      description,
    locale: "fr_CM",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pain Opiol, le pain Saker livré à domicile à Douala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pain Opiol | Votre pain Saker livré, votre temps gagné",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
