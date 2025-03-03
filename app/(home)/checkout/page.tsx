"use client";

import Script from "next/script";

/* Page handling redirection to checkout of Paddle transactions */
export default function Page() {
  return (
    <div className="h-96">
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        onLoad={() => {
          const isSandbox =
            process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
            process.env.NEXT_PUBLIC_VERCEL_ENV === "development";

          if (isSandbox) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Paddle.Environment.set("sandbox");
          }

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Paddle.Initialize({
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
            // logging
            eventCallback: function (data: unknown) {
              console.log(data);
            },
          });
        }}
      />
    </div>
  );
}
