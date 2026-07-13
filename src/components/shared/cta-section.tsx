"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, defaultViewport } from "@/lib/animations";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

/**
 * Call-to-action section with gradient background and animated entrance.
 */
export function CTASection({
  title = "Rejoignez notre famille",
  description = "Venez découvrir une communauté chaleureuse où la foi, l'amour et l'espérance se vivent au quotidien. Vous êtes les bienvenus chez vous.",
  buttonText = "Nous visiter",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-gold) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--color-gold) 0%, transparent 50%)",
        }}
      />

      <div className="container-church relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
            <span className="h-2 w-2 rotate-45 bg-[var(--color-gold)]" />
            <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold text-[var(--color-navy-dark)] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
