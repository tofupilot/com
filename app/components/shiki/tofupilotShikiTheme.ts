import { ThemeInput } from "shiki";

export const tofupilotShikiTheme: ThemeInput = {
  name: "custom-tailwind-theme",
  type: "dark",
  colors: {
    "editor.background": "transparent", // Tailwind bg-zinc-900
    "editor.foreground": "#f4f4f5", // Tailwind text-zinc-100
  },
  tokenColors: [
    {
      scope: ["comment"],
      settings: {
        foreground: "#71717a", // Tailwind text-zinc-500
      },
    },
    {
      scope: ["string"],
      settings: {
        foreground: "#a3e635", // Tailwind text-lime-500
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: "#60a5fa", // Tailwind text-blue-400
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: "#f472b6", // Tailwind text-pink-400
      },
    },
    {
      scope: ["entity.name.function", "entity.name.function.python"],
      settings: {
        foreground: "#38bdf8", // Tailwind text-sky-400
      },
    },
    {
      scope: ["type"],
      settings: {
        foreground: "#fb923c", // Tailwind text-orange-400
      },
    },
  ],
};
