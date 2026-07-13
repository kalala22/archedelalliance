import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { EventsList } from "@/components/events/events-list";

export const metadata: Metadata = {
  title: "Événements & Agenda",
  description:
    "Consultez l'agenda et les prochains événements du Centre Évangélique Arche de l'Alliance : cultes spéciaux, conférences, retraites spirituelles et rassemblements.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Événements & Agenda"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Événements" }]}
        description="Participez à nos rassemblements et moments forts pour vivre la communion fraternelle et l'approfondissement spirituel."
      />

      <section className="py-20 md:py-28">
        <div className="container-church">
          <EventsList />
        </div>
      </section>

      <CTASection
        title="Vous organisez un événement ou avez une question ?"
        description="Contactez le secrétariat de l'église pour toute information complémentaire ou pour l'accueil de délégations."
        buttonText="Contacter le secrétariat"
      />
    </>
  );
}
