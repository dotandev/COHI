import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProgramsHero } from "./hero";
import { ProgramList } from "./list";
// import { ProgramMessage } from "./message";

export default function Home() {
  return (
    <main>
      <ProgramsHero />
      {/* <ProgramMessage /> */}
      <ProgramList />
      <BackgroundBeams />
    </main>
  );
}
