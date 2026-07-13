"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";
import { pastor } from "@/data/pastor";

export function PastorPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-church">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Pastor image placeholder */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInLeft}>
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)]">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                      <span className="font-heading text-4xl font-bold text-[var(--color-gold)]">EM</span>
                    </div>
                    <p className="text-sm text-gray-400">Pasteur Emmanuel Mukendi</p>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[var(--color-gold)]/20" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInRight}>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Pasteur Titulaire
            </span>
            <h2 className="font-heading text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
              {pastor.name}
            </h2>
            <div className="mt-2 section-divider" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-600)]">
              {pastor.bio}
            </p>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-[var(--color-gold)] bg-[var(--color-gray-50)] p-6">
              <Quote className="mb-2 h-6 w-6 text-[var(--color-gold)]" />
              <p className="font-heading text-lg italic text-[var(--color-navy)]">
                &ldquo;{pastor.quote}&rdquo;
              </p>
            </div>

            <Link
              href="/pasteur"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
            >
              Découvrir son parcours
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
