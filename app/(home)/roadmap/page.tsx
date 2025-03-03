import { getAllRoadmap } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import RoadmapList from "./_components/RoadmapList";
import CtaRoadmap from "./_components/CtaRoadmap";

export default async function Page() {
  const roadmaps = await getAllRoadmap();

  return (
    <ContainerLanding
      title="Roadmap"
      description="Here's what we're thinking about building next."
      wide
    >
      <div className="pb-64 flex flex-col items-center justify-center">
        <RoadmapList roadmaps={roadmaps} />
        <CtaRoadmap />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
