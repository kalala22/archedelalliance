import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLucideIcon } from "@/lib/utils";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ministries } from "@/data/ministries";

export function MinistriesPreview() {
  const featured = ministries.slice(0, 4);

  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
      <div className="container-church">
        <SectionTitle
          subtitle="Servir ensemble"
          title="Nos Ministères"
          description="Chacun a un rôle à jouer dans le corps de Christ. Découvrez nos ministères et trouvez votre place."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((ministry) => {
            const IconComponent = getLucideIcon(ministry.icon);
            return (
              <ScrollReveal key={ministry.id} animation="fadeUp" className="h-full">
                <Link
                  href={`/ministeres/${ministry.slug}`}
                  className="group block h-full rounded-2xl border border-[var(--color-gray-200)] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-gold)]/30 hover:shadow-xl hover:shadow-[var(--color-gold)]/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-gold)] transition-colors duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-dark)]">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{ministry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-500)]">{ministry.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)] transition-colors group-hover:text-[var(--color-gold-dark)]">
                    Découvrir <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ministeres"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:bg-[var(--color-navy)] hover:text-white"
          >
            Voir tous les ministères
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
