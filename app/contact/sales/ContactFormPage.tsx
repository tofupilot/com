"use client";

import { Select } from "@/app/components/catalyst/select";
import { ButtonSubmitForm } from "@/app/components/utils/button-submit-form";
import { siteConfig } from "@/app/siteConfig";
import { ClockIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Balancer from "react-wrap-balancer";
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

interface FormData {
  email: string;
  name: string;
  website: string;
  companySize: string;
  message: string;
}

interface ContactFormProps {
  title: string;
  defaultMessage: string;
}

export default function ContactFormPage({
  title,
  defaultMessage,
}: ContactFormProps) {
  const [showFields, setShowFields] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!showFields) {
      setShowFields(true);
    } else {
      try {
        const response = await handleContactSubmission(data);

        if (!response.success) {
          console.log(
            response.error ||
              "An unknown error occurred. Please try again later."
          );
        } else {
          setFormSubmitted(true); // Hide form and show success panel
        }
      } catch (err) {
        console.log(
          "An unexpected error occurred. Please check your details and try again."
        );
      }
    }
  };

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      {/* Header */}
      <div className="relative px-8 pt-24 lg:static lg:pl-0 lg:pr-14 lg:py-32">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h1 className="inline-block bg-gradient-to-t from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-4xl dark:from-zinc-50 dark:to-zinc-300">
            {title}
          </h1>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-zinc-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-zinc-900 dark:text-zinc-100">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 size-5 text-lime-500 dark:text-lime-600"
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

      {/* Form or Success Panel */}
      <div className="pb-24 pt-20 sm:pb-32 lg:py-24">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg bg-zinc-100 dark:bg-zinc-900/40 p-8 lg:p-10 rounded-md">
              <Fieldset>
                <FieldGroup>
                  <Field>
                    <Label>Company email</Label>
                    <Input
                      id="email"
                      {...register("email", {
                        required: "Please provide your email address.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message:
                            "The email address provided is not valid. Please try again.",
                        },
                      })}
                      invalid={!!errors.email}
                      type="email"
                      autoComplete="email"
                      placeholder="e.g., you@example.com"
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                  </Field>
                  {showFields && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FieldGroup>
                        <Field>
                          <Label>Your name</Label>
                          <Input
                            id="name"
                            {...register("name", {
                              required: "Please enter your name.",
                            })}
                            invalid={!!errors.name}
                            type="text"
                            autoComplete="name"
                            placeholder="Jane Doe"
                          />
                          {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                          )}
                        </Field>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
                          <Field>
                            <Label>Company website</Label>
                            <Input
                              id="website"
                              {...register("website", {
                                required: "Please enter the website.",
                              })}
                              invalid={!!errors.website}
                              type="url"
                              autoComplete="url"
                              placeholder="https://example.com"
                            />
                            {errors.website && (
                              <ErrorMessage>
                                {errors.website.message}
                              </ErrorMessage>
                            )}
                          </Field>
                          <Field>
                            <Label>Company Size</Label>
                            <Select
                              {...register("companySize", {
                                required: "Please select the size.",
                              })}
                              invalid={!!errors.companySize}
                            >
                              <option value="">Select company size...</option>
                              <option value="1-100">1-100 employees</option>
                              <option value="100-500">100-500 employees</option>
                              <option value="500-1000">
                                500-1000 employees
                              </option>
                              <option value="1000+">1000+ employees</option>
                            </Select>
                            {errors.companySize && (
                              <ErrorMessage>
                                {errors.companySize.message}
                              </ErrorMessage>
                            )}
                          </Field>
                        </div>
                      </FieldGroup>
                    </motion.div>
                  )}
                  <Field>
                    <Label>How can we help you?</Label>
                    <Textarea
                      id="message"
                      {...register("message", {
                        required: "Please provide a message.",
                      })}
                      invalid={!!errors.message}
                      placeholder="Describe your needs or questions here..."
                      rows={10}
                      defaultValue={defaultMessage}
                    />
                    {errors.message && (
                      <ErrorMessage>{errors.message.message}</ErrorMessage>
                    )}
                  </Field>
                  <ButtonSubmitForm color="lime" className="w-full">
                    Talk to TofuPilot
                  </ButtonSubmitForm>
                  <Text className="mt-4 text-center">
                    <Balancer>
                      By clicking &quot;Talk to TofuPilot&quot;, I acknowledge
                      that I have read and understand the{" "}
                      <TextLink href={siteConfig.baseLinks.privacy}>
                        Privacy Policy
                      </TextLink>
                      .
                    </Balancer>
                  </Text>
                </FieldGroup>
              </Fieldset>
            </div>
          </form>
        ) : (
          <div className="pb-24 pt-20 sm:pb-32 lg:py-24 flex flex-col items-center justify-center p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-md">
            <h2 className="text-3xl font-semibold text-lime-500 dark:text-lime-600">
              Thank you!
            </h2>
            <p className="mt-4 text-center text-base text-zinc-600 dark:text-zinc-400">
              <Balancer>
                Your message has been sent successfully. We will get back to you
                soon!
              </Balancer>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
