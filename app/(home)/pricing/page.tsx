"use client";
import { Badge } from "@/app/components/Badge";
import { Button } from "@/app/components/Button";
import { Label } from "@/app/components/Label";
import { Switch } from "@/app/components/Switch";
import { ArrowAnimated } from "@/app/components/ui/ArrowAnimated";
import { Faqs } from "@/app/components/ui/Faqs";
import Testimonial from "@/app/components/ui/Testimonial";
import { cx } from "@/app/lib/utils";
import {
  RiCheckLine,
  RiCloudLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import Link from "next/link";
import React, { Fragment } from "react";
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
  capacity: string[];
  features: string[];
  isStarter: boolean;
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Pro",
    price: { monthly: "$49", annually: "$39" },
    description: "For small Pro and start-ups that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
      "Slack Connect",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For larger Pro that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
      "$0.1 per stored GB",
      "Single Sign-On (SSO)",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
];

interface Feature {
  name: string;
  plans: Record<string, boolean | string>;
  tooltip?: string;
}

interface Section {
  name: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    name: "Data Analytics",
    features: [
      {
        name: "Team Seats",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Starter: "1 seat included",
          Pro: {
            base: "1 seat included",
            then: "then $50 per seat",
          },
          Enterprise: "Custom",
        },
      },
      {
        name: "First-pass yield",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Starter: true, Pro: true, Enterprise: true },
      },
      {
        name: "Process capability",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Starter: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Test step analytics",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Starter: true,
          Pro: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    name: "Data Pipeline",
    features: [
      {
        name: "Runs",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Starter: "500 runs /month",
          Pro: {
            base: "1000 runs /month included",
            then: "then $10 per 1000 runs",
          },
          Enterprise: "Custom",
        },
      },
      {
        name: "Attachments",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Starter: "1GB per month",
          Pro: {
            base: "10 GB/month",
            then: "then $1 per 10GB",
          },
          Enterprise: "Custom",
        },
      },
      {
        name: "Stations",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: {
          Starter: false,
          Pro: {
            base: "3 stations",
            then: "then $20 per station",
          },
          Enterprise: "Custom",
        },
      },
    ],
  },

  {
    name: "Integrations",
    features: [
      {
        name: "Odoo",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Starter: false, Pro: "100$ / team", Enterprise: "Available" },
      },
      {
        name: "Custom integration",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Starter: false, Pro: false, Enterprise: "Available" },
      },
    ],
  },
  {
    name: "Security",
    features: [
      {
        name: "Secure cloud hosting",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Starter: true, Pro: true, Enterprise: true },
      },
      {
        name: "Self-hosting",
        tooltip: "Consectetur qui culpa ipsum in ea irure duis culpa.",
        plans: { Starter: false, Pro: false, Enterprise: "Available" },
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
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly");
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
        <Badge>Pricing</Badge>
        <h1 className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300">
          Find a plan to power your tests.
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
        <div className="flex items-center justify-center gap-2">
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-zinc-400"
          >
            Monthly
          </Label>
          <Switch
            id="switch"
            checked={billingFrequency === "annually"}
            onCheckedChange={() =>
              setBillingFrequency(
                billingFrequency === "monthly" ? "annually" : "monthly"
              )
            }
          />
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-zinc-400"
          >
            Yearly (-20%)
          </Label>
        </div>
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
                      <div className="w-full border-t border-indigo-600 dark:border-indigo-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-indigo-600 dark:bg-zinc-950 dark:text-indigo-400">
                        Most popular
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
                <h2 className="mt-6 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-center gap-x-3">
                  <span className="text-5xl font-semibold tabular-nums text-zinc-900 dark:text-zinc-50">
                    {isVariablePrice(plan.price)
                      ? billingFrequency === "monthly"
                        ? plan.price.monthly
                        : plan.price.annually
                      : plan.price}
                  </span>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    per user <br /> per month
                  </div>
                </div>
                <div className="mt-6 flex flex-col justify-between">
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    {plan.isStarter ? (
                      <Button variant="secondary" asChild className="group">
                        <Link href={plan.buttonLink}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild className="group">
                        <Link href={plan.buttonLink}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <ul
                  role="list"
                  className="mt-8 text-sm text-zinc-700 dark:text-zinc-400"
                >
                  {plan.capacity.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      {index === 0 && (
                        <RiUserLine
                          className="size-4 shrink-0 text-zinc-500"
                          aria-hidden="true"
                        />
                      )}
                      {index === 1 && (
                        <RiCloudLine
                          className="size-4 shrink-0 text-zinc-500"
                          aria-hidden="true"
                        />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="mt-4 text-sm text-zinc-700 dark:text-zinc-400"
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      <RiCheckLine
                        className="size-4 shrink-0 text-indigo-600 dark:text-indigo-400"
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
        <Testimonial />
      </section>

      {/* plan details (xs-lg)*/}
      <section
        id="pricing-details"
        className="mt-20 sm:mt-36"
        aria-labelledby="pricing-details"
      >
        <div className="mx-auto space-y-8 sm:max-w-md lg:hidden">
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
                    ? `${
                        billingFrequency === "monthly"
                          ? plan.price.monthly
                          : plan.price.annually
                      } / per user`
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
                              className="size-5 flex-none text-indigo-600 dark:text-indigo-400"
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
        <div className="mt-20 hidden sm:mt-28 lg:block">
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
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="border-b border-zinc-100 bg-white px-6 pb-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      <div
                        className={cx(
                          !plan.isStarter
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-zinc-900 dark:text-zinc-50",
                          "font-semibold leading-7"
                        )}
                      >
                        {plan.name}
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
                          sectionIdx === 0 ? "pt-14" : "pt-10",
                          "border-b border-zinc-100 pb-4 text-base font-semibold leading-6 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50"
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="transition hover:bg-indigo-50/30 dark:hover:bg-indigo-800/5"
                      >
                        <th
                          scope="row"
                          className="border-b border-zinc-100 py-6 leading-6 dark:border-zinc-800"
                        >
                          <div className="text-sm font-bold text-zinc-900  dark:text-zinc-50">
                            {feature.name}
                          </div>
                          <div className="text-sm font-normal mt-2 text-zinc-600 dark:text-zinc-400">
                            <Balancer>{feature.tooltip}</Balancer>
                          </div>
                        </th>
                        {plans.map((plan) => (
                          <td
                            key={plan.name}
                            className="border-b border-zinc-100 px-6 lg:px-8 dark:border-zinc-800"
                          >
                            {typeof feature.plans[plan.name] === "string" ? (
                              <div className="text-sm leading-6 text-zinc-900 dark:text-zinc-50">
                                {feature.plans[plan.name]}
                              </div>
                            ) : typeof feature.plans[plan.name] === "object" ? (
                              <div className="text-sm leading-6">
                                <div className=" text-zinc-900 dark:text-zinc-50">
                                  {feature.plans[plan.name].base}
                                </div>
                                <div className="text-zinc-600 dark:text-zinc-400 mt-1">
                                  then {feature.plans[plan.name].then}
                                </div>
                              </div>
                            ) : (
                              <>
                                {feature.plans[plan.name] === true ? (
                                  <RiCheckLine
                                    className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <RiSubtractLine
                                    className="h-5 w-5 text-zinc-400 dark:text-zinc-600"
                                    aria-hidden="true"
                                  />
                                )}
                              </>
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
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 pt-6 lg:px-8">
                      {plan.isStarter ? (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base text-indigo-600 hover:bg-transparent dark:bg-transparent dark:text-indigo-400 hover:dark:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
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
