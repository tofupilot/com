import { getAllCareers } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import CareersList from "./_components/CareersList";

export default async function Page() {
  const careers = await getAllCareers();

  return (
    <ContainerLanding
      title="Careers"
      description="Come build the future of manufacturing with us."
      wide
    >
      <div className="mt-8 flex flex-col">
        <CareersList careers={careers} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
