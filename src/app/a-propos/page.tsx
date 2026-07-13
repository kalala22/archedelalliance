import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { churchHistory, churchVision, churchMission } from "@/data/church";
import { timeline } from "@/data/timeline";
import { values } from "@/data/values";
import { getLucideIcon } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire, la vision et la mission du Centre Évangélique Arche de l'Alliance à Masina, Kinshasa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="À Propos de Nous"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À Propos" }]}
        description="Découvrez notre histoire, notre vision et ce qui fait notre identité."
      />

      {/* History Section */}
      <section className="py-20 md:py-28">
        <div className="container-church">
          <SectionTitle subtitle="Depuis 1998" title="Notre Histoire" />
          <ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-[var(--color-gray-600)]">
              {churchHistory.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
        <div className="container-church">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal animation="fadeLeft">
              <div className="rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">Notre Vision</h3>
                <div className="mt-2 section-divider" />
                <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-600)]">{churchVision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeRight">
              <div className="rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">Notre Mission</h3>
                <div className="mt-2 section-divider" />
                <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-600)]">{churchMission}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-church">
          <SectionTitle subtitle="Nos fondements" title="Nos Valeurs" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const IconComponent = getLucideIcon(value.icon);
              return (
                <ScrollReveal key={value.id} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[var(--color-gray-200)] bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-[var(--color-gold)]/30">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-500)]">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28">
        <div className="container-church">
          <SectionTitle subtitle="Notre parcours" title="Chronologie" light />
          <div className="mx-auto mt-12 max-w-3xl">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] font-heading text-xs font-bold text-[var(--color-navy-dark)]">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && <div className="mt-2 w-px flex-1 bg-white/10" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-semibold text-[var(--color-gold)]">{item.year}</span>
                    <h4 className="mt-1 font-heading text-lg font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
