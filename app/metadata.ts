const title =
  "TofuPilot: Build and deploy high-performance hardware tests faster.";
const description = "Plug-and-play manufacturing test analytics.";

export const defaultKeywords = [
  "tofupilot",
  "manufacturing test",
  "factory test",
  "open source",
  "python",
  "openhtf",
  "testbench",
  "test framework",
  "test automation",
  "hardware testing",
  "test execution engine",
  "open source teststand",
  "wats test data management",
];

export const defaultOpenGraph = {
  siteName: "TofuPilot",
  title: title,
  description: description,
  url: "https://tofupilot.com",
  images: [
    {
      url: "https://tofupilot.com/tofupilot-analytics-header.png",
      width: 800,
      height: 600,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const defaultMetadata = {
  title: {
    template: "%s - TofuPilot",
    default: title,
  },
  description: description,
  authors: [{ name: "TofuPilot Team", url: "https://tofupilot.com" }],
  keywords: defaultKeywords,
  openGraph: defaultOpenGraph,
};
