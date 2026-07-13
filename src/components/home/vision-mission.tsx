"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";
import { churchVision, churchMission } from "@/data/church";

export function VisionMission() {
  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-28">
      <div className="container-church">
        <SectionTitle subtitle="Ce qui nous anime" title="Notre Vision & Mission" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInLeft}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 transition-all duration-500 hover:border-[var(--color-gold)]/30 hover:shadow-xl hover:shadow-[var(--color-gold)]/5 md:p-10"
          >
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--color-gold)]/5 transition-all duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">Notre Vision</h3>
              <div className="mt-2 section-divider" />
              <p className="mt-5 text-base leading-relaxed text-[var(--color-gray-600)]">{churchVision}</p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInRight}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white p-8 transition-all duration-500 hover:border-[var(--color-gold)]/30 hover:shadow-xl hover:shadow-[var(--color-gold)]/5 md:p-10"
          >
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--color-navy)]/5 transition-all duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-gold)] text-[var(--color-navy-dark)]">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">Notre Mission</h3>
              <div className="mt-2 section-divider" />
              <p className="mt-5 text-base leading-relaxed text-[var(--color-gray-600)]">{churchMission}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
