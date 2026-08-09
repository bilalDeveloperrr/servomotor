import Seo from "../components/ui/Seo";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Industries from "../components/sections/Industries";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import ContactPreview from "../components/sections/ContactPreview";

function Home() {
  return (
    <>
      <Seo
        fullTitle="Servomates | Industrial Motor Repair & Engineering Services"
        description="Servomates Industrial provides precision industrial motor repair, rewinding, preventive maintenance and 24/7 emergency breakdown services for servo motors, spindle motors, transformers and rotating equipment."
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Stats />
      <Testimonials />
      <CTASection />
      <ContactPreview />
    </>
  );
}

export default Home;
