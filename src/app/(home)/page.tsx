import AudienceSection from "./components/AudienceSection";
import ComingSoonSection from "./components/ComingSoon";
import EGCSection from "./components/Egc";
import Hero from "./components/HeroSection";
import Stats from "./components/Stats";
import BrandSolutionsLanding from "./components/StrategicSolution";
import ValueStats from "./components/Values";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Kreatoors AI",
  description: "Kreatoors AI - AI-powered Employee Content Creation",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ComingSoonSection />
      <BrandSolutionsLanding isPage={false} />
       <ValueStats />
      <EGCSection />
      <Stats />
      <AudienceSection />
    </>
  );
}
