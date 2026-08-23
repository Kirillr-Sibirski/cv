import type { MetadataRoute } from "next";

// Static export needs these emitted at build time rather than served dynamically.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://krlberg.dev/sitemap.xml",
    host: "https://krlberg.dev",
  };
}
