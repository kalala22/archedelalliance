import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { sundaySchoolClasses, sundaySchoolMission } from "@/data/sunday-school";

export function SundaySchoolPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-church">
        <SectionTitle
          subtitle="Pour les 3 à 18 ans"
          title="École du Dimanche"
          description={sundaySchoolMission}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sundaySchoolClasses.map((cls) => (
            <ScrollReveal
              key={cls.id}
              animation="fadeUp"
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Color bar at top */}
              <div className="h-1.5" style={{ backgroundColor: cls.color }} />
              <div className="p-6 md:p-8">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${cls.color}15` }}
                >
                  <BookOpen className="h-5 w-5" style={{ color: cls.color }} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: cls.color }}
                >
                  {cls.ageRange}
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold text-[var(--color-navy)]">
                  {cls.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray-500)]">
                  {cls.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                    Moniteur
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-navy)]">
                    {cls.teacher.name}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ecole-du-dimanche"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-navy-light)]"
          >
            En savoir plus <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
