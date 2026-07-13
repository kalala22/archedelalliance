import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/culte-1.jpg", alt: "Culte du dimanche — louange", category: "cultes", width: 800, height: 600 },
  { id: "g2", src: "/images/gallery/culte-2.jpg", alt: "Prédication du pasteur", category: "cultes", width: 600, height: 800 },
  { id: "g3", src: "/images/gallery/culte-3.jpg", alt: "Assemblée en prière", category: "cultes", width: 800, height: 500 },
  { id: "g4", src: "/images/gallery/culte-4.jpg", alt: "Chorale en action", category: "cultes", width: 700, height: 700 },
  { id: "g5", src: "/images/gallery/culte-5.jpg", alt: "Baptême", category: "cultes", width: 800, height: 600 },
  { id: "g6", src: "/images/gallery/event-1.jpg", alt: "Convention annuelle", category: "evenements", width: 800, height: 500 },
  { id: "g7", src: "/images/gallery/event-2.jpg", alt: "Concert de louange", category: "evenements", width: 600, height: 800 },
  { id: "g8", src: "/images/gallery/event-3.jpg", alt: "Séminaire mariage", category: "evenements", width: 800, height: 600 },
  { id: "g9", src: "/images/gallery/event-4.jpg", alt: "Retraite spirituelle", category: "evenements", width: 700, height: 500 },
  { id: "g10", src: "/images/gallery/event-5.jpg", alt: "Fête de Noël", category: "evenements", width: 800, height: 700 },
  { id: "g11", src: "/images/gallery/jeunesse-1.jpg", alt: "Camp de jeunesse", category: "jeunesse", width: 800, height: 600 },
  { id: "g12", src: "/images/gallery/jeunesse-2.jpg", alt: "Étude biblique jeunesse", category: "jeunesse", width: 600, height: 800 },
  { id: "g13", src: "/images/gallery/jeunesse-3.jpg", alt: "Activités sportives", category: "jeunesse", width: 800, height: 500 },
  { id: "g14", src: "/images/gallery/jeunesse-4.jpg", alt: "Soirée de louange jeunesse", category: "jeunesse", width: 700, height: 600 },
  { id: "g15", src: "/images/gallery/jeunesse-5.jpg", alt: "École du dimanche", category: "jeunesse", width: 800, height: 600 },
  { id: "g16", src: "/images/gallery/communaute-1.jpg", alt: "Action sociale — aide alimentaire", category: "communaute", width: 800, height: 600 },
  { id: "g17", src: "/images/gallery/communaute-2.jpg", alt: "Visite aux malades", category: "communaute", width: 600, height: 800 },
  { id: "g18", src: "/images/gallery/communaute-3.jpg", alt: "Communion fraternelle", category: "communaute", width: 800, height: 500 },
  { id: "g19", src: "/images/gallery/communaute-4.jpg", alt: "Repas communautaire", category: "communaute", width: 700, height: 700 },
  { id: "g20", src: "/images/gallery/communaute-5.jpg", alt: "Cérémonie de mariage", category: "communaute", width: 800, height: 600 },
];

export const galleryCategories = [
  { id: "all", label: "Toutes" },
  { id: "cultes", label: "Cultes" },
  { id: "evenements", label: "Événements" },
  { id: "jeunesse", label: "Jeunesse" },
  { id: "communaute", label: "Communauté" },
] as const;
