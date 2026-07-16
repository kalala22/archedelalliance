"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, Calendar, Sparkles, Users, BookOpen } from "lucide-react";
import { heroTextReveal, fadeIn, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { sundayServices, weeklyPrograms } from "@/data/church";
import { getLucideIcon } from "@/lib/utils";
/**
 * Full-screen hero section with gradient overlay and animated text.
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-navy-dark)]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Image avec zoom cinématique (Ken Burns effect) */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.25 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.jpeg"
            alt="Arche de l'Alliance"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-dark)]/90 via-[var(--color-navy-dark)]/75 to-[var(--color-navy-dark)]/85" />
        {/* Animated radial accents */}
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

          {/* Worship times quick info — Structured Glassmorphic Grid */}
          <motion.div
            variants={fadeIn}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-2"
          >
            {/* Carte 1 : Dimanche (3 Cultes) */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-[var(--color-navy-dark)]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-navy-dark)]/90 hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">Dimanche</h3>
                    <p className="text-[11px] text-[var(--color-gold)]">3 Cultes de Célébration</p>
                  </div>
                </div>

              </div>

              <div className="space-y-2">
                {sundayServices.map((culte, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3.5 py-2 transition-colors group-hover:bg-white/[0.07]"
                  >
                    <span className="text-xs font-semibold text-gray-200">{culte.label}</span>
                    <span className="flex items-center gap-1.5 rounded-lg bg-[var(--color-gold)]/15 px-2.5 py-1 text-xs font-bold text-[var(--color-gold)]">
                      <Clock className="h-3 w-3" />
                      {culte.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte 2 : Programmes de la Semaine */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[var(--color-navy-dark)]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-[var(--color-navy-dark)]/90">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[var(--color-gold)]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">En Semaine</h3>
                    <p className="text-[11px] text-gray-400">Tous à 17h00 – 19h30</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  17h00 - 19h30
                </span>
              </div>

              <div className="space-y-2">
                {weeklyPrograms.map((prog, i) => {
                  const Icon = getLucideIcon(prog.icon);
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3.5 py-2 transition-colors group-hover:bg-white/[0.07]"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                        <span className="text-xs font-bold text-white">{prog.day}</span>
                      </div>
                      <span className="text-xs font-medium text-gray-300">{prog.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
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
