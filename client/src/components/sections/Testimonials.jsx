import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="Trusted by Manufacturing Teams"
          description="Feedback from plant engineers and operations leaders who rely on our repair and maintenance programs."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name} testimonial={t} delay={(index % 2) * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
