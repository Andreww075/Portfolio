import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recent-projects";
import Clients from "@/components/clients";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}
