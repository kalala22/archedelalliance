"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Erreur capturée par boundary:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-lg">
        <AlertTriangle className="h-10 w-10" />
      </div>
      <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
        Une erreur inattendue est survenue
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-gray-600)] sm:text-base">
        Nous nous excusons pour la gêne occasionnée. Vous pouvez tenter de recharger la page ou retourner à l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-navy-light)] hover:shadow-md"
        >
          <RefreshCw className="h-4 w-4" />
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gray-200)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:border-[var(--color-navy)] hover:bg-[var(--color-gray-50)]"
        >
          <Home className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
