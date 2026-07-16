/**
 * Central configuration constants for the application.
 */

export const APP_CONFIG = {
  name: "Centre Évangélique Arche de l'Alliance",
  shortName: "Arche de l'Alliance",
  url: "https://archedelalliance.cd",
  city: "Kinshasa, RDC",
  youtubeChannelUrl: "https://youtube.com/@archedelalliance-tv",
} as const;

export const API_CONFIG = {
  youtube: {
    /** Cache revalidate duration in seconds (1 hour) */
    revalidateTime: 3600,
    /** Default max results for preview sections (Home, Pastor) */
    maxResultsPreview: 6,
    /** Default max results for Predications grid page */
    maxResultsPage: 12,
  },
} as const;
