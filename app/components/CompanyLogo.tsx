import Image from "next/image";

export default function CompanyLogo() {
  return (
    <div className="flex items-center">
      <Image
        alt=""
        className="h-8 w-auto"
        src="/icon.png"
        width={40}
        height={40}
      />
      <h1 className="ml-2.5 mt-0.5 text-2xl font-bold">TofuPilot</h1>
    </div>
  );
}
