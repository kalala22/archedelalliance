import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { churchInfo } from "@/data/church";
import { navigation } from "@/data/navigation";

/** Inline SVG social icons since Lucide removed brand icons */
const socialIcons = {
  facebook: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
  ),
  youtube: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" /></svg>
  ),
  instagram: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  ),
  twitter: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  ),
};

/**
 * Premium footer with 4 columns, social links, and gold accents.
 * Server Component — no interactivity needed.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-dark)] text-gray-400">
      {/* Top gold line */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container-church py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)] text-[var(--color-navy-dark)]">
                <span className="font-heading text-lg font-bold">A</span>
              </div>
              <div>
                <span className="block font-heading text-sm font-bold text-white">
                  Arche de l&apos;Alliance
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-[var(--color-gold)]">
                  Centre Évangélique
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              {churchInfo.tagline}. Une communauté de foi au cœur de Masina, Kinshasa.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {churchInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-dark)]"
                >
                  {socialIcons[link.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Liens rapides
            </h3>
            <ul className="space-y-2.5">
              {navigation.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Worship Schedule */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Horaires des cultes
            </h3>
            <ul className="space-y-3">
              {churchInfo.worshipSchedule.map((schedule) => (
                <li key={schedule.day} className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                  <div>
                    <span className="block text-sm font-medium text-gray-300">
                      {schedule.day}
                    </span>
                    <span className="text-xs">{schedule.time} — {schedule.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                <span className="text-sm">{churchInfo.address}, {churchInfo.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                <a href={`tel:${churchInfo.phone}`} className="text-sm hover:text-[var(--color-gold)]">
                  {churchInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                <a href={`mailto:${churchInfo.email}`} className="text-sm hover:text-[var(--color-gold)]">
                  {churchInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="">
        <div className="container-church flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:flex-row">
          <p>&copy; {currentYear} {churchInfo.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
