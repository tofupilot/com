// highlighter.ts
import { Highlighter, createHighlighter } from "shiki";
import { tofupilotShikiTheme } from "./tofupilotShikiTheme";

let highlighterInstance: Highlighter | null = null;

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
      themes: [tofupilotShikiTheme],
      langs: ["python"], // Add other languages as needed
    });
  }
  return highlighterInstance;
}
