import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Galerie Photos",
  description:
    "Découvrez en images la vie de notre église : cultes, événements, activités de la jeunesse et action communautaire à l'Arche de l'Alliance.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Galerie Photos"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Galerie" }]}
        description="Plongez au cœur de notre vie d'église à travers nos moments d'adoration, de communion fraternelle et d'impact communautaire."
      />

      <section className="py-20 md:py-28">
        <div className="container-church">
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Venez vivre ces moments avec nous !"
        description="Les photos racontent une partie de l'histoire, mais rien ne remplace l'expérience de la présence de Dieu au milieu de son peuple."
        buttonText="Nous rendre visite"
      />
    </>
  );
}
