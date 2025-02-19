import Balancer from "react-wrap-balancer";
import { HeaderBadge } from "./HeaderBadge";
import { Logos } from "./LogosCustomers";
import Image from "next/image";

export default function LogoCloud() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="sm:mt-34 mt-24 flex animate-slide-up-fade flex-col items-center justify-center text-center px-4"
      style={{ animationDuration: "1500ms" }}
    >
      <div className="flex gap-x-3">
        <h2
          id="features-title"
          className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-zinc-50 dark:to-zinc-300 lg:text-5xl"
        >
          <Balancer>
            These folks{" "}
            <span className="bg-gradient-to-b from-zinc-700 to-zinc-400 bg-clip-text dark:from-lime-300 dark:to-lime-600">
              test their products faster
            </span>{" "}
            with
            <span className="inline-block relative ml-1 lg:ml-2.5 top-1 w-10 size-10 lg:size-16">
              <Image
                src="/logo.svg"
                alt="logo"
                fill
                className="object-contain"
              />
            </span>
          </Balancer>
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 text-zinc-900 xl:grid-cols-4 dark:text-zinc-200">
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.Ecorobotix className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.EnchantedTools className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.PacificDefense className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.Sicpa className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.PowerElectronics className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.MoveInnovation className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.Enlightra className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.SwissAirtainer className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.Involi className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.CeoTronics className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.Chromatic className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
        <div className="p-6 sm:p-14 bg-zinc-100 rounded-lg dark:bg-zinc-800">
          <Logos.EPFLSpaceCraftTeam className="max-h-11 sm:max-h-14 w-full object-contain" />
        </div>
      </div>
    </section>
  );
}
