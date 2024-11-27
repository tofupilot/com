import { Metadata } from "next";
import { NotFoundPage } from "./components/error/not-found-page";

export default function Page() {
  return <NotFoundPage href="/" />;
}

export const metadata: Metadata = {
  title: "Not Found | TofuPilot",
  description: "The requested page could not be found.",
};
