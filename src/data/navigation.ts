import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Pasteur", href: "/pasteur" },
  {
    label: "Ministères",
    href: "/ministeres",
    children: [
      { label: "Union Musicale (Louange)", href: "/ministeres/union-musicale" },
      { label: "Intercession", href: "/ministeres/intercession" },
      { label: "Jeunesse", href: "/ministeres/jeunesse" },
      { label: "Femmes de Valeur", href: "/ministeres/ministere-des-femmes" },
      { label: "Hommes de Foi", href: "/ministeres/ministere-des-hommes" },
      { label: "Ministère des Enfants", href: "/ministeres/ministere-aupres-des-enfants" },
      { label: "Évangélisation & Suivi", href: "/ministeres/evangelisation-et-suivi" },

      { label: "Communication & Médias", href: "/ministeres/communication-chretienne-et-medias" },
    ],
  },
  { label: "École du Dimanche", href: "/ecole-du-dimanche" },
  { label: "Galerie", href: "/galerie" },
  { label: "Prédications", href: "/predications" },
  { label: "Événements", href: "/evenements" },
  { label: "Contact", href: "/contact" },
];
