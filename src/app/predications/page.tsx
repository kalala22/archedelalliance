import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { SermonsGrid } from "@/components/sermons/sermons-grid";
import { fetchYouTubeSermons } from "@/services/youtube";
import { API_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: "Prédications & Messages",
  description:
    "Écoutez et regardez les prédications du Centre Évangélique Arche de l'Alliance. Enseignements bibliques inspirants pour votre croissance spirituelle.",
};

interface SermonsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SermonsPage({ searchParams }: SermonsPageProps) {
  const resolvedSearchParams = await searchParams;
  const videoId = typeof resolvedSearchParams?.videoId === "string" ? resolvedSearchParams.videoId : undefined;
  const sermons = await fetchYouTubeSermons(API_CONFIG.youtube.maxResultsPage);

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
          <Suspense fallback={<div className="py-16 text-center font-heading text-lg text-[var(--color-navy)]">Chargement des prédications...</div>}>
            <SermonsGrid initialSermons={sermons} initialVideoId={videoId} />
          </Suspense>
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
