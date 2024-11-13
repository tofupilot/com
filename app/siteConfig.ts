export const siteConfig = {
  name: "TofuPilot",
  url: "https://tofupilot.com",
  description: "Plug-and-play manufacturing test analytics.",
  baseLinks: {
    home: "/",
    about: "/about",
    changelog: "/changelog",
    blog: "/blog",
    signup: "/auth/signup",
    login: "/runs",
  },
};

export type SiteConfig = typeof siteConfig;
