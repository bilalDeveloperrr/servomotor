import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { useCountUp } from "../../hooks/useCountUp";

const sectors = [
  "Manufacturing plants",
  "Automation industries",
  "Textile units",
  "CNC machining centers",
  "Steel plants",
  "Pharmaceutical industries",
  "Food processing facilities",
  "Heavy engineering sectors",
];

function YearsBadge() {
  const { ref, value } = useCountUp(20, { duration: 1400 });
  return (
    <span ref={ref}>{value}+</span>
  );
}

function About() {
  return (
    <section className="relative bg-white pb-24 pt-15 sm:pb-15 sm:pt-13 lg:pt-18">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="relative">
            <div className="relative aspect-[4/4.4] w-full max-w-md overflow-hidden rounded-2xl bg-navy-900">
              <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
              <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-primary-600/30 blur-[90px]" />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-10">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-400/30 bg-primary-500/10">
                  <Wrench className="h-12 w-12 text-primary-300" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-white">
                    <YearsBadge />
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-slate-400">
                    Years of Engineering Excellence
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-3 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-white">5000+</p>
                    <p className="text-xs text-slate-400">Repairs Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-white">1000+</p>
                    <p className="text-xs text-slate-400">Industrial Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-16px_rgba(15,23,42,0.25)] sm:-right-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <ShieldCheck className="h-6 w-6" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-900">ISO 9001 : 2015</p>
                <p className="text-xs text-slate-500">Certified Quality System</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              About ServoTech Industrial
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy-900 sm:text-4xl lg:text-[2.6rem]">
              Trusted Industrial Repair Specialists
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              We specialize in delivering high-quality industrial repair and maintenance services for
              manufacturing plants, automation industries, textile units, CNC machining centers, steel
              plants, pharmaceutical industries, food processing facilities, and heavy engineering sectors.
              Our team combines decades of technical expertise with modern diagnostic equipment to restore
              equipment performance while minimizing downtime and operational costs.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div key={sector} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary-600" strokeWidth={2.25} />
                  <span className="text-sm font-medium text-navy-800">{sector}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Button as={Link} to="/services" variant="dark">
                Explore Our Services
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
