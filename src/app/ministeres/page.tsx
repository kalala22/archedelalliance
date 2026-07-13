import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { ministries } from "@/data/ministries";
import { ArrowRight, Clock, User } from "lucide-react";
import { getLucideIcon } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nos Ministères",
  description:
    "Découvrez les différents ministères du Centre Évangélique Arche de l'Alliance. Engagez-vous et servez dans la communauté selon vos dons et votre appel.",
};

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        title="Nos Ministères"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Ministères" }]}
        description="Chaque membre a un don unique et une place dans le corps de Christ. Trouvez votre sphère d'impact et servez avec passion."
      />

      <section className="py-20 md:py-28">
        <div className="container-church">
          <SectionTitle
            subtitle="Servir ensemble"
            title="Découvrez Nos Départements"
            description="Que vous ayez un appel pour la louange, l'intercession, la jeunesse, l'action sociale ou l'évangélisation, il y a une place pour vous à l'Arche de l'Alliance."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry, index) => {
              const IconComponent = getLucideIcon(ministry.icon);

              return (
                <ScrollReveal key={ministry.id} delay={index * 0.08}>
                  <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-gold)]/40 hover:shadow-xl hover:shadow-[var(--color-gold)]/5">
                    <div>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-[var(--color-gold)] transition-colors duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-dark)]">
                        <IconComponent className="h-6 w-6" />
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">
                        {ministry.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray-500)]">
                        {ministry.description}
                      </p>

                      <div className="mt-6 space-y-2 border-t border-[var(--color-gray-100)] pt-4 text-xs text-[var(--color-gray-600)]">
                        <div className="flex items-center gap-2">
                          <User className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                          <span className="font-medium">Responsable :</span>{" "}
                          {ministry.leader}
                        </div>
                        {ministry.meetingTime && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                            <span className="font-medium">Réunion :</span>{" "}
                            {ministry.meetingTime}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <Link
                        href={`/ministeres/${ministry.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)]/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-navy)] transition-all duration-300 group-hover:bg-[var(--color-navy)] group-hover:text-white"
                      >
                        Découvrir le ministère
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à vous engager dans un ministère ?"
        description="Prenez contact avec notre secrétariat ou parlez à l'un des responsables après le culte pour commencer votre parcours de service."
        buttonText="Rejoindre un ministère"
      />
    </>
  );
}
