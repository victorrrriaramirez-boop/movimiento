import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { siteUrl } from "@/lib/metadata";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atelier Architecture | Reformas Integrales de Alta Gama",
    template: "%s | Atelier Architecture"
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  robots: { index: true, follow: true }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: siteUrl,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle de Almagro 26",
    postalCode: "28010",
    addressLocality: "Madrid",
    addressCountry: "ES"
  },
  areaServed: { "@type": "City", name: "Madrid" }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body>
        <a href="#main-content" className="skipLink">Saltar al contenido</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLd data={businessSchema} />
        <Analytics />
      </body>
    </html>
  );
}
