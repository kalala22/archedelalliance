"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            {/* Decorative image placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--color-navy)]/5">
              <Image src="/images/quinousomme.jpeg" alt="About Image" fill className="object-cover" />
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
