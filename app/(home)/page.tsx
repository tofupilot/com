import { Metadata } from 'next';

import Benefits from '../components/Benefits';
import Cta from '../components/Cta';
import Features from '../components/Features';
import Infrastructure from '../components/Infrastructure';
import Integrations from '../components/Integration';
import LogoCloud from '../components/LogoCloud';
import UserStories from '../components/UserStories';
import Hero from '../components/Hero';
import CodeExample from '../components/ui/home/CodeExample';
import Analytics from '../components/ui/home/Analytics';
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
      {/* <CodeExample /> */}
      {/* <Analytics/> */}
      <Features />
      <Integrations />
      <Benefits />
      <UserStories />
      <Infrastructure />
      <Cta />
    </main>
  );
}
