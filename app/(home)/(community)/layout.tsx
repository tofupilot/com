import {
  Navbar,
  NavbarItem,
  NavbarSection,
} from "@/app/components/catalyst/navbar";
import Cta from "@/app/components/Cta";
import { siteConfig } from "@/app/siteConfig";
import { NewspaperIcon, Squares2X2Icon } from "@heroicons/react/16/solid";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-64">
      <div className="sticky top-0 max-w-7xl mx-auto pt-20 bg-zinc-950 z-10 px-8">
        <Navbar className="border-b border-zinc-800 w-full">
          <NavbarSection>
            <NavbarItem href={siteConfig.baseLinks.templates} current>
              <Squares2X2Icon />
              Templates
            </NavbarItem>
            {/* <NavbarItem href={siteConfig.baseLinks.plugs}>
              <PuzzlePieceIcon />
              Plugs
            </NavbarItem>
            <NavbarItem href={siteConfig.baseLinks.guides}>
              <BookOpenIcon />
              Guides
            </NavbarItem> */}
            <NavbarItem href={siteConfig.baseLinks.blog}>
              <NewspaperIcon />
              Blog
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      </div>
      {children}
      <Cta />
    </div>
  );
}
