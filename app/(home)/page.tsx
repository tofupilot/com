import { Metadata } from "next";

import Benefits from "../components/Benefits";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import Integrations from "../components/Integration";
import LogoCloud from "../components/LogoCloud";
import UserStories from "../components/UserStories";

export const metadata: Metadata = {
  title: "Plug-and-play manufacturing test analytics",
  description:
    "TofuPilot is where better and faster hardware innovation happens. Start today for free.",
};

export default function Page() {
  return (
    <div>
      <main role="main" className="flex flex-col overflow-hidden">
        <Hero />
        <LogoCloud />
        <Features />
        <Integrations />
        <Benefits />
        <UserStories />
        <Infrastructure />
        <Cta />
      </main>
    </div>
  );
}
