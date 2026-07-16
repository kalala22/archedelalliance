"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { SermonCard } from "@/components/shared/sermon-card";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations";
import type { Sermon } from "@/types";

interface SermonsPreviewProps {
  sermons?: Sermon[];
}

export function SermonsPreview({ sermons = [] }: SermonsPreviewProps) {
  const latest = sermons.slice(0, 4);

  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
      <div className="container-church">
        <SectionTitle
          subtitle="La Parole de Dieu"
          title="Dernières Prédications"
          description="Revivez nos messages les plus récents et laissez-vous inspirer par la Parole de Dieu."
        />

        {latest.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-[var(--color-gray-200)] bg-white p-12 text-center">
            <p className="font-heading text-lg font-semibold text-[var(--color-navy)]">
              Aucune prédication récente disponible pour le moment.
            </p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {latest.map((sermon) => (
              <motion.div key={sermon.id} variants={fadeInUp} className="h-full">
                <SermonCard sermon={sermon} variant="preview" className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/predications"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:bg-[var(--color-navy)] hover:text-white"
          >
            Toutes les prédications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
