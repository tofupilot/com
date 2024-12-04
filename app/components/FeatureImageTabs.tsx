"use client";

import * as Tabs from "@radix-ui/react-tabs";
import {
  IconChartFunnel,
  IconChartHistogram,
  IconGauge,
} from "@tabler/icons-react";
import Arrow from "./ui/home/Arrow";

interface TabInfo {
  label: string;
  description: string;
  icon: React.ElementType;
}

const tabs: TabInfo[] = [
  {
    label: "Test Steps Analysis",
    description: "Break down performance analysis at step level.",
    icon: IconChartFunnel,
  },
  {
    label: "First-pass Yield",
    description: "Identify bottlenecks and what to do to improve.",
    icon: IconGauge,
  },
  {
    label: "Test Limits and Deviations",
    description: "Ensure correct test limits and process capability.",
    icon: IconChartHistogram,
  },
];

export default function FeatureImageTabs({
  tab1,
  tab2,
  tab3,
}: {
  tab1?: any;
  tab2?: any;
  tab3?: any;
}) {
  return (
    <Tabs.Root
      className="mt-14 grid grid-cols-12 gap-8"
      defaultValue="tab1"
      orientation="vertical"
    >
      <Tabs.List
        className="col-span-full flex w-full flex-col gap-8 md:order-2 md:col-span-5"
        aria-label="Select code"
      >
        {tabs.map((tab, index) => (
          <Tabs.Trigger
            key={tab.label}
            className="group relative flex flex-1 flex-col items-start justify-start rounded-xl p-6 text-left shadow-lg ring-1 ring-zinc-200 dark:ring-white/5 dark:data-[state=active]:shadow-lime-900/30"
            value={`tab${index + 1}`}
          >
            <div className="absolute -left-[36px] top-1/2 hidden -rotate-90 group-data-[state=active]:flex">
              <Arrow
                width={18}
                height={8}
                className="fill-zinc-950 dark:fill-zinc-900"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-square w-fit rounded-lg bg-white p-2 text-zinc-700 ring-1 ring-black/10 transition-all group-data-[state=active]:text-lime-600 group-data-[state=active]:shadow-md group-data-[state=active]:shadow-lime-500/20 dark:bg-zinc-950 dark:text-zinc-400 dark:ring-white/10 dark:group-data-[state=active]:text-lime-400 dark:group-data-[state=active]:shadow-lime-600/50">
                <tab.icon aria-hidden="true" className="size-5" />
              </div>
              <p className="font-semibold tracking-tight text-zinc-700 transition-all group-data-[state=active]:text-lime-600 sm:text-lg dark:text-zinc-400 dark:group-data-[state=active]:text-lime-400">
                {tab.label}
              </p>
            </div>
            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
              {tab.description}
            </p>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="col-span-full md:col-span-7">
        <Tabs.Content value="tab1">{tab1}</Tabs.Content>
        <Tabs.Content value="tab2">{tab2}</Tabs.Content>
        <Tabs.Content value="tab3">{tab3}</Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
