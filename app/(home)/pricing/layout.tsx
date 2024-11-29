export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mt-36 max-w-6xl flex flex-col overflow-hidden">
      {children}
    </main>
  );
}
