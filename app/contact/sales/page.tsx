"use client";

import { Select } from "@/app/components/catalyst/select";
import { ButtonSubmitForm } from "@/app/components/utils/button-submit-form";
import { useAction } from "@/app/lib/hooks/useAction";
import { siteConfig } from "@/app/siteConfig";
import { ClockIcon, PhoneIcon } from "@heroicons/react/16/solid";
import {
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "../../components/catalyst/fieldset";
import { Input } from "../../components/catalyst/input";
import { Text, TextLink } from "../../components/catalyst/text";
import { Textarea } from "../../components/catalyst/textarea";
import { handleContactSubmission } from "./_actions";

const features = [
  {
    name: "Get a custom demo.",
    description:
      "Discover the value of TofuPilot for your enterprise and explore our custom plans.",
    icon: PhoneIcon,
  },
  {
    name: "Set up your Enterprise trial.",
    description:
      "See for yourself how TofuPilot Enterprise speeds up your workflow & impact.",
    icon: ClockIcon,
  },
];

const defaultMessage = `Hi TofuPilot,

I'm looking to trial TofuPilot's enterprise product, learn about pricing, & discuss my organization's requirements with you. 

Many thanks!`;

export default function Page() {
  const { action, error } = useAction(handleContactSubmission);
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      {/* Header */}
      <div className="relative px-8 pt-24 lg:static lg:pl-0 lg:pr-14 lg:py-32">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h1 className="inline-block bg-gradient-to-t from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-4xl dark:from-zinc-50 dark:to-zinc-300">
            Talk to our Sales team.
          </h1>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-zinc-900 dark:text-zinc-100">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 size-5 text-lime-600"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Form */}
      <form action={action} className="pb-24 pt-20 sm:pb-32 lg:py-24">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg bg-zinc-900/40 p-8 lg:p-10 rounded-md">
          <Fieldset>
            <FieldGroup>
              <Field>
                <Label>Company email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                />
              </Field>
              <div className="hidden">
                <Field>
                  <Label>Your name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    placeholder="Juliette Smith"
                  />
                </Field>
                <Field>
                  <Label>Company size</Label>
                  <Select name="country">
                    <option>1-100</option>
                    <option>100-500</option>
                    <option>500-1000</option>
                    <option>1000+</option>
                  </Select>
                </Field>
              </div>
              <Field>
                <Label>How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your company needs"
                  rows={10}
                  // defaultValue={defaultMessage}
                />
              </Field>
              <ButtonSubmitForm color="lime" className="w-full">
                Talk to TofuPilot
              </ButtonSubmitForm>
              <Text>
                By clicking "Talk to TofuPilot", I acknowledge I have read and
                understand the{" "}
                <TextLink href={siteConfig.baseLinks.privacy}>
                  Privacy Policy
                </TextLink>
                .
              </Text>
            </FieldGroup>
          </Fieldset>
        </div>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
