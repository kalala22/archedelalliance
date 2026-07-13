"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Clock, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations";
import { sermons } from "@/data/sermons";
import { formatDate } from "@/utils/format";

export function SermonsPreview() {
  const latest = sermons.slice(0, 4);

  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
      <div className="container-church">
        <SectionTitle subtitle="La Parole de Dieu" title="Dernières Prédications" description="Revivez nos messages les plus récents et laissez-vous inspirer par la Parole de Dieu." />

        <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((sermon) => (
            <motion.div key={sermon.id} variants={fadeInUp}
              className="group overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-dark)] group-hover:scale-110">
                    <Play className="h-5 w-5 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                  <Clock className="h-3 w-3" /> {sermon.duration}
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--color-gray-400)]">{formatDate(sermon.date)}</p>
                <h3 className="mt-1 font-heading text-sm font-bold leading-snug text-[var(--color-navy)]">{sermon.title}</h3>
                <p className="mt-1 text-xs text-[var(--color-gray-500)]">{sermon.speaker}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/predications" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:bg-[var(--color-navy)] hover:text-white">
            Toutes les prédications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
