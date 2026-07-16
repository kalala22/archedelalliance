import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { churchInfo } from "@/data/church";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Nous Contacter",
  description:
    "Prenez contact avec le Centre Évangélique Arche de l'Alliance à Masina, Kinshasa. Adresse, horaires des cultes, téléphone et formulaire de contact.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
        description="Nous serions ravis d'échanger avec vous, de prier pour vous ou de vous accueillir lors de notre prochain culte."
      />

      <section className="py-20 md:py-28">
        <div className="container-church">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Details Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[var(--color-gray-200)] bg-[var(--color-navy)] p-8 text-white md:p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                  Coordonnées
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold">
                  Restons en Lien
                </h2>
                <div className="mt-2 h-1 w-12 bg-[var(--color-gold)]" />

                <div className="mt-8 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-gold)]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Adresse
                      </span>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-gray-200">
                        {churchInfo.address}
                        <br />
                        {churchInfo.city}, {churchInfo.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-gold)]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Téléphone
                      </span>
                      <a
                        href={`tel:${churchInfo.phone}`}
                        className="mt-1 block text-sm font-medium text-gray-200 hover:text-[var(--color-gold)]"
                      >
                        {churchInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-gold)]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Email
                      </span>
                      <a
                        href={`mailto:${churchInfo.email}`}
                        className="mt-1 block text-sm font-medium text-gray-200 hover:text-[var(--color-gold)]"
                      >
                        {churchInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Worship times */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="mb-4 flex items-center gap-2 text-[var(--color-gold)]">
                      <Clock className="h-4 w-4" />
                      <span className="font-heading text-sm font-bold uppercase tracking-wider">
                        Horaires des Cultes
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {churchInfo.worshipSchedule.map((schedule) => (
                        <li
                          key={schedule.day}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="font-semibold text-white">
                            {schedule.day}
                          </span>
                          <span className="text-gray-300">
                            {schedule.time} — {schedule.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[var(--color-gray-200)] bg-white p-8 md:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold-dark)]">
                  Message
                </span>
                <h2 className="mt-1 font-heading text-3xl font-bold text-[var(--color-navy)]">
                  Envoyez-nous un message
                </h2>
                <div className="mt-2 section-divider" />
                <p className="mt-4 mb-8 text-sm leading-relaxed text-[var(--color-gray-500)]">
                  Remplissez ce formulaire pour toute question, demande de prière
                  ou pour planifier une visite pastorale.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map visual placeholder section */}
      <section className="border-t border-[var(--color-gray-200)] bg-[var(--color-gray-50)] py-16">
        <div className="container-church">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-gray-200)] bg-[var(--color-navy)]/90 p-8 text-center text-white md:p-16">
            <div className="mx-auto max-w-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-navy-dark)]">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold">
                Comment nous rejoindre à Masina ?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Notre temple est situé sur l&apos;Avenue de la Libération à Masina,
                facilement accessible en transport en commun. Nos équipes
                d&apos;accueil sont disponibles à l&apos;entrée pour vous guider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
