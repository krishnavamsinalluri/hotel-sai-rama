import { MetadataRoute } from "next";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const routes = [
    "",
    "/about",
    "/rooms",
    "/facilities",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const roomRoutes = roomsData.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...roomRoutes];
}
