import type { MetadataRoute } from "next";
import { ministries } from "@/data/ministries";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archedelalliance.cd";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/a-propos",
    "/ministeres",
    "/predications",
    "/pasteur",
    "/ecole-du-dimanche",
    "/evenements",
    "/galerie",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/predications" || route === "/evenements"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      route === ""
        ? 1
        : route === "/predications" || route === "/ministeres" || route === "/pasteur"
          ? 0.8
          : 0.6,
  }));

  const ministryRoutes = ministries.map((m) => ({
    url: `${baseUrl}/ministeres/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...ministryRoutes];
}
