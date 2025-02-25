export const siteConfig = {
  name: "TofuPilot",
  url: "https://www.tofupilot.com",
  description: "Plug-and-play manufacturing test analytics.",
  baseLinks: {
    // internal
    home: "/",
    about: "/about",
    pricing: "/pricing",
    templates: "/templates",
    plugs: "/plugs",
    guides: "/guides",
    blog: "/blog",
    changelog: "/changelog",
    contact: "/contact/sales",
    support: "/contact/support",
    newsletter: "/newsletter",
    careers: "/careers",

    // docs
    docs: "/docs",
    selfhosting: "/docs/self-hosting",
    offlineupload: "/docs/offline-upload",

    // legal
    privacy: "/docs/legal/privacy-policy",
    terms: "/docs/legal/terms-conditions",

    // external
    login: `${process.env.NEXT_PUBLIC_APP_URL}/runs`,
    signup: `${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`,
    discord: "https://discord.gg/fK3AeTyngh",
  },
};

export type siteConfig = typeof siteConfig;
