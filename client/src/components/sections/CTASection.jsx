import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { company } from "../../data/company";

function CTASection({
  title = "Facing Equipment Downtime? Let's Fix It.",
  description = "Talk to our engineering team for a repair quotation, scheduled maintenance plan, or immediate emergency breakdown assistance.",
  primaryLabel = "Request Service",
  primaryHref = "/contact",
  secondaryLabel = "Email Our Team",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br bg-white bg-white bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-blueprint-dark opacity-[0.15]" />
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-[1.15] text-black sm:text-4xl">{title}</h2>
          <p className="max-w-xl text-base leading-relaxed text-black sm:text-lg">{description}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-[15px] font-semibold  text-primary-700 border  border-black/30  transition-transform hover:scale-[1.02]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200  group-hover:translate-x-0.5" />
            </Link>
            <a
              href={company.emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-black/30 px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:bg-black/10"
            >
              <Mail className="h-4 w-4" />
              {secondaryLabel}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default CTASection;
