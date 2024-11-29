import { Badge } from "@/app/components/catalyst/badge";
import { Button } from "@/app/components/catalyst/button";
import { HeaderBadge } from "@/app/components/HeaderBadge";
import { Faqs } from "@/app/components/ui/Faqs";
import Testimonial from "@/app/components/ui/Testimonial";
import { cx } from "@/app/lib/utils";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { RiCheckLine, RiSubtractLine } from "@remixicon/react";
import { Fragment } from "react";
import Balancer from "react-wrap-balancer";

type FixedPrice = string;

interface VariablePrice {
  monthly: string;
  annually: string;
}

interface Plan {
  name: string;
  price: FixedPrice | VariablePrice;
  description: string;
  features: string[];
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
}

const plans: Plan[] = [
  {
    name: "Lab",
    price: "$0",
    description: "Everything you need to kickstart your test project.",
    features: [
      "OpenHTF native support",
      "Python open-source client",
      "Automatic test data pipeline",
      "Real-time test step analytics",
      "Secure attachments upload",
      "Community support",
    ],
    isRecommended: false,
    buttonText: "Start Building",
    buttonLink: "#",
  },
  {
    name: "Pro",
    price: { monthly: "$49", annually: "$39" },
    description: "Collaborate with your team for **$50/month**, per member.",
    features: [
      "Secure team collaboration",
      "Deploy to manufacturing",
      "MES integration",
      "Scales with you",
      "Email support",
    ],
    isRecommended: true,
    buttonText: "Upgrade now",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For larger Pro that need more advanced controls and features.",
    features: [
      "Self-hosting option",
      "Custom integrations",
      "99.99% SLA",
      "Custom billing",
      "Advanced support",
    ],
    isRecommended: false,
    buttonText: "Request Trial",
    buttonLink: "#",
  },
];

interface Feature {
  name: string;
  plans: Record<string, any>;
  tooltip?: string;
}

interface Section {
  name: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    name: "Test Data Pipeline",
    features: [
      {
        name: "Test Steps Analytics",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Lab: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "First-pass Yield",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Lab: true, Pro: true, Enterprise: true },
      },
      {
        name: "Process Capability",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Lab: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Runs",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Lab: "500 runs /month included",
          Pro: ["1000 runs /month included", "$10 per 1000 runs"],
          Enterprise: "Custom",
        },
      },
      {
        name: "Attachments",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Lab: "1 GB /month included",
          Pro: ["10 GB /month included", "$1 per 10GB"],
          Enterprise: "Custom",
        },
      },
    ],
  },
  {
    name: "Collaborate & Deploy",
    features: [
      {
        name: "Team Seats",
        tooltip: "Collaborate on your projects with your team.",
        plans: {
          Lab: "1 seat included",
          Pro: ["1 seat included", "$50 per seat"],
          Enterprise: "Custom",
        },
      },
      {
        name: "Factory Stations",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Lab: false,
          Pro: ["3 stations included", "$20 per station"],
          Enterprise: "Custom",
        },
      },
    ],
  },
  {
    name: "MES Integrations",
    features: [
      {
        name: "Odoo",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Lab: false,
          Pro: "$100 per team",
          Enterprise: "Available",
        },
      },
      {
        name: "Custom MES Integration",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Lab: false, Pro: false, Enterprise: "Available" },
      },
    ],
  },
  {
    name: "Security",
    features: [
      {
        name: "Secure Cloud",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Lab: true, Pro: true, Enterprise: true },
      },
      {
        name: "Self-hosting",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Lab: false, Pro: false, Enterprise: "Available" },
      },
    ],
  },
];

const isVariablePrice = (
  price: FixedPrice | VariablePrice
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined;
};

export default function Pricing() {
  return (
    <div className="px-3">
      <section
        aria-labelledby="pricing-title"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <HeaderBadge>Pricing</HeaderBadge>
        <h1 className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300">
          Find a plan to power your factory.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-700 dark:text-zinc-400">
          Plans that empower you and your team to ship without friction. Our
          flexible pricing models ensure that efficiency doesn&rsquo;t come at
          the cost of your budget.
        </p>
      </section>
      <section
        id="pricing-overview"
        className="mt-20 animate-slide-up-fade"
        aria-labelledby="pricing-overview"
        style={{
          animationDuration: "600ms",
          animationDelay: "200ms",
          animationFillMode: "backwards",
        }}
      >
        <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <div key={planIdx} className="mt-6">
              {plan.isRecommended ? (
                <div className="flex h-4 items-center">
                  <div className="relative w-full">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-lime-600 dark:border-lime-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-lime-600 dark:bg-zinc-950 dark:text-lime-400">
                        Popular
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-4 items-center">
                  <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              )}
              <div className="mx-auto max-w-md">
                <div className="mt-6 flex items-center gap-x-3">
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {plan.name}
                  </h2>
                  {plan.isRecommended && <Badge color="lime">Popular</Badge>}
                </div>
                <div className="mt-4 flex flex-col justify-between">
                  <div className="leading-6 text-zinc-600 dark:text-zinc-400">
                    <Balancer>
                      {plan.description.split(/(\*\*.*?\*\*)/).map((part, i) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong
                            key={i}
                            className="font-semibold text-zinc-900 dark:text-zinc-50"
                          >
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </Balancer>
                  </div>
                  <div className="mt-6 pr-16">
                    {planIdx === 0 ? (
                      <Button
                        href={plan.buttonLink}
                        className="w-full justify-between"
                      >
                        {plan.buttonText}
                        <ChevronRightIcon />
                      </Button>
                    ) : planIdx === 1 ? (
                      <Button
                        href={plan.buttonLink}
                        color="lime"
                        className="w-full justify-between"
                      >
                        {plan.buttonText}
                        <ChevronRightIcon />
                      </Button>
                    ) : (
                      <Button
                        href={plan.buttonLink}
                        color="white"
                        className="w-full justify-between"
                      >
                        {plan.buttonText}
                        <ChevronRightIcon />
                      </Button>
                    )}
                  </div>
                </div>
                <ul
                  role="list"
                  className="mt-8 text-sm text-zinc-700 dark:text-zinc-400"
                >
                  {planIdx === 0 || (
                    <li className="flex items-center py-1.5">
                      <span>
                        Everything in {plans[planIdx - 1].name}, plus:
                      </span>
                    </li>
                  )}
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      <RiCheckLine
                        className="size-4 shrink-0 text-lime-600 dark:text-lime-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonial"
        className="mx-auto mt-20 max-w-xl sm:mt-32 lg:max-w-6xl"
        aria-labelledby="testimonial"
      >
        <Testimonial
          quote="Thanks to this robust database solution, our organization has streamlined data management processes, leading to increased efficiency and accuracy in our operations."
          name="Juliette Lansoy"
          position="Test Manager, Enchanted Tools"
          imageSrc="/testimonials/juliette-lansoy.png"
        />
      </section>

      {/* plan details (xs-lg)*/}
      <section
        id="pricing-details"
        className="mt-20 sm:mt-36 lg:hidden"
        aria-labelledby="pricing-details"
      >
        <div className="mx-auto space-y-8 sm:max-w-md ">
          {plans.map((plan) => (
            <div key={plan.name}>
              <div className="rounded-xl bg-zinc-400/5 p-6 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800">
                <h2
                  id={plan.name}
                  className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
                >
                  {plan.name}
                </h2>
                <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400">
                  {isVariablePrice(plan.price)
                    ? `${plan.price.monthly} / per user`
                    : plan.price}
                </p>
              </div>
              <ul
                role="list"
                className="mt-10 space-y-10 text-sm leading-6 text-zinc-900 dark:text-zinc-50"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <h3 className="font-semibold">{section.name}</h3>
                    <ul
                      role="list"
                      className="mt-2 divide-y divide-zinc-200 dark:divide-zinc-800"
                    >
                      {section.features.map((feature) =>
                        feature.plans[plan.name] ? (
                          <li
                            key={feature.name}
                            className="flex gap-x-3 py-2.5"
                          >
                            <RiCheckLine
                              className="size-5 flex-none text-lime-600 dark:text-lime-400"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.plans[plan.name] === "string" ? (
                                <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                  ({feature.plans[plan.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* plan details (lg+) */}
      <section className="mx-auto mt-20">
        <div className="mt-20 sm:mt-28">
          <div className="relative">
            <div className="sticky top-0 z-20 h-28 w-full bg-white dark:bg-zinc-950" />
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead className="sticky top-28">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-zinc-100 bg-white pb-8 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                      Features
                    </div>
                  </th>
                  {plans.map((plan, planIdx) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="border-b border-zinc-100 bg-white pb-8 px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      <div
                        key={plan.name}
                        className="flex items-center justify-between"
                      >
                        <div className="text-zinc-900 dark:text-zinc-50 font-semibold leading-7">
                          {plan.name}
                        </div>
                        {planIdx === 0 ? (
                          <Button href={plan.buttonLink}>
                            {plan.buttonText}
                          </Button>
                        ) : planIdx === 1 ? (
                          <Button href={plan.buttonLink} color="lime">
                            {plan.buttonText}
                          </Button>
                        ) : (
                          <Button href={plan.buttonLink} color="white">
                            {plan.buttonText}
                          </Button>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cx(
                          sectionIdx === 0 ? "pt-14" : "pt-12",
                          "pt-14 border-b border-zinc-100 pb-4 text-base font-semibold leading-6 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50"
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="transition hover:bg-lime-50/30 dark:hover:bg-lime-800/5"
                      >
                        <th
                          scope="row"
                          className="border-b border-zinc-100 py-6 leading-6 dark:border-zinc-800"
                        >
                          <div className="text-sm font-bold text-zinc-900  dark:text-zinc-50">
                            {feature.name}
                          </div>
                          <p className="text-sm font-normal mt-2 text-zinc-600 dark:text-zinc-400">
                            <Balancer>{feature.tooltip}</Balancer>
                          </p>
                        </th>
                        {plans.map((plan) => (
                          <td
                            key={plan.name}
                            className="border-b border-zinc-100 px-6 lg:px-8 dark:border-zinc-800 text-center"
                          >
                            {Array.isArray(feature.plans[plan.name]) ? (
                              <div className="text-sm leading-6">
                                <div>{feature.plans[plan.name][0]}</div>
                                <div className="text-zinc-600 dark:text-zinc-400">
                                  {feature.plans[plan.name][1]}
                                </div>
                              </div>
                            ) : typeof feature.plans[plan.name] === "string" ? (
                              <div className="text-sm leading-6 text-zinc-900 dark:text-zinc-50">
                                {feature.plans[plan.name]}
                              </div>
                            ) : feature.plans[plan.name] === true ? (
                              <RiCheckLine className="h-5 w-5 text-lime-600 dark:text-lime-400 mx-auto" />
                            ) : (
                              <RiSubtractLine className="h-5 w-5 text-zinc-400 dark:text-zinc-600 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="pt-6 text-sm font-normal leading-6 text-zinc-900 dark:text-zinc-50"
                  >
                    <span className="sr-only">Link to activate plan</span>
                  </th>
                  {plans.map((plan, planIdx) => (
                    <td key={plan.name} className="px-6 pt-6 lg:px-8">
                      {planIdx === 0 ? (
                        <Button
                          href={plan.buttonLink}
                          className="w-full justify-between"
                        >
                          {plan.buttonText}
                          <ChevronRightIcon />
                        </Button>
                      ) : planIdx === 1 ? (
                        <Button
                          href={plan.buttonLink}
                          color="lime"
                          className="w-full justify-between"
                        >
                          {plan.buttonText}
                          <ChevronRightIcon />
                        </Button>
                      ) : (
                        <Button
                          href={plan.buttonLink}
                          color="white"
                          className="w-full justify-between"
                        >
                          {plan.buttonText}
                          <ChevronRightIcon />
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Faqs />
    </div>
  );
}
