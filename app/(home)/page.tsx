import { Metadata } from 'next';

import Benefits from './components/ui/Benefits';
import Cta from './components/ui/Cta';
import Features from './components/ui/Features';
import Hero from './components/ui/Hero';
import Infrastructure from './components/ui/Infrastructure';
import Integrations from './components/ui/Integration';
import LogoCloud from './components/ui/LogoCloud';
import UserStories from './components/ui/UserStories';

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
