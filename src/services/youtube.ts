import type { Sermon } from "@/types";
import { API_CONFIG } from "@/config/constants";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

interface YouTubeApiItem {
  id?: {
    videoId?: string;
  };
  snippet?: {
    title?: string;
    description?: string;
    publishedAt?: string;
    liveBroadcastContent?: string;
    channelTitle?: string;
    thumbnails?: {
      high?: { url?: string };
      medium?: { url?: string };
      default?: { url?: string };
    };
  };
}

/**
 * Décode les entités HTML courantes renvoyées dans les titres et descriptions de l'API YouTube.
 */
function decodeHtmlEntities(text: string): string {
  if (!text) return "";
  return text
    .replace(/&#39;/g, "'")
    .replace(/&#34;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/**
 * Récupère les dernières vidéos de la chaîne YouTube de l'église.
 * En cas d'erreur (quota dépassé, clé invalide, hors ligne), retourne les données locales en fallback.
 *
 * @param maxResults Nombre maximum de vidéos à récupérer
 */
export async function fetchYouTubeSermons(maxResults: number = API_CONFIG.youtube.maxResultsPage): Promise<Sermon[]> {
  try {
    if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
      console.warn("Clé API YouTube ou Channel ID manquant. Retour d'une liste vide.");
      return [];
    }

    // Récupérer les vidéos publiées à partir du mois de juin (pour limiter la liste et préserver le quota)
    const currentYear = new Date().getFullYear();
    const targetYear = new Date().getMonth() < 5 ? currentYear - 1 : currentYear;
    const publishedAfter = `${targetYear}-06-01T00:00:00Z`;

    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&type=video&maxResults=${maxResults}&publishedAfter=${publishedAfter}`;

    // Mise en cache pour préserver le quota quotidien
    const res = await fetch(url, {
      next: { revalidate: API_CONFIG.youtube.revalidateTime },
    });

    if (!res.ok) {
      console.warn(`Erreur de l'API YouTube (${res.status}). Retour d'une liste vide.`);
      return [];
    }

    const data = await res.json();

    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      return [];
    }

    const fetchedSermons: Sermon[] = data.items
      .filter((item: YouTubeApiItem) => Boolean(item.id?.videoId))
      .map((item: YouTubeApiItem): Sermon => {
        const videoId = item.id?.videoId || "";
        const snippet = item.snippet || {};

        const title = decodeHtmlEntities(snippet.title || "Message / Culte dominical");
        const description = decodeHtmlEntities(snippet.description || "");
        const publishedAt = snippet.publishedAt ? snippet.publishedAt.split("T")[0] : new Date().toISOString().split("T")[0];

        // Détermination du statut (En direct / Rediffusion)
        const duration = snippet.liveBroadcastContent === "live" ? "En direct 🔴" : "Vidéo complète";

        const thumbnail = snippet.thumbnails?.high?.url || "/images/sermons/sermon-1.jpg";

        return {
          id: videoId,
          title,
          speaker: snippet.channelTitle || "L'Arche de l'Alliance TV",
          date: publishedAt,
          duration,
          thumbnail,
          description,
          videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        };
      });

    return fetchedSermons;
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos YouTube :", error);
    return [];
  }
}
