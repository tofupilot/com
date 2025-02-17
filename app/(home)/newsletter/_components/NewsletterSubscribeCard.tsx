import { Button } from "@/app/components/catalyst/button";
import { Input } from "@/app/components/catalyst/input";

export default function NewsletterSubscribeCard() {
  return (
    <div className="py-8 sm:py-12 lg:py-16 mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base">Subscribe to our newsletter</h2>
        <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Test for Engineers
        </h2>
        <h3 className="max-w-2xl text-balance text-base tracking-tight text-zinc-600 dark:text-zinc-400">
          Read by 500+ hardware and test builders.
        </h3>
        <form className="mt-4 max-w-md">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-60"
            />
            <Button color="lime">Subscribe</Button>
          </div>
          <p className="mt-1 text-xs/6 text-zinc-600 darktext-zinc-400">
            We&apos;ll share your email with Mailchimp.
          </p>
        </form>
      </div>
    </div>
  );
}
