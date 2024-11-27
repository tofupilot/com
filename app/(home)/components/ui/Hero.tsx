import { Button } from '@/app/(home)/components/catalyst/button';
import { siteConfig } from '@/app/siteConfig';
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/16/solid';
import Balancer from 'react-wrap-balancer';
import { ThemedImage } from '../ThemedImage';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-40"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-zinc-50 dark:to-zinc-300"
        style={{ animationDuration: '700ms' }}
      >
        Plug-and-play <br />
        manufacturing test analytics
      </h1>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-zinc-700 dark:text-zinc-400"
        style={{ animationDuration: '900ms' }}
      >
        <Balancer>
          TofuPilot gives your team real-time insights to improve your
          manufacturing tests efficiency and quality.
        </Balancer>
      </p>
      <div
        className="mt-8 flex w-full animate-slide-up-fade flex-col justify-center gap-3 px-3 sm:flex-row"
        style={{ animationDuration: '1100ms' }}
      >
        <Button
          color="indigo"
          href={siteConfig.baseLinks.signup}
          className="h-10"
        >
          Get started
        </Button>
        <Button plain href={siteConfig.baseLinks.changelog} className="h-10">
          <SparklesIcon />
          Announcing OpenHTF Support
          <ChevronRightIcon />
        </Button>
      </div>
      <div
        className="relative mx-auto ml-3 mt-20 h-fit w-[40rem] max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: '1400ms' }}
      >
        <section aria-label="Hero Image of the website" className="flow-root">
          <ThemedImage
            lightSrc="/home/screenshot-hero-light.png"
            darkSrc="/home/screenshot-hero-dark.png"
            alt="A preview of the TofuPilot web app"
            width={2400}
            height={1600}
            className="rounded-md shadow-2xl ring-1 ring-zinc-900/10 dark:shadow-indigo-600/40"
          />
        </section>
      </div>
    </section>
  );
}
