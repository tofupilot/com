import { defaultKeywords } from "../metadata";

export const metadata = {
  title: "Blog",
  description:
    "Thoughts on the future of hardware testing, from the people and teams creating it.",
  keywords: [...defaultKeywords, "blog", "news", "press", "company updates"],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main role="main" className="">
      {children}
    </main>
  );
}
