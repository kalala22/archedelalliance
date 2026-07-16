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
      url: "https://youtube.com/@archedelalliance-tv",
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
      time: "07h30 – 13h30",
      label: "Cultes de Célébration (3 cultes)",
      description: "Louange, adoration et prédication de la Parole",
    },
    {
      day: "Mercredi",
      time: "17h00 - 19h30",
      label: "Étude Biblique",
      description: "Approfondissement de la Parole de Dieu",
    },
    {
      day: "Vendredi",
      time: "17h00 - 19h30",
      label: "Prière & Intercession",
      description: "Intercession et prière communautaire",
    },
    {
      day: "Samedi",
      time: "17h00 - 19h30",
      label: "Réunion Jeunesse",
      description: "Communion fraternelle et édification des jeunes",
    },
  ],
};

export const sundayServices = [
  { label: "1er Culte", time: "07h30 – 09h30" },
  { label: "2e Culte", time: "10h00 – 11h30" },
  { label: "3e Culte", time: "12h00 – 13h30" },
];

export const weeklyPrograms = [
  { day: "Mercredi", title: "Étude Biblique", icon: "BookOpen" },
  { day: "Vendredi", title: "Prière & Intercession", icon: "Sparkles" },
  { day: "Samedi", title: "Réunion Jeunesse", icon: "Users" },
];

export const churchVision =
  "Être une église biblique et dynamique, une arche de salut, d'amour et de transformation au cœur de Kinshasa et pour les nations. Nous aspirons à bâtir des disciples affermis dans la Parole de Dieu, rayonnant par leur foi et leur intégrité dans toutes les sphères de la société.";

export const churchMission =
  "Proclamer l'Évangile de Jésus-Christ avec puissance et clarté, accueillir chaque personne avec amour et compassion, et équiper les croyants pour le service spirituel et l'impact communautaire à Masina et partout ailleurs.";

export const churchHistory =
  "Fondé il y a plus de 27 ans sous l'impulsion du Saint-Esprit et par une vision pastorale authentique, le Centre Évangélique Arche de l'Alliance est né d'un petit groupe de prière passionné par la gloire de Dieu. Au fil des décennies, l'église s'est développée pour devenir un pilier spirituel majeur à Masina (Kinshasa), rassemblant aujourd'hui des milliers de fidèles lors de ses multiples cultes dominicaux de célébration et s'investissant activement dans l'évangélisation et les œuvres sociales.";

export const stats: Stat[] = [
  { label: "Membres actifs", value: 2500, suffix: "+", icon: "Users" },
  { label: "Années de service", value: 27, icon: "Calendar" },
  { label: "Ministères", value: 8, icon: "Heart" },
  { label: "Cultes par semaine", value: 4, icon: "Church" },
];
