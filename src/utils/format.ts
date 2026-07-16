/**
 * Date and text formatting utilities
 */

const frenchMonths = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

const frenchDays = [
  "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi",
];

/**
 * Format a date string to French locale display format.
 * @example formatDate("2025-03-15") → "15 mars 2025"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = frenchMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Format a date string with the day name.
 * @example formatDateWithDay("2025-03-15") → "Samedi 15 mars 2025"
 */
export function formatDateWithDay(dateString: string): string {
  const date = new Date(dateString);
  const dayName = frenchDays[date.getDay()];
  const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  return `${capitalizedDay} ${formatDate(dateString)}`;
}


/**
 * Generate initials from a full name.
 * @example getInitials("Jean-Pierre Kalala") → "JK"
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((part) => part.length > 0)
    .map((part) => part[0].toUpperCase())
    .slice(0, 2)
    .join("");
}
