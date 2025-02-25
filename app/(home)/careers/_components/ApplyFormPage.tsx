"use client";

import { ButtonSubmitForm } from "@/app/components/ui/contact/button-submit-form";
import { siteConfig } from "@/app/siteConfig";
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
} from "../../../components/catalyst/fieldset";
import { Input } from "../../../components/catalyst/input";
import { Text, TextLink } from "../../../components/catalyst/text";
import { Textarea } from "../../../components/catalyst/textarea";
import { handleContactSubmission } from "../../contact/sales/actions";

interface FormData {
  name: string;
  email: string;
  coverLetter: string;
  website: string;
  companySize: string;
}

export default function ApplyForm() {
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
      // try {
      //   const response = await handleContactSubmission(data);

      //   if (!response.success) {
      //     console.log(
      //       response.error ||
      //         "An unknown error occurred. Please try again later."
      //     );
      //   } else {
      //     setFormSubmitted(true); // Hide form and show success panel
      //   }
      // } catch {
      //   console.log(
      //     "An unexpected error occurred. Please check your details and try again."
      //   );
      // }
    }
  };

  return (
    <div className="mt-10">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset>
            <FieldGroup>
              <Field>
                <Label>Name</Label>
                <Input
                  id="name"
                  {...register("name", {
                    required: "Please enter your name.",
                  })}
                  invalid={!!errors.name}
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </Field>
              <Field>
                <Label>Email</Label>
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
                  placeholder="Email"
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </Field>
              <Field>
                <Label>Cover letter</Label>
                <Textarea
                  id="coverLetter"
                  {...register("coverLetter", {
                    required: "Please provide a cover letter.",
                  })}
                  invalid={!!errors.coverLetter}
                  placeholder="Seriously, just write a couple of sentences about why you love us, and you'll be doing better than 90% of applications."
                  rows={5}
                />
                {errors.coverLetter && (
                  <ErrorMessage>{errors.coverLetter.message}</ErrorMessage>
                )}
              </Field>
              {showFields && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FieldGroup>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
                      <Field>
                        <Label>Lastly, where are you located?</Label>
                        <Input
                          id="location"
                          {...register("website", {
                            required: "Please enter the website.",
                          })}
                          invalid={!!errors.website}
                          type="url"
                          autoComplete="url"
                          placeholder="https://example.com"
                        />
                        {errors.website && (
                          <ErrorMessage>{errors.website.message}</ErrorMessage>
                        )}
                      </Field>
                      {/* <Field>
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
                          <option value="500-1000">500-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </Select>
                        {errors.companySize && (
                          <ErrorMessage>
                            {errors.companySize.message}
                          </ErrorMessage>
                        )}
                      </Field> */}
                    </div>
                  </FieldGroup>
                </motion.div>
              )}
              <ButtonSubmitForm color="lime" className="w-full">
                Submit
              </ButtonSubmitForm>
              <Text className="mt-4 text-center">
                <Balancer>
                  By clicking &quot;Submit&quot;, I acknowledge that
                  I have read and understand the{" "}
                  <TextLink href={siteConfig.baseLinks.privacy}>
                    Privacy Policy
                  </TextLink>
                  .
                </Balancer>
              </Text>
            </FieldGroup>
          </Fieldset>
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
  );
}
