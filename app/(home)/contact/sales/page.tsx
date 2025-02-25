import ContactFormSupport from "../support/ContactFormSupport";

export default function Page() {
  return (
    <ContactFormSupport
      title="Talk to our Sales team"
      defaultMessage={`Hi TofuPilot,\n\nMy company's challenges are...\n\nI would like to discuss how TofuPilot could help us overcome these issues.\n\nMany thanks!`}
    />
  );
}
