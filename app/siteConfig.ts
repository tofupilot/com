const url = "https://tofupilot.com";
export const siteConfig = {
  name: "TofuPilot",
  url,
  description: "Plug-and-play manufacturing test analytics.",
  baseLinks: {
    home: url,
    about: `${url}/about`,
    changelog: `${url}/changelog`,
    blog: "/",
    signup: `${url}/auth/signup`,
    login: `${url}/runs`,
  },
};

export type SiteConfig = typeof siteConfig;
