import { Headset } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import { faqs } from "../data/faq";

function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Servomates Industrial for a repair quotation, scheduled maintenance plan, or 24/7 emergency breakdown support. Email and office location."
      />

      <PageHero
        icon={Headset}
        eyebrow="Contact Us"
        title="Talk to Our Engineering Team"
        description="Whether it's a repair quotation, a maintenance contract, or an active breakdown, we're ready to help."
      />

      <ContactSection />

      <FAQSection items={faqs} />
    </>
  );
}

export default Contact;
