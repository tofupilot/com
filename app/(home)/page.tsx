import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import LogoCloud from "../components/LogoCloud";
import TestimonialJuliette from "../components/ui/home/TestimonialJuliette";
import TestimonialQuentin from "../components/ui/home/TestimonialQuentin";
import CodeExample from "../components/ui/home/CodeExample";
import UserStories from "../components/UserStories";

export default function Page() {
  return (
    <main role="main" className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      <CodeExample />
      <TestimonialQuentin />
      <Features />
      <TestimonialJuliette />
      <Infrastructure />
      <UserStories />
      <Cta />
    </main>
  );
}
