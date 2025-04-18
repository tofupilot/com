import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Metadata } from "next";
import { Button } from "./components/catalyst/button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The requested page could not be found.",
};

export default function Page() {
  return (
    <main
      role="main"
      className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="text-center">
        <p className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-200">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Sorry, we could not find the page you are looking for.
        </p>
        <Button color="lime" href={"/"} className="mt-10">
          <ArrowLeftIcon />
          Go back home
        </Button>
      </div>
    </main>
  );
}
