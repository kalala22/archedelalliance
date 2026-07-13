export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[var(--color-navy-dark)] px-4 py-20 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center">
        {/* Pulsing ring */}
        <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-gold)]/20" />
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[var(--color-gold)]" />
      </div>
      <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
        Chargement en cours...
      </p>
    </div>
  );
}
