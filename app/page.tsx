import { Metadata } from 'next';

import Benefits from './_components/ui/Benefits';
import Cta from './_components/ui/Cta';
import Features from './_components/ui/Features';
import Hero from './_components/ui/Hero';
import Infrastructure from './_components/ui/Infrastructure';
import Integrations from './_components/ui/Integration';
import LogoCloud from './_components/ui/LogoCloud';
import UserStories from './_components/ui/UserStories';

export const metadata: Metadata = {
  title: 'Plug-and-play manufacturing test analytics',
  description:
    'TofuPilot is where better and faster hardware innovation happens. Start today for free.',
};

export default function Page() {
  return (
    <main role="main" className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      <Features />
      {/* <Testimonial />  Ecorobotix */}
      <Integrations />
      {/* <Testimonial /> Christophe Ecorobotix */}
      <Benefits />
      <UserStories />
      <Infrastructure />
      <Cta />
    </main>
  );
}
