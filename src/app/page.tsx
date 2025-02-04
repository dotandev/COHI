import Hero from "./omo/hero";
import { HomeHero } from "./components/home/hero";
import Features from "./omo/features";
import Institutions from "./omo/schools";
// import Footer from "./omo/footer";
import Events from "./omo/events";
import Collaboration from "./omo/colab";
import AnotherHero from "./heroy";
import CurvedAnimation from "./curve";
import HomeFeatures from "./feat";
// import WaveBackground from "./wave";


export default function Home() {
  return (
    <main>
      <CurvedAnimation />
      {/* <WaveBackground /> */}
      <AnotherHero />
      {/* <HomeHero /> */}
      <HomeFeatures />
      <Hero />
      <Features />
      <Collaboration />
      <Institutions />
      <Events />
    </main>
  );
}

