export const siteConfig = {
  name: "TofuPilot",
  url: "https://tofupilot.com",
  description: "Plug-and-play manufacturing test analytics.",
  baseLinks: {
    // internal
    home: "/",
    about: "/about",
    blog: "/blog",
    changelog: "/changelog",
    templates: "/templates",
    plugs: "/plugs",

    // internal redirect
    docs: "/docs",
    
    // external
    login: `${process.env.APP_URL} + /runs`,
    signup: `${process.env.APP_URL} + /auth/signup`,
  },
};

export type siteConfig = typeof siteConfig;
