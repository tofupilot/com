"use client";

import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const faqs = [
  {
    question: "Is it safe to connect my factory stations to TofuPilot?",
    answer:
      "Yes, connecting your test stations to TofuPilot is safe. With our Pro plan, you can generate a secure API key for each station, with permissions restricted to specific actions such as uploading test results on specific test procedures.",
  },
  {
    question:
      "What if I can't connect my stations in the factory or at my suppliers?",
    answer:
      "If your stations can't connect publicly, you can either only allow access to TofuPilot URLs or collect test data on your side and upload it later. The original timestamps are preserved. For more details, check our",
    link: {
      text: "offline upload guide",
      url: siteConfig.baseLinks.offlineupload,
    },
  },
  {
    question:
      "What if my entire test infrastructure is managed locally and offline?",
    answer:
      "We recommend our Enterprise plan for self-hosting TofuPilot within your infrastructure, keeping everything offline while maintaining all features. For more details, check our",
    link: {
      text: "self-hosting guide",
      url: siteConfig.baseLinks.selfhosting,
    },
  },
  {
    question: "How secure is TofuPilot Cloud?",
    answer:
      "All TofuPilot plans include secure cloud hosting managed by our team, and powered by AWS. Our team manages infrastructure with end-to-end communication encryption, strict internal role-based access, daily backups and regular audits to protect your sensitive test data.",
  },
  {
    question: "Can TofuPilot be self-hosted?",
    answer: "Yes, you can self-host TofuPilot. For more details, check our",
    link: {
      text: "self-hosting guide",
      url: siteConfig.baseLinks.selfhosting,
    },
  },
  {
    question: "Does TofuPilot integrate with my MES or ERP?",
    answer:
      "TofuPilot integrates with Odoo (available in Q1 2025), with more integrations planned. For custom integration support",
    link: {
      text: "contact us",
      url: "mailto:support@tofupilot.com",
    },
  },
  {
    question: "Can I export my data from TofuPilot?",
    answer:
      "Yes, you can export data using our Python client or REST API or request a full extract from our team.",
  },
  {
    question: "What support is provided?",
    answer:
      "Support levels differ by plan: Lab users can access support through Discord, Pro users via email, and Enterprise users with a dedicated contact in our team.",
  },
  {
    question: "Who is behind TofuPilot?",
    answer:
      "TofuPilot is developed by TofuPilot SA, an award-winning Swiss startup founded by robotics test engineers. Learn more on our",
    link: {
      text: "About page",
      url: siteConfig.baseLinks.about,
    },
  },
  {
    question: "What's the product roadmap?",
    answer:
      "Our roadmap is dedicated to streamlining your test development processes and improving analytics and insights. Pro users are invited to join roadmap update sessions with our team.",
  },
  {
    question: "When am I billed?",
    answer:
      "Pro plans are billed monthly based on selected options and last month's usage. Enterprise plans offer monthly or annual billing to suit your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments from all major card providers for Pro plans, processed securely by our partner Paddle. Enterprise clients can request custom billing options.",
  },
  {
    question: "What happens if I downgrade or my payment can't be processed?",
    answer:
      "Test stations continue uploading, but you lose dashboard visibility until payment resumes.",
  },
];

export function Faqs() {
  return (
    <section className="mt-20 sm:mt-36" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="inline-block scroll-my-24 bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 pr-2 text-2xl font-bold tracking-tighter text-transparent lg:text-3xl dark:from-zinc-50 dark:to-zinc-300"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Can&rsquo;t find the answer you&rsquo;re looking for? Don&rsquo;t
            hesitate to get in touch with our{" "}
            <a
              href="mailto:support@tofupilot.com"
              className="font-medium text-lime-600 hover:text-lime-300 dark:text-lime-400"
            >
              team
            </a>
            .
          </p>
        </div>
        <div className="col-span-full mt-6 lg:col-span-7 lg:mt-0">
          <Accordion type="multiple" className="mx-auto">
            {faqs.map((item) => (
              <AccordionItem
                value={item.question}
                key={item.question}
                className="py-3 first:pb-3 first:pt-0"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                  <span>{item.answer}</span>
                  {item.link && (
                    <>
                      {" "}
                      <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.link.url}
                        className="font-medium text-lime-600 hover:text-lime-300 dark:text-lime-400"
                      >
                        {item.link.text}
                      </Link>
                      {"."}
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
