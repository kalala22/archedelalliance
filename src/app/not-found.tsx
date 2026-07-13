import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center bg-[var(--color-navy-dark)] px-4 py-24 text-center text-white">
      <div className="relative mb-6">
        <span className="font-heading text-8xl font-bold tracking-tighter text-white/10 sm:text-9xl">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-[var(--color-gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
            Page introuvable
          </span>
        </div>
      </div>

      <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
        Nous n&apos;avons pas trouvé cette page
      </h1>

      <p className="mx-auto mt-4 max-w-md text-base text-gray-400">
        La page que vous recherchez a peut-être été déplacée, renommée ou est
        actuellement indisponible.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-bold text-[var(--color-navy-dark)] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-lg"
        >
          <Home className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
        >
          <ArrowLeft className="h-4 w-4" />
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
