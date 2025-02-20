import {
  AcademicCapIcon,
  BanknotesIcon,
  BellSlashIcon,
  GlobeEuropeAfricaIcon,
  HomeModernIcon,
  SunIcon,
} from "@heroicons/react/16/solid";

const benefits = [
  {
    name: "Transparent compensation & equity",
    icon: BanknotesIcon,
  },
  {
    name: "Two meeting-free days per week",
    icon: BellSlashIcon,
  },
  {
    name: "Home office with co-working credit",
    icon: HomeModernIcon,
  },
  {
    name: "On-site for Swiss/EU citizens at our Swiss HQ",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Training budget",
    icon: AcademicCapIcon,
  },
  {
    name: "4 weeks of holidays per year",
    icon: SunIcon,
  },
];

export default function BenefitsList() {
  return (
    <div className="mt-16 max-w-2xl w-full">
      <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        Benefits
      </h2>
      <dl className="mt-10 space-y-6 text-base/7 dark:text-white text-zinc-900">
        {benefits.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline">
              <feature.icon
                aria-hidden="true"
                className="absolute left-1 top-1 size-5 text-lime-500"
              />
              {feature.name}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
