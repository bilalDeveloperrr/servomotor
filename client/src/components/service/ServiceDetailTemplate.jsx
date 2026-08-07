import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Seo from "../ui/Seo";
import PageHero from "../ui/PageHero";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FeatureTile from "../ui/FeatureTile";
import ProcessTimeline from "../ui/ProcessTimeline";
import BeforeAfterCard from "../ui/BeforeAfterCard";
import ContactForm from "../ui/ContactForm";
import FAQSection from "../sections/FAQSection";
import CTASection from "../sections/CTASection";
import { industries } from "../../data/industries";
import { getImageCategoryForSlug } from "../../data/images";

function ServiceDetailTemplate({ data }) {
  const servedIndustries = industries.filter((industry) => data.industriesSlugs.includes(industry.slug));
  const imageCategory = getImageCategoryForSlug(data.slug);
  const galleryItems = imageCategory
    ? imageCategory.all.map((image) => ({ image, title: image.alt, category: imageCategory.label }))
    : data.gallery;

  return (
    <>
      <Seo
        title={data.title}
        description={data.overviewParagraphs[0]}
      />

      <PageHero
        icon={data.icon}
        eyebrow="Our Services"
        title={data.title}
        description={data.tagline}
        image={imageCategory?.hero}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal direction="right">
              <SectionHeading eyebrow="Service Overview" title={`${data.title} — Done Right`} align="left" />
              <div className="mt-6 space-y-4">
                {data.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" className="rounded-2xl border border-slate-200 bg-surface p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">Equipment We Handle</h3>
              <ul className="mt-5 space-y-3">
                {data.equipment.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" strokeWidth={2.25} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Key Features"
            description={`What's included in every ${data.title.toLowerCase()} job.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, index) => (
              <FeatureTile key={feature.title} {...feature} delay={(index % 3) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Repair Process"
            title="Our Step-by-Step Approach"
            description={`How we take a ${data.title.toLowerCase()} job from inspection to delivery.`}
          />
          <ProcessTimeline steps={data.process} />
        </Container>
      </section>

      {servedIndustries.length > 0 && (
        <section className="bg-surface py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Industries Served"
              title="Where This Service Is Used Most"
              description="Sectors that rely on us most for this repair category."
            />
            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {servedIndustries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Reveal key={industry.slug}>
                    <Link
                      to="/industries"
                      className="group flex h-full flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_16px_36px_-16px_rgba(15,23,42,0.2)]"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="text-sm font-semibold text-navy-800">{industry.title}</span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Before & After"
            description={`Completed ${data.title.toLowerCase()} projects from our workshop.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <BeforeAfterCard key={item.title} item={item} delay={(index % 3) * 0.08} />
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <FAQSection
        items={data.faqs}
        eyebrow="FAQ"
        title={`${data.title} — Common Questions`}
        className="bg-surface"
      />

      <CTASection
        title={`Need ${data.title}?`}
        description="Send us your equipment details and our engineering team will respond with a diagnostic plan and quotation."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Request This Service"
            title="Get a Quotation"
            description={`Tell us about your ${data.title.toLowerCase()} requirement and we'll respond with next steps.`}
          />
          <div className="mt-12">
            <ContactForm defaultService={data.title} />
          </div>
        </Container>
      </section>
    </>
  );
}

export default ServiceDetailTemplate;
