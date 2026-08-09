import { Target, Eye, Factory, Gauge as GaugeIcon, TestTube2, Wrench } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import FeatureTile from "../components/ui/FeatureTile";
import BlueprintPanel from "../components/ui/BlueprintPanel";
import TeamCard from "../components/ui/TeamCard";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import Stats from "../components/sections/Stats";
import CTASection from "../components/sections/CTASection";
import { coreValues } from "../data/coreValues";
import { companyHistory } from "../data/companyHistory";
import { team } from "../data/team";
import { certifications } from "../data/certifications";

const workshopImages = [
  { label: "Rewinding Bay", icon: Wrench },
  { label: "CNC Balancing Station", icon: GaugeIcon },
  { label: "Testing Laboratory", icon: TestTube2 },
  { label: "Assembly Floor", icon: Factory },
];

function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="20+ years of industrial motor repair expertise. Learn about Servomates Industrial's history, mission, engineering team, and ISO certifications."
      />

      <PageHero
        eyebrow="About Servomates Industrial"
        title="Two Decades of Precision Industrial Engineering"
        description="From a small motor rewinding workshop to a nationwide industrial repair partner — built on certified engineering, honest diagnostics, and a standard of workmanship that doesn't cut corners."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Company Overview
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy-900 sm:text-4xl">
                Trusted Industrial Repair Specialists
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                We specialize in delivering high-quality industrial repair and maintenance services for
                manufacturing plants, automation industries, textile units, CNC machining centers, steel
                plants, pharmaceutical industries, food processing facilities, and heavy engineering sectors.
                Our team combines decades of technical expertise with modern diagnostic equipment to restore
                equipment performance while minimizing downtime and operational costs.
              </p>
            </Reveal>

            <Reveal direction="left" className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-surface p-6">
                <Target className="h-7 w-7 text-primary-600" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-bold text-navy-900">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To keep industrial equipment running at rated performance through precise, honest, and
                  reliably fast repair engineering.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-surface p-6">
                <Eye className="h-7 w-7 text-primary-600" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-bold text-navy-900">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To be the most trusted industrial repair partner for manufacturing plants nationwide,
                  known for precision and integrity.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="Company History"
            description="Two decades of growth, built one precise repair at a time."
          />
          <ProcessTimeline steps={companyHistory} labelPrefix="" />
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Core Values"
            description="The principles that guide every repair, quotation, and client relationship."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <FeatureTile key={value.title} {...value} delay={(index % 3) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Facility"
            title="Workshop & Testing Infrastructure"
            description="Purpose-built bays for rewinding, precision balancing, and full-load testing."
          />
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {workshopImages.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <BlueprintPanel icon={item.icon} label={item.label} className="h-40" iconClassName="h-10 w-10" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our People"
            title="Engineering Leadership"
            description="The certified engineers and specialists who lead every repair program."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={(index % 3) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Accreditation"
            title="Certifications & Standards"
            description="Independently verified quality, safety, and environmental management systems."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <FeatureTile key={cert.title} {...cert} delay={(index % 4) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <CTASection />
    </>
  );
}

export default About;
