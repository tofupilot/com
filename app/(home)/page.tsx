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

      <Testimonial
        quote="It's clear, it's direct, it's simple. That's what I liked about TofuPilot. I like things to be simple and pragmatic."
        name="Quentin Lohri"
        position="Senior Embedded Software Engineer & R&D Sensor Lead, SICPA"
        imageSrc="/testimonials/juliette-lansoy.png" // Temporary using existing image
      />

      <Features />
      
      <Testimonial
        quote="TofuPilot offers, in a clean and well structured way, a great overview of our testing results. New features are regularly added to enhance the data analysis opportunities that are brought to us seamlessly"
        name="Juliette Lansoy"
        position="Integration Validation & Verification Manager, Enchanted Tools"
        imageSrc="/testimonials/juliette-lansoy.png"
      />
      
      <Infrastructure />

      {/* <Benefits /> */}
      <UserStories />
      <Cta />
    </main>
  );
}
