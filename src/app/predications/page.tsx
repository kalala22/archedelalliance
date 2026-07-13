import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { SermonsGrid } from "@/components/sermons/sermons-grid";

export const metadata: Metadata = {
  title: "Prédications & Messages",
  description:
    "Écoutez et regardez les prédications du Centre Évangélique Arche de l'Alliance. Enseignements bibliques inspirants pour votre croissance spirituelle.",
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        title="Prédications & Messages"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Prédications" },
        ]}
        description="Nourrissez votre foi avec la Parole de Dieu prêchée avec puissance et clarté chaque semaine."
      />

      <section className="py-20 md:py-28">
        <div className="container-church">
          <SermonsGrid />
        </div>
      </section>

      <CTASection
        title="Vous souhaitez participer à nos cultes en direct ?"
        description="Nous nous réunissons chaque dimanche matin à 08h00 au Temple Central de Masina."
        buttonText="Voir nos horaires et adresse"
        buttonHref="/contact"
      />
    </>
  );
}
