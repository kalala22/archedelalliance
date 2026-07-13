"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { fadeIn, defaultViewport } from "@/lib/animations";
import { testimonials } from "@/data/testimonials";
import { getInitials } from "@/utils/format";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-gold) 0%, transparent 60%)",
      }} />

      <div className="container-church relative z-10">
        <SectionTitle subtitle="Ils témoignent" title="Témoignages" light />

        <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeIn}
          className="mx-auto mt-12 max-w-3xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <Quote className="mb-4 h-10 w-10 text-[var(--color-gold)]/30" />

            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <p className="font-heading text-lg italic leading-relaxed text-gray-200 md:text-xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)] font-heading text-sm font-bold text-[var(--color-navy-dark)]">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    {testimonial.role && <p className="text-sm text-gray-400">{testimonial.role}</p>}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[var(--color-gold)]" : "w-2 bg-white/20"}`}
                    aria-label={`Témoignage ${i + 1}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10" aria-label="Précédent">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10" aria-label="Suivant">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
