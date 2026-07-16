"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
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
                  src={`https://www.youtube.com/embed/${sermon.id}?autoplay=1`}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
