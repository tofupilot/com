import { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteConfig.url + siteConfig.baseLinks.about,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: siteConfig.url + siteConfig.baseLinks.newsletter,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteConfig.url + siteConfig.baseLinks.blog,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: siteConfig.url + siteConfig.baseLinks.careers,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: siteConfig.url + siteConfig.baseLinks.templates,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
