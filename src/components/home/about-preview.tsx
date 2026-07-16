import { SectionTitle } from "@/components/shared/section-title";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { churchHistory } from "@/data/church";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-church">
        <SectionTitle
          subtitle="Notre église"
          title="Bienvenue à l'Arche de l'Alliance"
          description="Depuis 1990, nous sommes une communauté de foi engagée au service de Dieu et de notre communauté à Masina, Kinshasa."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal animation="fadeLeft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--color-navy)]/5">
              <Image
                src="/images/quinousomme.jpeg"
                alt="À propos de l'Arche de l'Alliance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeRight">
            <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)] md:text-3xl">
              Notre histoire
            </h3>
            <div className="mt-1 section-divider" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-gray-600)]">
              {churchHistory.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
