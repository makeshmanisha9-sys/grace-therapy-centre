import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grace-therapy-centre.local";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/appointments",
    "/teletherapy",
    "/contact",
    "/gallery",
    "/faq",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
