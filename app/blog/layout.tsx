import Footer from "../_components/footer";
import { Navigation } from "../_components/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
