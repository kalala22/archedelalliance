"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { heroTextReveal } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  description?: string;
  bgImage?: string;
}

/**
 * Hero banner for sub-pages with breadcrumb navigation and parallax background.
 */
export function PageHero({
  title,
  breadcrumbs,
  description,
  bgImage,
}: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[40vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[var(--color-navy)]"
      style={{
        backgroundImage: bgImage
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`
          : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/backgrounds/page-bg-union-musicale.jpeg)",
      }}
    >
      {/* Abstract pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 70%, var(--color-gold) 0%, transparent 60%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />

      <div className="container-church relative z-10 py-20 md:py-28">
        {/* Breadcrumbs */}
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[var(--color-gold)]"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[var(--color-gold)]">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroTextReveal}
          className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={heroTextReveal}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-gray-300"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
