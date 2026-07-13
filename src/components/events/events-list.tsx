"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";
import { formatDateWithDay } from "@/utils/format";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";

const categoryLabels: Record<string, string> = {
  all: "Tous les événements",
  conference: "Conférences & Conventions",
  retraite: "Retraites Spirituelles",
  culte: "Cultes Spéciaux",
  activite: "Activités & Camps",
  special: "Événements Spéciaux",
};

export function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterType, setFilterType] = useState<"upcoming" | "all">("upcoming");

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesTime = filterType === "all" || event.isUpcoming;
    return matchesCategory && matchesTime;
  });

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-[var(--color-gray-200)] pb-6 lg:flex-row">
        {/* Time Toggle */}
        <div className="flex rounded-full bg-[var(--color-gray-100)] p-1">
          <button
            onClick={() => setFilterType("upcoming")}
            className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              filterType === "upcoming"
                ? "bg-[var(--color-navy)] text-white shadow"
                : "text-[var(--color-gray-600)] hover:text-[var(--color-navy)]"
            }`}
          >
            À venir
          </button>
          <button
            onClick={() => setFilterType("all")}
            className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              filterType === "all"
                ? "bg-[var(--color-navy)] text-white shadow"
                : "text-[var(--color-gray-600)] hover:text-[var(--color-navy)]"
            }`}
          >
            Tous les événements
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? "bg-[var(--color-gold)] text-[var(--color-navy-dark)] shadow-sm"
                  : "border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-navy)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid / List */}
      {filteredEvents.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-heading text-xl font-bold text-[var(--color-navy)]">
            Aucun événement trouvé dans cette catégorie.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setFilterType("all");
            }}
            className="mt-4 text-sm font-semibold text-[var(--color-gold)] hover:underline"
          >
            Afficher tous les événements
          </button>
        </div>
      ) : (
        <motion.div layout className="space-y-6">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-white transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:shadow-xl md:flex-row"
              >
                {/* Date Badge Banner */}
                <div className="flex flex-col items-center justify-center bg-[var(--color-navy)] px-8 py-6 text-center text-white md:w-56">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                    Date
                  </span>
                  <span className="mt-1 font-heading text-xl font-bold">
                    {formatDateWithDay(event.date)}
                  </span>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    <Clock className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                    {event.time}
                    {event.endTime && ` - ${event.endTime}`}
                  </div>
                </div>

                {/* Event details */}
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-gold)]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-gold-dark)]">
                        <Tag className="h-3 w-3" />
                        {categoryLabels[event.category]}
                      </span>
                      {event.isUpcoming ? (
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                          À venir
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          Événement passé
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--color-navy)]">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-[var(--color-gray-600)]">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-gray-100)] pt-4 text-sm text-[var(--color-gray-600)]">
                    <div className="flex items-center gap-2 font-medium text-[var(--color-navy)]">
                      <MapPin className="h-4 w-4 text-[var(--color-gold)]" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
