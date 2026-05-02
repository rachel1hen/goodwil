import type { APIRoute } from "astro";
import { allRoutes, siteUrl } from "../data/business";

export const GET: APIRoute = () => {
  const now = new Date().toISOString();
  const urls = allRoutes
    .map((route) => {
      const loc = new URL(route, siteUrl).toString();
      const priority = route === "/" ? "1.0" : route.startsWith("/courses") ? "0.9" : "0.7";
      return `<url><loc>${loc}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
