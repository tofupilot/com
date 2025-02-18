import { defaultKeywords } from "../metadata";

export const metadata = {
  title: "Careers",
  description:
    "Come build the future of manufacturing with us.",
  keywords: [...defaultKeywords, "careers", "jobs", "jobs openings"],
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
