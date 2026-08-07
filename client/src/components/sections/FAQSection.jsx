import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FAQAccordion from "../ui/FAQAccordion";

function FAQSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  description = "Answers to the questions we hear most often from plant engineers and facility managers.",
  className = "bg-surface",
  containerClassName = "max-w-4xl",
}) {
  return (
    <section id="faq" className={`py-24 sm:py-28 ${className}`}>
      <Container className={containerClassName}>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <FAQAccordion items={items} className="mt-12" />
      </Container>
    </section>
  );
}

export default FAQSection;
