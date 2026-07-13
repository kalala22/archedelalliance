import type { ChurchEvent } from "@/types";

export const events: ChurchEvent[] = [
  { id: "e1", title: "Grande Convention Annuelle", date: "2025-08-15", time: "08:00", endTime: "17:00", location: "Temple Central, Masina", description: "Notre grande convention rassemble des milliers de fidèles pour une journée de louange, prédication et communion.", category: "conference", isUpcoming: true, image: "/images/events/convention.jpg" },
  { id: "e2", title: "Retraite Spirituelle", date: "2025-09-05", time: "06:00", endTime: "18:00", location: "Centre de Retraite Mont Ngaliema", description: "Un temps de retrait pour se ressourcer spirituellement loin du bruit de la ville.", category: "retraite", isUpcoming: true },
  { id: "e3", title: "Concert de Louange", date: "2025-07-20", time: "17:00", endTime: "21:00", location: "Temple Central, Masina", description: "Une soirée de louange et d'adoration avec les meilleurs groupes de worship de Kinshasa.", category: "special", isUpcoming: true },
  { id: "e4", title: "Séminaire sur le Mariage", date: "2025-08-02", time: "09:00", endTime: "15:00", location: "Salle Polyvalente", description: "Un séminaire pratique pour les couples mariés et ceux qui se préparent au mariage.", category: "conference", isUpcoming: true },
  { id: "e5", title: "Camp de Jeunesse", date: "2025-08-22", time: "07:00", location: "Lac Ma Vallée, Kinshasa", description: "3 jours de camp pour les jeunes de 15 à 30 ans avec enseignements, sports et communion.", category: "activite", isUpcoming: true },
  { id: "e6", title: "Journée de Prière et Jeûne", date: "2025-07-12", time: "06:00", endTime: "18:00", location: "Temple Central, Masina", description: "Une journée consacrée à la prière et au jeûne pour notre nation et nos familles.", category: "culte", isUpcoming: false },
  { id: "e7", title: "Fête de Noël", date: "2025-12-25", time: "08:00", endTime: "14:00", location: "Temple Central, Masina", description: "Célébration spéciale de la naissance de Jésus-Christ avec toute la famille.", category: "special", isUpcoming: true },
  { id: "e8", title: "Nuit de Louange", date: "2025-07-04", time: "20:00", endTime: "05:00", location: "Temple Central, Masina", description: "Une nuit entière dédiée à la louange et à l'adoration du Seigneur.", category: "culte", isUpcoming: false },
];
