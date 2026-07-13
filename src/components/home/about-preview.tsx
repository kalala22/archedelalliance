"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";
import { churchHistory } from "@/data/church";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-church">
        <SectionTitle
          subtitle="Notre église"
          title="Bienvenue à l'Arche de l'Alliance"
          description="Depuis 1998, nous sommes une communauté de foi engagée au service de Dieu et de notre communauté à Masina, Kinshasa."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            {/* Decorative image placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--color-navy)]/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-gold)]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-gold)]/10">
                    <span className="font-heading text-3xl font-bold text-[var(--color-gold)]">A</span>
                  </div>
                  <p className="text-sm text-[var(--color-gray-500)]">Temple Central, Masina</p>
                </div>
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[var(--color-gold)]/30" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)] md:text-3xl">
              Notre histoire
            </h3>
            <div className="mt-1 section-divider" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-600)]">
              {churchHistory.split("\n\n")[0]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-gray-600)]">
              {churchHistory.split("\n\n")[1]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
