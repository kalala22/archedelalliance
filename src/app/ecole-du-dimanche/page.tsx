import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import {
  sundaySchoolClasses,
  sundaySchoolMission,
  sundaySchoolPedagogy,
} from "@/data/sunday-school";
import { BookOpen, CheckCircle2, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "École du Dimanche",
  description:
    "Découvrez l'École du Dimanche du Centre Évangélique Arche de l'Alliance pour les enfants et adolescents de 3 à 18 ans.",
};

export default function SundaySchoolPage() {
  return (
    <>
      <PageHero
        title="École du Dimanche"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "École du Dimanche" },
        ]}
        description="Une aventure passionnante dans la Parole de Dieu pour chaque tranche d'âge de 3 à 18 ans."
      />

      {/* Mission & Pédagogie */}
      <section className="py-20 md:py-28">
        <div className="container-church">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal animation="fadeLeft">
              <div className="rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 md:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">
                  Notre Mission Pédagogique
                </h3>
                <div className="mt-2 section-divider" />
                <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-600)]">
                  {sundaySchoolMission}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight">
              <div className="rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 md:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)] text-[var(--color-navy-dark)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">
                  Notre Approche
                </h3>
                <div className="mt-2 section-divider" />
                <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-600)]">
                  {sundaySchoolPedagogy}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Les Classes */}
      <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
        <div className="container-church">
          <SectionTitle
            subtitle="Nos classes"
            title="Trois Tranches d'Âge Adaptées"
            description="Chaque classe bénéficie d'un programme pédagogique, d'activités ludo-éducatives et de moniteurs formés et dévoués."
          />

          <div className="mt-12 space-y-12">
            {sundaySchoolClasses.map((cls, idx) => (
              <ScrollReveal key={cls.id} delay={idx * 0.1}>
                <div className="overflow-hidden rounded-3xl border border-[var(--color-gray-200)] bg-white shadow-md">
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: cls.color }}
                  />

                  <div className="p-8 md:p-12">
                    <div className="grid gap-10 lg:grid-cols-12">
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-3">
                          <span
                            className="rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: `${cls.color}20`,
                              color: cls.color,
                            }}
                          >
                            {cls.ageRange}
                          </span>
                        </div>

                        <h3 className="mt-4 font-heading text-3xl font-bold text-[var(--color-navy)]">
                          {cls.name}
                        </h3>

                        <p className="mt-4 text-base leading-relaxed text-[var(--color-gray-600)]">
                          {cls.description}
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                          <div>
                            <h4 className="font-heading text-base font-bold text-[var(--color-navy)]">
                              Enseignements clés :
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {cls.teachings.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-[var(--color-gray-600)]"
                                >
                                  <CheckCircle2
                                    className="h-4 w-4 shrink-0"
                                    style={{ color: cls.color }}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-heading text-base font-bold text-[var(--color-navy)]">
                              Activités au programme :
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {cls.activities.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-[var(--color-gray-600)]"
                                >
                                  <BookOpen
                                    className="h-4 w-4 shrink-0"
                                    style={{ color: cls.color }}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Teacher Card */}
                      <div className="rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-gray-50)] p-6 lg:col-span-5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                          Responsable pédagogique
                        </span>

                        <div className="mt-4 flex items-center gap-4">
                          <div
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-heading text-lg font-bold text-white"
                            style={{ backgroundColor: cls.color }}
                          >
                            {cls.teacher.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <div>
                            <h4 className="font-heading text-lg font-bold text-[var(--color-navy)]">
                              {cls.teacher.name}
                            </h4>
                            <p className="text-xs text-[var(--color-gray-500)]">
                              {cls.teacher.role}
                            </p>
                          </div>
                        </div>

                        {cls.teacher.bio && (
                          <p className="mt-4 text-sm leading-relaxed text-[var(--color-gray-600)]">
                            {cls.teacher.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Inscrivez vos enfants dès ce dimanche !"
        description="L'accueil des enfants se fait 15 minutes avant le début de chaque culte du dimanche matin dans les salles dédiées."
        buttonText="Planifier une visite"
      />
    </>
  );
}
