import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { pastor } from "@/data/pastor";
import { Quote } from "lucide-react";
import Image from "next/image";
import { SermonCard } from "@/components/shared/sermon-card";
import { fetchYouTubeSermons } from "@/services/youtube";
import { API_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: "Pasteur Titulaire",
  description: `Découvrez le parcours et la vision du ${pastor.name}, fondateur du Centre Évangélique Arche de l'Alliance.`,
};

export default async function PastorPage() {
  const allSermons = await fetchYouTubeSermons(API_CONFIG.youtube.maxResultsPreview);
  const pastorSermons = allSermons.slice(0, 3);

  return (
    <>
      <PageHero title={pastor.name} breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Pasteur Titulaire" }]} description={pastor.title} />

      {/* Bio Section */}
      <section className="py-20 md:py-28">
        <div className="container-church">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <ScrollReveal animation="fadeLeft" className="lg:col-span-2">
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--color-navy)] shadow-2xl shadow-[var(--color-navy)]/20">
                    <Image
                      src="/images/pastorisrael.jpg"
                      alt="Pasteur Israel N'sembe-Loyela"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle bottom shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-dark)]/50 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[var(--color-gold)]/20" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight" className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Biographie</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--color-navy)]">{pastor.name}</h2>
              <div className="mt-2 section-divider" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-gray-600)]">
                {pastor.fullBio.split("\n\n").map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[var(--color-gray-50)] py-16">
        <div className="container-church">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border-l-4 border-[var(--color-gold)] bg-white p-8 shadow-sm md:p-12">
              <Quote className="mb-4 h-8 w-8 text-[var(--color-gold)]" />
              <p className="font-heading text-xl italic leading-relaxed text-[var(--color-navy)] md:text-2xl">&ldquo;{pastor.quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-[var(--color-gold)]">— {pastor.name}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Pastorale */}
      <section className="py-20 md:py-28">
        <div className="container-church">
          <SectionTitle subtitle="Sa vision" title="Vision Pastorale" />
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[var(--color-gray-600)] md:text-lg">{pastor.vision}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28">
        <div className="container-church">
          <SectionTitle subtitle="Son parcours" title="Parcours" light />
          <div className="mx-auto mt-12 max-w-3xl">
            {pastor.journey.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] font-heading text-xs font-bold text-[var(--color-navy-dark)]">
                      {item.year.slice(2)}
                    </div>
                    {i < pastor.journey.length - 1 && <div className="mt-2 w-px flex-1 bg-white/10" />}
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

      {/* Recent Messages */}
      <section className="py-20 md:py-28">
        <div className="container-church">
          <SectionTitle subtitle="Ses messages" title="Messages Récents" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pastorSermons.map((sermon) => (
              <ScrollReveal key={sermon.id} className="h-full">
                <SermonCard sermon={sermon} variant="preview" className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
