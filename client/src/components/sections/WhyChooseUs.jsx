import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureTile from "../ui/FeatureTile";
import { whyChooseUs } from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineering Standards You Can Rely On"
          description="Every repair we deliver is backed by certified expertise, calibrated equipment, and a quality process built over two decades in industrial service."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map(({ icon, title, description }, index) => (
            <FeatureTile
              key={title}
              icon={icon}
              title={title}
              description={description}
              variant="light"
              delay={(index % 5) * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
