import FourthSection from "@/components/FourthSection";
import OpeningSection from "@/components/OpeningSection";
import SecondSection from "@/components/SecondSection";
import TestimonialCarousel from "@/components/Testimonials";
import ThirdSection from "@/components/ThirdSection";


export default function Home() {
  return (
    <>
      <OpeningSection />
      <SecondSection />
      <TestimonialCarousel />
      <ThirdSection />
      <FourthSection />
    </>
  );
}
