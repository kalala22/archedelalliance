import type { ChurchInfo, Stat } from "@/types";

export const churchInfo: ChurchInfo = {
  name: "Centre Évangélique Arche de l'Alliance",
  shortName: "Arche de l'Alliance",
  tagline: "Un lieu de foi, d'espérance et d'amour",
  address: "Avenue de la Libération, Masina",
  city: "Kinshasa, RDC",
  country: "République Démocratique du Congo",
  phone: "+243 81 234 5678",
  email: "contact@archedelalliance.cd",
  coordinates: { lat: -4.3547, lng: 15.3875 },
  socialLinks: [
    {
      platform: "facebook",
      url: "https://facebook.com/archedelalliance",
      label: "Facebook",
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@archedelalliance",
      label: "YouTube",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/archedelalliance",
      label: "Instagram",
    },
    {
      platform: "twitter",
      url: "https://x.com/archedelalliance",
      label: "X (Twitter)",
    },
  ],
  worshipSchedule: [
    {
      day: "Dimanche",
      time: "08h00 - 12h00",
      label: "Culte Principal",
      description: "Louange, adoration et prédication de la Parole",
    },
    {
      day: "Mercredi",
      time: "18h00 - 20h00",
      label: "Étude Biblique",
      description: "Approfondissement de la Parole de Dieu",
    },
    {
      day: "Vendredi",
      time: "18h00 - 20h00",
      label: "Nuit de Prière",
      description: "Intercession et prière communautaire",
    },
    {
      day: "Samedi",
      time: "09h00 - 11h00",
      label: "Cellule de Maison",
      description: "Communion fraternelle en petits groupes",
    },
  ],
};

export const churchVision =
  "Être une église influente qui transforme des vies par la puissance de l'Évangile, formant des disciples engagés qui impactent leur communauté, leur nation et le monde pour la gloire de Dieu.";

export const churchMission =
  "Proclamer l'Évangile de Jésus-Christ avec excellence, former des disciples matures, servir notre communauté avec amour et compassion, et bâtir une église qui reflète la diversité et la beauté du Royaume de Dieu.";

export const churchHistory = `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum`;

export const stats: Stat[] = [
  { label: "Membres actifs", value: 2500, suffix: "+", icon: "Users" },
  { label: "Années de service", value: 27, icon: "Calendar" },
  { label: "Ministères", value: 8, icon: "Heart" },
  { label: "Cultes par semaine", value: 4, icon: "Church" },
];
