import { Link } from "react-router-dom";
import { Mail, Clock } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import ContactInfoCard from "../ui/ContactInfoCard";
import { company } from "../../data/company";

const quickDetails = [
  { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  { icon: Clock, label: "Business Hours", value: company.hours },
];

function ContactPreview() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Get In Touch"
            title="Have a Repair or Maintenance Need?"
            description="Reach our engineering team for a repair quotation, scheduled maintenance plan, or immediate emergency breakdown assistance. We respond fast, every day of the year."
          />

          <Reveal direction="left" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {quickDetails.map((detail) => (
              <ContactInfoCard key={detail.label} {...detail} />
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Go to Contact Page
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export default ContactPreview;
