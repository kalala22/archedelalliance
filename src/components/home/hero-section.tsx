"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { heroTextReveal, fadeIn, staggerContainer } from "@/lib/animations";

/**
 * Full-screen hero section with gradient overlay and animated text.
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-navy-dark)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 80%, rgba(200, 164, 77, 0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(15, 39, 71, 0.8) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(200, 164, 77, 0.1) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="container-church relative z-10 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Subtitle */}
          <motion.span
            variants={heroTextReveal}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] animate-pulse-gold" />
            Bienvenue chez vous
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={heroTextReveal}
            className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Centre Évangélique
            <br />
            <span className="text-gradient-gold">Arche de l&apos;Alliance</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroTextReveal}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Un lieu de foi, d&apos;espérance et d&apos;amour au cœur de Masina, Kinshasa.
            Venez vivre une expérience transformatrice avec Dieu.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroTextReveal}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/a-propos"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold text-[var(--color-navy-dark)] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-xl hover:shadow-[var(--color-gold)]/25"
            >
              Découvrir notre église
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/predications"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <Play className="h-4 w-4" />
              Voir les prédications
            </Link>
          </motion.div>

          {/* Worship times quick info */}
          <motion.div
            variants={fadeIn}
            className="mx-auto mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
          >
            {[
              { day: "Dimanche", time: "08h00", label: "Culte Principal" },
              { day: "Mercredi", time: "18h00", label: "Étude Biblique" },
              { day: "Vendredi", time: "18h00", label: "Prière" },
            ].map((item) => (
              <div
                key={item.day}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-3"
              >
                <div className="h-8 w-[2px] rounded-full bg-[var(--color-gold)]" />
                <div>
                  <span className="block text-xs font-medium text-[var(--color-gold)]">
                    {item.day} · {item.time}
                  </span>
                  <span className="block text-sm text-gray-400">{item.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
