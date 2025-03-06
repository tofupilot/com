export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-900">
      {children}
    </div>
  );
}