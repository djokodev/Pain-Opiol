import {
  CoverageSection,
  CTASection,
  FAQSection,
  Footer,
  HeroSection,
  HowItWorksSection,
  MobileWhatsAppBar,
  Navbar,
  PricingSection,
  ProblemSection,
  SocialProofSection,
} from "./components/LandingPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <PricingSection />
        <CoverageSection />
        <SocialProofSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <MobileWhatsAppBar />
    </>
  );
}
