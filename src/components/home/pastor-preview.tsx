"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";
import { pastor } from "@/data/pastor";
import Image from "next/image";

export function PastorPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-church">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Pastor image */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInLeft}>
            <div className="group relative mx-auto max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--color-navy)] shadow-2xl shadow-[var(--color-navy)]/20">
                <Image
                  src="/images/pastorisrael.jpg"
                  alt="Pasteur Israel N'sembe-Loyela"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle bottom shadow overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-dark)]/50 via-transparent to-transparent" />
              </div>
              {/* Decorative gold frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[var(--color-gold)]/35 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

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
