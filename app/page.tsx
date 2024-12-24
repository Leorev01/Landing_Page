import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import HowItWorks from "@/components/HowItWorks";
import OpeningSection from "@/components/OpeningSection";
import PricingSection from "@/components/PricingSection";
import Projects from "@/components/Projects";
import SecondSection from "@/components/SecondSection";
import TestimonialCarousel from "@/components/Testimonials";
import ThirdSection from "@/components/ThirdSection";


export default function Home() {
  return (
    <>
      <OpeningSection />
      <SecondSection />
      <Projects />
      <TestimonialCarousel />
      <HowItWorks />
      <PricingSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
}
