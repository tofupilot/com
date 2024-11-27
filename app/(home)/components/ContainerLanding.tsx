import Balancer from "react-wrap-balancer";

export function ContainerLanding({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main
      role="main"
      className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-zinc-50 dark:to-zinc-300">
          {title}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </div>
      {children}
    </main>
  );
}
