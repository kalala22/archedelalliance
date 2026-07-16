import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { pastor } from "@/data/pastor";
import { formatDate } from "@/utils/format";
import { Quote, Play, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchYouTubeSermons } from "@/services/youtube";

export const metadata: Metadata = {
  title: "Pasteur Titulaire",
  description: `Découvrez le parcours et la vision du ${pastor.name}, fondateur du Centre Évangélique Arche de l'Alliance.`,
};

export default async function PastorPage() {
  const allSermons = await fetchYouTubeSermons(6);
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
              <ScrollReveal key={sermon.id}>
                <div className="group overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-gold)]/30">
                  <Link href={`/predications?videoId=${sermon.id}`} className="block">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)]">
                      {sermon.thumbnail && (
                        <img
                          src={sermon.thumbnail}
                          alt={sermon.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-dark)]">
                          <Play className="ml-0.5 h-5 w-5" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white shadow-md">
                        <Clock className="h-3 w-3" /> {sermon.duration}
                      </div>
                    </div>
                  </Link>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase text-[var(--color-gray-400)]">{formatDate(sermon.date)}</p>
                    <Link href={`/predications?videoId=${sermon.id}`}>
                      <h3 className="mt-1 font-heading text-base font-bold text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-gold)]">{sermon.title}</h3>
                    </Link>
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
