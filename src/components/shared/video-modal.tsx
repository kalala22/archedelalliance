"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink } from "lucide-react";
import type { Sermon } from "@/types";
import { formatDate } from "@/utils/format";

interface VideoModalProps {
  sermon: Sermon | null;
  onClose: () => void;
}

export function VideoModal({ sermon, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {sermon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-navy-dark)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Video Player */}
            <div className="relative aspect-video w-full bg-black">
              {sermon.id && !sermon.id.startsWith("s") ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${sermon.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] p-8 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-navy-dark)] shadow-xl">
                    <Play className="ml-1 h-10 w-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {sermon.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-gold)]">
                    Lecteur vidéo de démonstration — {sermon.speaker}
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {sermon.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Par <span className="font-medium text-white">{sermon.speaker}</span> · prêché le {formatDate(sermon.date)}
                  </p>
                </div>
                <span className="rounded-full bg-[var(--color-gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
                  Durée : {sermon.duration}
                </span>
              </div>

              {sermon.id && !sermon.id.startsWith("s") && (
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-400">
                    Problème de lecture ou vérification anti-robot sur mobile ?
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${sermon.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-gold)] px-4 py-2 text-xs font-bold text-[var(--color-navy-dark)] transition-all hover:bg-white shadow-md sm:text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ouvrir dans l&apos;application YouTube
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
