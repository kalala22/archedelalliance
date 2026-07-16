"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={onClose}
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
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-8 py-2.5 text-sm text-gray-400 transition-colors hover:text-[var(--color-gold)]"
                      onClick={onClose}
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
                onClick={onClose}
              >
                Nous rejoindre
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
