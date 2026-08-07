import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Industrial Repair Services"
          description="From precision servo motors to heavy industrial transformers, our engineering teams deliver certified repair and maintenance solutions across every category of rotating and electrical equipment."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
