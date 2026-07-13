/**
 * Shared TypeScript types for the Centre Évangélique Arche de l'Alliance website.
 * All data structures used across the application are defined here.
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ChurchInfo {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  socialLinks: SocialLink[];
  worshipSchedule: WorshipSchedule[];
}

export interface SocialLink {
  platform: "facebook" | "youtube" | "instagram" | "twitter";
  url: string;
  label: string;
}

export interface WorshipSchedule {
  day: string;
  time: string;
  label: string;
  description?: string;
}

export interface Pastor {
  id: string;
  name: string;
  title: string;
  bio: string;
  fullBio: string;
  quote: string;
  vision: string;
  journey: TimelineItem[];
  image: string;
}

export interface Ministry {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  leader: string;
  activities: string[];
  meetingTime?: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  series?: string;
  description?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  description: string;
  image?: string;
  category: "culte" | "conference" | "retraite" | "activite" | "special";
  isUpcoming: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  text: string;
  avatar: string;
  rating?: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "cultes" | "evenements" | "jeunesse" | "communaute";
  width: number;
  height: number;
}

export interface SundaySchoolClass {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  activities: string[];
  objectives: string[];
  teachings: string[];
  image: string;
  color: string;
  teacher: Teacher;
}

export interface Teacher {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}
