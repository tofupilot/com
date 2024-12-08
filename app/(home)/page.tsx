import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import LogoCloud from "../components/LogoCloud";
import CodeExample from "../components/ui/home/CodeExample";
import UserStories from "../components/UserStories";

export default function Page() {
  return (
    <main role="main" className="flex flex-col">
      <Hero />
      <LogoCloud />
      <CodeExample />

      {/* <section
          id="testimonial"
          className="mx-auto py-24 sm:py-32 max-w-xl lg:max-w-6xl"
          aria-labelledby="testimonial"
        >
          <Testimonial
            quote="It took us just 5 minutes to integrate TofuPilot into our  scripts and get all our test data cleaned and neatly ordered on the dashboard. Amazing!"
            name="Juliette Lansoy"
            position="Test Manager, Enchanted Tools"
            imageSrc="/testimonials/juliette-lansoy.png"
          />
        </section> */}

      <Features />
      <Infrastructure />

      {/* <Benefits /> */}
      <UserStories />
      <Cta />
    </main>
  );
}
