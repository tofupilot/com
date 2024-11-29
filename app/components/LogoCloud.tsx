import { Logos } from "./LogosCustomers";

export default function LogoCloud() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="sm:mt-34 mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="text-lg font-medium tracking-tighter text-zinc-800 dark:text-zinc-200">
        Powering fast-moving engineering teams at
      </p>
      <div className="grid grid-cols-2 gap-10 gap-y-4 text-zinc-900 md:grid-cols-4 md:gap-x-20 dark:text-zinc-200">
        <Logos.Ecorobotix className="w-32" />
        <Logos.EnchantedTools className="w-32" />

        <Logos.Enlightra className="w-32" />
        <Logos.SwissAirtainer className="w-32" />

        <Logos.Involi className="w-32" />
        <Logos.CeoTronics className="w-32" />

        <Logos.Chromatic className="w-32" />
        <Logos.EPFLSpaceCraftTeam className="w-32" />
      </div>
    </section>
  );
}
