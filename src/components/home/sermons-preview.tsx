"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Clock, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations";
import type { Sermon } from "@/types";
import { formatDate } from "@/utils/format";

interface SermonsPreviewProps {
  sermons?: Sermon[];
}

export function SermonsPreview({ sermons = [] }: SermonsPreviewProps) {
  const latest = sermons.slice(0, 4);

  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
      <div className="container-church">
        <SectionTitle subtitle="La Parole de Dieu" title="Dernières Prédications" description="Revivez nos messages les plus récents et laissez-vous inspirer par la Parole de Dieu." />

        {latest.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-[var(--color-gray-200)] bg-white p-12 text-center">
            <p className="font-heading text-lg font-semibold text-[var(--color-navy)]">
              Aucune prédication récente disponible pour le moment.
            </p>
          </div>
        ) : (
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latest.map((sermon) => (
              <motion.div key={sermon.id} variants={fadeInUp}
                className="group overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-gold)]/30">
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
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase text-[var(--color-gray-400)]">{formatDate(sermon.date)}</p>
                  <Link href={`/predications?videoId=${sermon.id}`}>
                    <h3 className="mt-1 font-heading text-sm font-bold leading-snug text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-gold)]">{sermon.title}</h3>
                  </Link>
                  <p className="mt-1 text-xs text-[var(--color-gray-500)]">{sermon.speaker}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-10 text-center">
          <Link href="/predications" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:bg-[var(--color-navy)] hover:text-white">
            Toutes les prédications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
