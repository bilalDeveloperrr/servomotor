import Reveal from "./Reveal";

function IndustryDetailCard({ industry, delay = 0 }) {
  const { icon: Icon, title, description } = industry;

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-[0_16px_36px_-16px_rgba(15,23,42,0.2)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </Reveal>
  );
}

export default IndustryDetailCard;
