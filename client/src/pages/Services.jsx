import { Cog } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import CTASection from "../components/sections/CTASection";
import { services } from "../data/services";
import { processSteps } from "../data/process";

function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore our full range of industrial repair services — servo motor repair, motor rewinding, spindle repair, coil rewinding, transformer repair, preventive maintenance, and 24/7 emergency breakdown support."
      />

      <PageHero
        icon={Cog}
        eyebrow="What We Do"
        title="Comprehensive Industrial Repair Services"
        description="From precision servo motors to heavy industrial transformers, our engineering teams deliver certified repair and maintenance solutions across every category of rotating and electrical equipment."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Work"
            description="Every service on this page follows the same disciplined, transparent repair workflow."
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Full Service Range"
            title="Select a Service to Learn More"
            description="Each service has a dedicated page covering our process, equipment handled, and industries served."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

export default Services;
