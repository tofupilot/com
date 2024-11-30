import { ClockIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Button } from "../components/catalyst/button";
import {
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "../components/catalyst/fieldset";
import { Input } from "../components/catalyst/input";
import { Text, TextLink } from "../components/catalyst/text";
import { Textarea } from "../components/catalyst/textarea";

const features = [
  {
    name: "Get a custom demo. ",
    description:
      "Discover the value of TofuPilot for your enterprise and explore our custom plans.",
    icon: PhoneIcon,
  },
  {
    name: "Set up your Enterprise trial.",
    description:
      " See for yourself how Vercel Enterprise speeds up your workflow & impact.",
    icon: ClockIcon,
  },
];

export default function Page() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h1 className="inline-block bg-gradient-to-t from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-4xl dark:from-zinc-50 dark:to-zinc-300">
            Let's talk about custom pricing for your needs.
          </h1>
          <dl className="mt-6 grid mx-auto max-w-md text-base/7 text-zinc-600 lg:mx-0 lg:gap-y-10">
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
      <form action="#" method="POST" className="pb-24 pt-20 sm:pb-32 lg:py-28">
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
              <Field>
                <Label>How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={10}
                  defaultValue={`Hi TofuPilot,

I’m looking to discuss TofuPilot’s custom pricing for my organization.

Many thanks!`}
                />
              </Field>
            </FieldGroup>
            <Text>
              By clicking "Talk to TofuPilot", I acknowledge I have read and
              understand the <TextLink href="#">Privacy Policy</TextLink>.
            </Text>
            <Button type="submit" color="lime" className="mt-8">
              Talk to TofuPilot
            </Button>
          </Fieldset>
        </div>
      </form>
    </div>
  );
}
