import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProcessTimeline from "../ui/ProcessTimeline";
import { processSteps } from "../../data/process";

function Process() {
  return (
    <section id="process" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A Structured Path to Reliable Repairs"
          description="A disciplined six-stage workflow ensures transparency, precision, and accountability at every stage of your equipment's repair."
        />

        <ProcessTimeline steps={processSteps} />
      </Container>
    </section>
  );
}

export default Process;
