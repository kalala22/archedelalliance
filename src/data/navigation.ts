import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Pasteur", href: "/pasteur" },
  {
    label: "Ministères",
    href: "/ministeres",
    children: [
      { label: "Louange & Adoration", href: "/ministeres/louange-et-adoration" },
      { label: "Intercession", href: "/ministeres/intercession" },
      { label: "Jeunesse", href: "/ministeres/jeunesse" },
      { label: "Femmes de Valeur", href: "/ministeres/femmes-de-valeur" },
      { label: "Hommes de Foi", href: "/ministeres/hommes-de-foi" },
      { label: "Ministère des Enfants", href: "/ministeres/ministere-des-enfants" },
      { label: "Évangélisation", href: "/ministeres/evangelisation" },
      { label: "Action Sociale", href: "/ministeres/action-sociale" },
    ],
  },
  { label: "École du Dimanche", href: "/ecole-du-dimanche" },
  { label: "Galerie", href: "/galerie" },
  { label: "Prédications", href: "/predications" },
  { label: "Événements", href: "/evenements" },
  { label: "Contact", href: "/contact" },
];
