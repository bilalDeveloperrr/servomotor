import Reveal from "./Reveal";

function FeatureTile({ icon: Icon, title, description, variant = "light", delay = 0 }) {
  if (variant === "dark") {
    return (
      <Reveal delay={delay} className="h-full">
        <div className="group h-full bg-navy-900 p-6 transition-colors duration-300 hover:bg-navy-800">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <h3 className="mt-4 text-[15px] font-bold text-white">{title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{description}</p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_16px_36px_-16px_rgba(15,23,42,0.2)]">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <h3 className="mt-4 text-[15px] font-bold text-navy-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </Reveal>
  );
}

export default FeatureTile;
