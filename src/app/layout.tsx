import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
