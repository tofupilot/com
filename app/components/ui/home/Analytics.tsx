'use client';

import { AreaChart, BarChart, CategoryBar } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 23',
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: 'Feb 23',
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: 'Mar 23',
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: 'Apr 23',
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: 'May 23',
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: 'Jun 23',
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: 'Jul 23',
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: 'Aug 23',
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: 'Sep 23',
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: 'Oct 23',
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: 'Nov 23',
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: 'Dec 23',
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

export default function Analytics() {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-3 py-20 sm:text-center">
        <span className="block bg-gradient-to-b from-gray-700 to-gray-400 bg-clip-text text-lg font-semibold text-transparent dark:from-blue-200 dark:to-blue-400 sm:text-xl">
          Analytics
        </span>
        <h2
          id="features-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-6xl"
        >
          Insights made for everyone
        </h2>
        <div className="group relative mt-12 h-[30rem] transition">
          <div className="absolute top-12 h-80 w-full scale-90 transform-gpu rounded-lg bg-white shadow-md shadow-black/5 ring-1 ring-black/5 transition-all delay-75 duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:top-52 group-hover:rotate-6">
            <div className="relative flex size-full items-center">
              <div className="absolute left-2.5 top-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute bottom-2.5 left-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute bottom-2.5 right-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <AreaChart
                className="mx-auto h-60 px-3 sm:px-10"
                data={chartdata}
                index="date"
                categories={['SolarPanels', 'Inverters']}
              />
            </div>
          </div>
          <div className="delay-50 absolute top-6 h-80 w-full scale-95 transform-gpu rounded-lg bg-white shadow-md shadow-black/5 ring-1 ring-black/5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:top-16 group-hover:-rotate-3">
            <div className="relative flex size-full items-end">
              <div className="absolute left-2.5 top-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute bottom-2.5 left-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute bottom-2.5 right-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <CategoryBar
                values={[10, 10, 20]}
                marker={{ value: 17, tooltip: '68', showAnimation: false }}
                colors={['pink', 'amber', 'emerald']}
                className="mb-12 w-full px-3 sm:px-10"
              />
            </div>
          </div>
          <div className="absolute top-0 flex h-80 w-full transform-gpu items-center rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-black/5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-top-6 group-hover:rotate-3 group-hover:scale-95">
            <div className="relative flex size-full items-center">
              <div className="absolute left-2.5 top-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute bottom-2.5 left-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <div className="absolute bottom-2.5 right-2.5 size-1.5 rounded-full bg-gray-200 shadow-inner dark:bg-gray-800" />
              <BarChart
                className="mx-auto h-60 px-3 sm:px-10"
                data={chartdata}
                showTooltip={false}
                index="date"
                categories={['SolarPanels', 'Inverters']}
              />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}