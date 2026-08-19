import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { industries } from "../../data/industries";

function Industries() {
  return (
    <section id="industries" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Engineered Solutions Across Heavy Industry"
          description="Our repair and maintenance programs are trusted by facilities across a wide range of manufacturing and process industries."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {industries.map(({ icon: Icon, title }, index) => (
            <Reveal key={title} delay={(index % 6) * 0.05}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-[0_16px_36px_-16px_rgba(15,23,42,0.2)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-navy-800">{title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Industries;
