import { BackgroundBeams } from "@/components/ui/background-beams";
import { GalleryHero } from "./hero";

export default function Home() {
  return (
    <main>
      <GalleryHero /> 
      {/* <GalleryList />  */}
      <BackgroundBeams />
    </main>
  );
}