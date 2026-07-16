import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { churchInfo } from "@/data/church";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://archedelalliance.cd"),
  title: {
    default: "Centre Évangélique Arche de l'Alliance",
    template: "%s | Arche de l'Alliance",
  },
  description:
    "Bienvenue au Centre Évangélique Arche de l'Alliance, une église dynamique à Masina, Kinshasa (RDC). Un lieu de foi, d'espérance et d'amour.",
  keywords: [
    "église",
    "Kinshasa",
    "Masina",
    "évangélique",
    "Arche de l'Alliance",
    "culte",
    "prédication",
    "foi",
    "RDC",
    "Congo",
  ],
  authors: [{ name: "Centre Évangélique Arche de l'Alliance" }],
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://archedelalliance.cd",
    siteName: "Centre Évangélique Arche de l'Alliance",
    title: "Centre Évangélique Arche de l'Alliance",
    description:
      "Un lieu de foi, d'espérance et d'amour à Masina, Kinshasa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre Évangélique Arche de l'Alliance",
    description:
      "Un lieu de foi, d'espérance et d'amour à Masina, Kinshasa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Church", "Organization"],
    name: churchInfo.name,
    alternateName: churchInfo.shortName,
    description: churchInfo.tagline,
    url: "https://archedelalliance.cd",
    logo: "https://archedelalliance.cd/favicon.ico",
    telephone: churchInfo.phone,
    email: churchInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: churchInfo.address,
      addressLocality: churchInfo.city.split(",")[0].trim(),
      addressCountry: "CD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: churchInfo.coordinates.lat,
      longitude: churchInfo.coordinates.lng,
    },
    sameAs: churchInfo.socialLinks.map((s) => s.url),
  };

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full w-full max-w-full flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
