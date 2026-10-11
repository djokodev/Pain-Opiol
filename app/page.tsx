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
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileWhatsAppBar />
    </>
  );
}
