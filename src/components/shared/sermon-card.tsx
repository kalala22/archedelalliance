"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Clock, User } from "lucide-react";
import type { Sermon } from "@/types";
import { formatDate } from "@/utils/format";
import { cn } from "@/lib/utils";

interface SermonCardProps {
  sermon: Sermon;
  /** Optionnel : déclenché au clic sur la carte ou le bouton (ex: pour ouvrir la modale) */
  onClick?: (sermon: Sermon) => void;
  /** Style d'affichage : 'preview' pour page d'accueil / pasteur, 'grid' pour la page Prédications */
  variant?: "preview" | "grid";
  /** Mettre en évidence si la carte est sélectionnée (ex: modale active) */
  isActive?: boolean;
  className?: string;
}

export function SermonCard({
  sermon,
  onClick,
  variant = "preview",
  isActive = false,
  className,
}: SermonCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(sermon);
    }
  };

  const cardContent = (
    <>
      {/* Thumbnail */}
      <div
        className="relative aspect-video overflow-hidden bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)]"
        onClick={onClick ? handleClick : undefined}
      >
        {sermon.thumbnail ? (
          <Image
            src={sermon.thumbnail}
            alt={sermon.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-dark)]">
            <Play className="ml-0.5 h-5 w-5" />
          </div>
        </div>

        {variant === "grid" && sermon.series && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-[var(--color-gold)] px-2.5 py-1 text-xs font-bold text-[var(--color-navy-dark)] shadow-md">
            Série : {sermon.series}
          </span>
        )}

        <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white shadow-md">
          <Clock className="h-3 w-3" />
          {sermon.duration}
        </div>
      </div>

      {/* Info */}
      <div
        className={cn(
          "flex flex-1 flex-col justify-between p-4",
          variant === "grid" && "p-6"
        )}
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
            {formatDate(sermon.date)}
          </span>

          {onClick ? (
            <h3
              onClick={handleClick}
              className={cn(
                "mt-1 cursor-pointer font-heading font-bold text-[var(--color-navy)] transition-colors hover:text-[var(--color-gold)]",
                variant === "preview" ? "text-sm leading-snug" : "text-xl mt-2"
              )}
            >
              {sermon.title}
            </h3>
          ) : (
            <h3
              className={cn(
                "mt-1 font-heading font-bold text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-gold)]",
                variant === "preview" ? "text-sm leading-snug" : "text-xl mt-2"
              )}
            >
              {sermon.title}
            </h3>
          )}

          {variant === "grid" && sermon.description && (
            <p className="mt-2 line-clamp-2 text-sm text-[var(--color-gray-500)]">
              {sermon.description}
            </p>
          )}

          {variant === "preview" && (
            <p className="mt-1 text-xs text-[var(--color-gray-500)]">
              {sermon.speaker}
            </p>
          )}
        </div>

        {variant === "grid" && (
          <div className="mt-6 flex items-center justify-between border-t border-[var(--color-gray-100)] pt-4 text-xs text-[var(--color-gray-600)]">
            <div className="flex items-center gap-1.5 font-medium">
              <User className="h-3.5 w-3.5 text-[var(--color-gold)]" />
              {sermon.speaker}
            </div>
            {onClick ? (
              <button
                type="button"
                onClick={handleClick}
                className="font-bold text-[var(--color-navy)] hover:text-[var(--color-gold)]"
              >
                Regarder
              </button>
            ) : (
              <span className="font-bold text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-gold)]">
                Regarder
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      id={`sermon-${sermon.id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
        isActive
          ? "border-[var(--color-gold)] bg-[var(--color-gold)]/5 shadow-xl ring-2 ring-[var(--color-gold)]/40"
          : "border-[var(--color-gray-200)] bg-white hover:border-[var(--color-gold)]/30",
        className
      )}
    >
      {onClick ? (
        cardContent
      ) : (
        <Link href={`/predications?videoId=${sermon.id}`} className="block h-full">
          {cardContent}
        </Link>
      )}
    </div>
  );
}
