import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureTile from "../ui/FeatureTile";
import { whyChooseUs } from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-28">
      <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-600/15 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineering Standards You Can Rely On"
          description="Every repair we deliver is backed by certified expertise, calibrated equipment, and a quality process built over two decades in industrial service."
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map(({ icon, title, description }, index) => (
            <FeatureTile
              key={title}
              icon={icon}
              title={title}
              description={description}
              variant="dark"
              delay={(index % 5) * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
