import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/coming-soon", "/api/"],
            },
        ],
        sitemap: "https://leoga.de/sitemap.xml",
    };
}
