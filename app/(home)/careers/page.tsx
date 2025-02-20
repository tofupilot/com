import { getAllCareers } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import CareersList from "./_components/CareersList";
import ValuesList from "./_components/ValuesList";
import BenefitsList from "./_components/BenefitsList";

export default async function Page() {
  const careers = await getAllCareers();

  return (
    <ContainerLanding
      title="Careers"
      description="Come build the future of manufacturing with us."
      wide
    >
      <div className="pb-64 flex flex-col items-center justify-center">
        <ValuesList />
        <CareersList careers={careers} />
        <BenefitsList />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
