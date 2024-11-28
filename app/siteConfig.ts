export const siteConfig = {
  name: "TofuPilot",
  url: "https://tofupilot.com",
  description: "Plug-and-play manufacturing test analytics.",
  baseLinks: {
    // internal
    home: "/",
    about: "/about",
    templates: "/templates",
    plugs: "/plugs",
    guides: "/guides",
    blog: "/blog",
    changelog: "/changelog",

    // internal redirect
    docs: "/docs",

    // external
    login: `${process.env.NEXT_PUBLIC_APP_URL}/runs`,
    signup: `${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`,
  },
};

export type siteConfig = typeof siteConfig;
