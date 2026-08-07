import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { company } from "../../data/company";

function CTASection({
  title = "Facing Equipment Downtime? Let's Fix It.",
  description = "Talk to our engineering team for a repair quotation, scheduled maintenance plan, or immediate emergency breakdown assistance.",
  primaryLabel = "Request Service",
  primaryHref = "/contact",
  secondaryLabel = "Call Emergency Line",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 py-20 sm:py-24">
      <div className="absolute inset-0 bg-blueprint-dark opacity-[0.15]" />
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl">{title}</h2>
          <p className="max-w-xl text-base leading-relaxed text-primary-50 sm:text-lg">{description}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-[15px] font-semibold text-primary-700 shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35)] transition-transform hover:scale-[1.02]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={company.emergencyPhoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              {secondaryLabel}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default CTASection;
