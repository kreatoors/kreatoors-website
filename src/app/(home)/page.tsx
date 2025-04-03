import AudienceSection from "./components/AudienceSection";
import ComingSoonSection from "./components/ComingSoon";
import EGCSection from "./components/Egc";
import Hero from "./components/HeroSection";
import Stats from "./components/Stats";
import BrandSolutionsLanding from "./components/StrategicSolution";
import ValueStats from "./components/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStats />
      <BrandSolutionsLanding isPage={false} />
      <ComingSoonSection />
      <EGCSection />
      <Stats />
      <AudienceSection />
    </>
  );
}
