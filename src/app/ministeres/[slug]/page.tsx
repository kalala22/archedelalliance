import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ministries } from "@/data/ministries";
import { ArrowLeft, Clock, User, CheckCircle2 } from "lucide-react";
import { getLucideIcon } from "@/lib/utils";

interface MinistryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ministries.map((ministry) => ({
    slug: ministry.slug,
  }));
}

export async function generateMetadata({
  params,
}: MinistryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);

  if (!ministry) {
    return { title: "Ministère introuvable" };
  }

  return {
    title: ministry.name,
    description: ministry.description,
  };
}

export default async function MinistryDetailPage({
  params,
}: MinistryDetailPageProps) {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);

  if (!ministry) {
    notFound();
  }

  const IconComponent = getLucideIcon(ministry.icon);

  return (
    <>
      <PageHero
        title={ministry.name}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ministères", href: "/ministeres" },
          { label: ministry.name },
        ]}
        description={ministry.description}
      />

      <section className="py-20 md:py-28">
        <div className="container-church">
          <div className="mb-8">
            <Link
              href="/ministeres"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-gold)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux ministères
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="fadeUp">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                  <IconComponent className="h-8 w-8" />
                </div>

                <h2 className="font-heading text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
                  À propos du ministère
                </h2>
                <div className="mt-2 section-divider" />

                <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-gray-600)]">
                  {ministry.fullDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </ScrollReveal>

              {/* Activities */}
              <ScrollReveal animation="fadeUp" className="mt-12">
                <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">
                  Nos activités principales
                </h3>
                <div className="mt-2 section-divider" />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {ministry.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-gray-50)] p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-gold)]" />
                      <span className="text-sm font-medium text-[var(--color-navy)]">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar info card */}
            <div>
              <ScrollReveal animation="fadeLeft">
                <div className="sticky top-28 rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 shadow-lg shadow-[var(--color-navy)]/5">
                  <h3 className="font-heading text-xl font-bold text-[var(--color-navy)]">
                    Informations Pratiques
                  </h3>
                  <div className="mt-2 section-divider" />

                  <div className="mt-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)]">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                          Responsable
                        </span>
                        <span className="mt-1 block font-heading text-base font-bold text-[var(--color-navy)]">
                          {ministry.leader}
                        </span>
                      </div>
                    </div>

                    {ministry.meetingTime && (
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-navy)]/10 text-[var(--color-navy)]">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                            Horaires de réunion
                          </span>
                          <span className="mt-1 block text-sm font-medium text-[var(--color-navy)]">
                            {ministry.meetingTime}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 border-t border-[var(--color-gray-100)] pt-6">
                    <Link
                      href="/contact"
                      className="block w-full rounded-full bg-[var(--color-gold)] py-3.5 text-center text-sm font-bold text-[var(--color-navy-dark)] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-lg"
                    >
                      Rejoindre ce ministère
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vous avez une question sur ce ministère ?"
        description="Notre équipe pastorale est à votre écoute pour vous orienter et vous accompagner."
        buttonText="Nous contacter"
      />
    </>
  );
}
