export default function NewsletterSubscribeCard() {
  return (
    <div className="py-8 sm:py-12 lg:py-16 mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-sm">Subscribe to our newsletter.</h2>
        <h2 className="text-xl font-semibold text-zinc-900">
          Test for Engineers
        </h2>
        <h3 className="max-w-2xl text-balance text-sm tracking-tight text-zinc-900">
          Read by 1,000+ hardware builders.
        </h3>
        <form className="mt-2 max-w-md">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-1 text-xs/6">
            We&apos;ll share your email with Mailchimp.
          </p>
        </form>
      </div>
    </div>
  );
}
