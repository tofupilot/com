"use client";

import { useState } from "react";
import { Button } from "@/app/components/catalyst/button";
import { toast } from "sonner";
import posthog from "posthog-js";
import { Input } from "@/app/components/catalyst/input";
import { ErrorMessage } from "@/app/components/catalyst/fieldset";

export default function NewsletterSubscribeCard() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      posthog.identify(email, { email });
      posthog.capture("user signed up to newsletter", { email });
      toast.success("Welcome in, yay!");
      setEmail("");
    } catch (error) {
      setErrors({ email: "Failed to subscribe" });
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 sm:py-14 lg:py-18 mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base">Subscribe to our newsletter</h2>
        <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Test for Engineers
        </h2>
        <h3 className="max-w-2xl text-balance text-base tracking-tight text-zinc-600 dark:text-zinc-400">
          Read by 500+ hardware and test builders.
        </h3>
        <form className="mt-4 max-w-md" onSubmit={handleSubmit}>
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              invalid={!!errors.email}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <Button color="lime" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Subscribe"}
            </Button>
          </div>
        </form>
        <p className="mt-1 text-xs/6 text-zinc-600 dark:text-zinc-400">
          We&apos;ll share your email with Mailchimp.
        </p>
      </div>
    </div>
  );
}
