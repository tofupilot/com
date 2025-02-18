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
      <div className="mt-16 pb-64 flex w-full items-center justify-center">
        <CareersList careers={careers} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
