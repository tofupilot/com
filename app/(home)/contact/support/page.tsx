import ContactFormSupport from "./ContactFormSupport";

export default function Page() {
  return (
    <ContactFormSupport
      title="Email our support engineers"
      defaultMessage={`Hi TofuPilot Support,\n\nI'm experiencing an issue with...\n\nSteps to reproduce:\n1. \n2. \n3. \n\nExpected behavior:\n\nActual behavior:\n\nAdditional details:\n\nThanks for your help!`}
    />
  );
}
