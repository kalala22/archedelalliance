"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-dark shadow-lg shadow-[var(--color-navy-dark)]/20 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-church flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)] text-[var(--color-navy-dark)] transition-transform duration-300 group-hover:scale-105">
              <span className="font-heading text-lg font-bold">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="block font-heading text-sm font-bold leading-tight text-white">
                Arche de l&apos;Alliance
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-gold)]">
                Centre Évangélique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-[var(--color-gold)]"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-64 rounded-xl border border-white/10 bg-[var(--color-navy)] p-2 shadow-xl shadow-black/30"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-[var(--color-gold)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy-dark)] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20 lg:inline-flex"
            >
              Nous rejoindre
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-[var(--color-navy)] p-6 pt-20 shadow-2xl lg:hidden"
              aria-label="Navigation mobile"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === item.href
                          ? "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      )}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-8 py-2.5 text-sm text-gray-400 transition-colors hover:text-[var(--color-gold)]"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-[var(--color-gold)] py-3 text-center text-sm font-semibold text-[var(--color-navy-dark)] transition-colors hover:bg-[var(--color-gold-light)]"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Nous rejoindre
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
