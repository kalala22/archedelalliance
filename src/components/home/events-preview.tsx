"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations";
import { events } from "@/data/events";
import { formatDate } from "@/utils/format";

export function EventsPreview() {
  const upcoming = events.filter((e) => e.isUpcoming).slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <div className="container-church">
        <SectionTitle subtitle="À venir" title="Prochains Événements" description="Ne manquez aucun de nos événements. Rejoignez-nous pour des moments de communion et de célébration." />

        <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}
          className="mt-12 grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <motion.div key={event.id} variants={fadeInUp}
              className="group overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              {/* Date header */}
              <div className="bg-[var(--color-navy)] p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">{formatDate(event.date)}</p>
                <p className="mt-1 text-lg font-bold text-white">{event.time}{event.endTime ? ` - ${event.endTime}` : ""}</p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{event.title}</h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-[var(--color-gray-400)]">
                  <MapPin className="h-3 w-3" /> {event.location}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray-500)]">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/evenements" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:bg-[var(--color-navy)] hover:text-white">
            Tous les événements <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
