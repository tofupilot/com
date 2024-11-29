"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const faqs = [
  {
    question: "How secure is TofuPilot?",
    answer:
      "All TofuPilot plans include secure cloud hosting, powered by AWS. Our team manages infrastructure with end-to-end encryption, role-based access, and daily backups to protect your test data.",
  },
  {
    question: "Can TofuPilot be self-hosted?",
    answer:
      "Yes, you can self-host TofuPilot. Check our self-hosting guide for details.",
  },
  {
    question: "What if the factory is offline?",
    answer:
      "TofuPilot can be deployed on a local network with VPN access for suppliers or factory computers. This setup allows local data collection with the option to upload logs later, preserving all timestamps.",
  },
  {
    question: "Does TofuPilot integrate with MES/ERP?",
    answer:
      "TofuPilot integrates with Odoo MES (available in Q1 2025), with more integrations planned for early 2025. Contact us for custom integration support.",
  },
  {
    question: "Can I export my data from TofuPilot?",
    answer:
      "Yes, you can export data to spreadsheets or request a full extract from our team.",
  },
  {
    question: "What support is provided?",
    answer:
      "Support levels vary by plan: Lab users get Discord support, Pro users get email support, and Enterprise users have a dedicated contact.",
  },
  {
    question: "Who is behind TofuPilot?",
    answer:
      "TofuPilot is developed by TofuPilot SA, a Swiss startup founded by robotics test engineers. Learn more on our About page.",
  },
  {
    question: "What's the product roadmap?",
    answer:
      "Our roadmap focuses on streamlining test development, enhancing analytics, and adding insights. Pro users can join update meetings.",
  },
  {
    question: "When am I billed?",
    answer:
      "Billing is monthly or annually, based on your plan. See account settings for details.",
  },
  {
    question: "What happens if I downgrade or don't pay?",
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
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
