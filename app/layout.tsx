import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pain-opiol-logpom.djokodev.chatgpt.site"),
  title: "Pain Opiol | Livraison de pain Saker à domicile à Logpom",
  description:
    "Commandez votre pain Saker et faites-vous livrer directement à domicile à Logpom. Pain Opiol vous évite le déplacement et les longues files d’attente.",
  icons: {
    icon: "/pain-opiol-logo.jpg",
    shortcut: "/pain-opiol-logo.jpg",
  },
  openGraph: {
    title: "Pain Opiol | Votre pain Saker livré à Logpom",
    description:
      "Commandez dans la journée, recevez votre pain à domicile le soir. 150 F le pain + 100 F par commande.",
    locale: "fr_CM",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pain Opiol — votre pain Saker livré chez vous à Logpom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pain Opiol | Votre pain Saker livré à Logpom",
    description:
      "Votre pain Saker à domicile, sans déplacement ni file d’attente.",
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
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
