import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/data/church";
import Image from "next/image";

export function KeyStats() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/assembler.jpg"
          alt="Assembler Arche de l'Alliance"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-church relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              light
            />
          ))}
        </div>
      </div>
    </section>
  );
}
