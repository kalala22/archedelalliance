"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import type { Sermon } from "@/types";
import { Play, Search, X } from "lucide-react";
import { SermonCard } from "@/components/shared/sermon-card";
import { VideoModal } from "@/components/shared/video-modal";
import { APP_CONFIG } from "@/config/constants";

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
              type="button"
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
              type="button"
              onClick={() => setSelectedSpeaker(speaker)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                selectedSpeaker === speaker
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
              type="button"
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
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredSermons.map((sermon) => (
              <motion.div
                key={sermon.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <SermonCard
                  sermon={sermon}
                  variant="grid"
                  onClick={handleOpenModal}
                  isActive={activeSermon?.id === sermon.id}
                  className="h-full"
                />
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
            href={APP_CONFIG.youtubeChannelUrl}
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
      <VideoModal sermon={activeSermon} onClose={handleCloseModal} />
    </>
  );
}
