import { Mail, MapPin, Clock } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ContactInfoCard from "../ui/ContactInfoCard";
import ContactForm from "../ui/ContactForm";
import { company } from "../../data/company";

const contactDetails = [
  { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  { icon: MapPin, label: "Office Address", value: company.address, valueAr: company.addressAr },
  { icon: Clock, label: "Business Hours", value: company.hours },
];

function ContactSection({
  eyebrow = "Get In Touch",
  title = "Request Expert Industrial Support",
  description = "Reach our engineering team for a repair quotation, scheduled maintenance plan, or immediate emergency breakdown assistance.",
  defaultService = "",
  className = "bg-white",
}) {
  return (
    <section id="contact" className={`py-24 sm:py-28 ${className}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal direction="right" className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-3">
              {contactDetails.map((detail) => (
                <ContactInfoCard key={detail.label} {...detail} />
              ))}
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200">
              <iframe
                title="Servomates Industrial office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[15%]"
              />
            </div>
          </Reveal>

          <Reveal direction="left">
            <ContactForm defaultService={defaultService} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
