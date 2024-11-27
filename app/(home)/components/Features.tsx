import {
  IconFileCheck,
  IconLayersSubtract,
  IconSitemap,
  IconStopwatch,
} from "@tabler/icons-react";
import { Badge } from "./Badge";
import FeatureImageTabs from "./FeatureImageTabs";
import FeatureImage from "./FeatureImage";

const features = [
  {
    name: "Cycle Time",
    description: "Reduce test time by identifying steps that slow down tests.",
    icon: IconStopwatch,
  },
  {
    name: "Sub-Units",
    description:
      "Ensure traceability by tracking tests through assembly stages.",
    icon: IconSitemap,
  },
  {
    name: "Test Reports",
    description:
      "Automatically generate printable test reports for easy sharing.",
    icon: IconFileCheck,
  },
  {
    name: "Revisions",
    description:
      "Easily manage and compare test results across unit revisions.",
    icon: IconLayersSubtract,
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <Badge>Features</Badge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Everything you need <br />
        to ramp up production testing
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        From test data collection to real-time analytics, TofuPilot offers
        powerful features to help your team improve manufacturing efficiency and
        quality.
      </p>
      <FeatureImageTabs
        tab1={
          <FeatureImage
            lightSrc="/home/features/screenshot-steps-light.png"
            darkSrc="/home/features/screenshot-steps-dark.png"
          />
        }
        tab2={
          <FeatureImage
            lightSrc="/home/features/screenshot-fpy-light.png"
            darkSrc="/home/features/screenshot-fpy-dark.png"
          />
        }
        tab3={
          <FeatureImage
            lightSrc="/home/features/screenshot-cpk-light.png"
            darkSrc="/home/features/screenshot-cpk-dark.png"
          />
        }
      />
      <dl className="mt-20 grid grid-cols-4 gap-10">
        {features.map((item) => (
          <div
            key={item.name}
            className="col-span-full sm:col-span-2 lg:col-span-1"
          >
            <dt>
              <div className="w-fit rounded-lg p-2 shadow-md shadow-indigo-400/30 ring-1 ring-black/5 dark:shadow-indigo-600/30 dark:ring-white/5">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <p className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                {item.name}
              </p>
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
