"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, galleryCategories } from "@/data/gallery";
import type { GalleryImage } from "@/types";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Category filter pills */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              selectedCategory === cat.id
                ? "bg-[var(--color-navy)] text-white shadow-md shadow-[var(--color-navy)]/20"
                : "border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid layout */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-gradient-to-br from-[var(--color-navy)]/80 to-[var(--color-navy-dark)]"
              onClick={() => setActiveImage(image)}
            >
              {/* Decorative visual placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                  <ImageIcon className="h-6 w-6" />
                </div>
                <span className="font-heading text-lg font-bold text-white">
                  {image.alt}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-[var(--color-gold)]">
                  {image.category}
                </span>
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-navy-dark)] shadow-lg">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-navy-dark)] p-8 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto mb-6 flex h-40 w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)] p-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)]">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                  <p className="font-heading text-xl font-bold text-white">
                    {activeImage.alt}
                  </p>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white">
                {activeImage.alt}
              </h3>
              <p className="mt-2 inline-block rounded-full bg-[var(--color-gold)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                Catégorie : {activeImage.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
