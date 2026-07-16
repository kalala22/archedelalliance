"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import type { Sermon } from "@/types";
import { formatDate } from "@/utils/format";
import { Play, Clock, Search, X, User } from "lucide-react";

interface SermonsGridProps {
  initialSermons?: Sermon[];
  initialVideoId?: string;
}

export function SermonsGrid({ initialSermons = [], initialVideoId }: SermonsGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState("all");
  const [activeSermon, setActiveSermon] = useState<Sermon | null>(null);

  // Gérer l'ouverture automatique du modal et le défilement si un videoId est présent
  useEffect(() => {
    const videoId = searchParams.get("videoId") || initialVideoId;
    if (videoId && initialSermons.length > 0) {
      const found = initialSermons.find((s) => s.id === videoId);
      if (found) {
        setActiveSermon(found);
        setTimeout(() => {
          const el = document.getElementById(`sermon-${found.id}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    }
  }, [searchParams, initialVideoId, initialSermons]);

  const handleOpenModal = (sermon: Sermon) => {
    setActiveSermon(sermon);
    router.push(`/predications?videoId=${sermon.id}`, { scroll: false });
  };

  const handleCloseModal = () => {
    setActiveSermon(null);
    if (searchParams.has("videoId")) {
      router.replace("/predications", { scroll: false });
    }
  };

  // Extract unique speakers
  const speakers = useMemo(() => {
    const set = new Set(initialSermons.map((s) => s.speaker));
    return ["all", ...Array.from(set)];
  }, [initialSermons]);

  const filteredSermons = useMemo(() => {
    return initialSermons.filter((sermon) => {
      const matchesSearch =
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (sermon.series &&
          sermon.series.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesSpeaker =
        selectedSpeaker === "all" || sermon.speaker === selectedSpeaker;
      return matchesSearch && matchesSpeaker;
    });
  }, [searchQuery, selectedSpeaker, initialSermons]);

  return (
    <>
      {/* Search and Filters Bar */}
      <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-gray-50)] p-6 md:flex-row">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-gray-400)]" />
          <input
            type="text"
            placeholder="Rechercher un message ou une série..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--color-gray-200)] bg-white py-2.5 pl-10 pr-4 text-sm transition-colors focus:border-[var(--color-gold)] focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Speaker Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {speakers.map((speaker) => (
            <button
              key={speaker}
              onClick={() => setSelectedSpeaker(speaker)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${selectedSpeaker === speaker
                ? "bg-[var(--color-navy)] text-white shadow-sm"
                : "border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-navy)]"
                }`}
            >
              {speaker === "all" ? "Tous les orateurs" : speaker}
            </button>
          ))}
        </div>
      </div>

      {/* Sermons Grid */}
      {filteredSermons.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-heading text-xl font-bold text-[var(--color-navy)]">
            {initialSermons.length === 0
              ? "Aucun message disponible pour le moment."
              : "Aucun message ne correspond à votre recherche."}
          </p>
          {initialSermons.length > 0 && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSpeaker("all");
              }}
              className="mt-4 text-sm font-semibold text-[var(--color-gold)] hover:underline"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>
      ) : (
        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredSermons.map((sermon) => (
              <motion.div
                key={sermon.id}
                id={`sermon-${sermon.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${activeSermon?.id === sermon.id
                  ? "border-[var(--color-gold)] shadow-xl ring-2 ring-[var(--color-gold)]/40 bg-[var(--color-gold)]/5"
                  : "border-[var(--color-gray-200)] bg-white hover:border-[var(--color-gold)]/30"
                  }`}
              >
                {/* Visual Thumbnail */}
                <div
                  className="relative aspect-video cursor-pointer overflow-hidden bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)]"
                  onClick={() => handleOpenModal(sermon)}
                >
                  {sermon.thumbnail && (
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-dark)]">
                      <Play className="ml-0.5 h-6 w-6" />
                    </div>
                  </div>
                  {sermon.series && (
                    <span className="absolute left-3 top-3 z-10 rounded-md bg-[var(--color-gold)] px-2.5 py-1 text-xs font-bold text-[var(--color-navy-dark)] shadow-md">
                      Série : {sermon.series}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 rounded-md bg-black/70 px-2.5 py-1 text-xs font-medium text-white shadow-md">
                    <Clock className="h-3.5 w-3.5" />
                    {sermon.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                      {formatDate(sermon.date)}
                    </span>
                    <h3
                      className="mt-2 cursor-pointer font-heading text-xl font-bold text-[var(--color-navy)] transition-colors hover:text-[var(--color-gold)]"
                      onClick={() => handleOpenModal(sermon)}
                    >
                      {sermon.title}
                    </h3>
                    {sermon.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-[var(--color-gray-500)]">
                        {sermon.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--color-gray-100)] pt-4 text-xs text-[var(--color-gray-600)]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <User className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                      {sermon.speaker}
                    </div>
                    <button
                      onClick={() => handleOpenModal(sermon)}
                      className="font-bold text-[var(--color-navy)] hover:text-[var(--color-gold)]"
                    >
                      Regarder
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* External YouTube Link CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--color-gold)]/30 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-navy-light)] p-8 text-center text-white shadow-xl md:p-12">
        <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
          Vous souhaitez visionner d&apos;autres messages ?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
          Afin d&apos;optimiser le temps de chargement et de limiter le nombre de requêtes, nous n&apos;affichons ici que les prédications récentes (à partir de juin). Pour accéder à l&apos;intégralité de nos archives, enseignements et cultes dominicaux, visitez notre chaîne YouTube officielle.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://youtube.com/@archedelalliance-tv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-gold)] px-8 py-3.5 text-sm font-bold text-[var(--color-navy-dark)] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            <Play className="h-4 w-4 fill-current" />
            Voir toutes nos vidéos sur YouTube
          </a>
        </div>
      </div>

      {/* Sermon Video Modal */}
      <AnimatePresence>
        {activeSermon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={handleCloseModal}
          >
            <button
              onClick={handleCloseModal}
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
                {activeSermon.id && !activeSermon.id.startsWith("s") ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeSermon.id}?autoplay=1`}
                    title={activeSermon.title}
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
                      {activeSermon.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-gold)]">
                      Lecteur vidéo de démonstration — {activeSermon.speaker}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {activeSermon.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Par <span className="text-white font-medium">{activeSermon.speaker}</span> · prêché le {formatDate(activeSermon.date)}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--color-gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
                    Durée : {activeSermon.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
