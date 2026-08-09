import { Factory } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import IndustryDetailCard from "../components/ui/IndustryDetailCard";
import CTASection from "../components/sections/CTASection";
import { industries } from "../data/industries";

function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Servomates Industrial supports manufacturing, automation, steel, textile, paper, pharmaceutical, food processing, power, mining, cement, packaging, and automotive sectors with repair services that reduce downtime."
      />

      <PageHero
        icon={Factory}
        eyebrow="Industries We Serve"
        title="Engineered Solutions Across Heavy Industry"
        description="Every sector has different failure modes, duty cycles, and downtime costs. Here's how our repair and maintenance programs are built around each one."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Reducing Downtime, Sector by Sector"
            description="Select an industry below to see how our repair services apply to its equipment and operating conditions."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryDetailCard key={industry.slug} industry={industry} delay={(index % 3) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Don't See Your Industry Listed?"
        description="Our engineering teams work across nearly every sector that runs industrial motors and rotating equipment. Get in touch to discuss your specific needs."
      />
    </>
  );
}

export default Industries;
