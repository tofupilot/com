import { Metadata } from 'next';

import Benefits from './(home)/components/ui/Benefits';
import Cta from './(home)/components/ui/Cta';
import Features from './(home)/components/ui/Features';
import Hero from './(home)/components/ui/Hero';
import Infrastructure from './(home)/components/ui/Infrastructure';
import Integrations from './(home)/components/ui/Integration';
import LogoCloud from './(home)/components/ui/LogoCloud';
import UserStories from './(home)/components/ui/UserStories';

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
