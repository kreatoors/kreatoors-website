import Benefits from "./components/BenefitsSection";
import CTASection1 from "./components/CTASection1";
import EmployeeStories from "./components/EmployeeStories";
import Hero from "./components/Hero";
import SignUpSection from "./components/Signup";
import WhyEmployeeAdvocacy from "./components/WhyEmployeeAdvocacy";

export default function Platform() {
  return (
    <>
      <Hero />
      <WhyEmployeeAdvocacy />
      <CTASection1 />
      <EmployeeStories />
      <Benefits />
      <SignUpSection />
    </>
  );
}
