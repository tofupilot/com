import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import LogoCloud from "../components/LogoCloud";
import Testimonial from "../components/Testimonials";
import CodeExample from "../components/ui/home/CodeExample";
import UserStories from "../components/UserStories";

export default function Page() {
  return (
    <main role="main" className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      <CodeExample />
      <Testimonial variant="quentin" />
      <Features />
      <Testimonial variant="juliette" />
      <Infrastructure />
      <UserStories />
      <Cta />
    </main>
  );
}
