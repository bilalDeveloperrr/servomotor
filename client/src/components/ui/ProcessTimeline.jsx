import Reveal from "./Reveal";

function ProcessTimeline({ steps, labelPrefix = "STEP" }) {
  return (
    <div className="relative mt-16">
      <div className="absolute left-6 top-0 block h-full w-px bg-slate-300 lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:w-full" />

      <div className="grid grid-cols-1 gap-10 lg:grid-flow-col lg:auto-cols-fr lg:gap-6">
        {steps.map(({ step, icon: Icon, title, description }, index) => (
          <Reveal key={step ?? title} delay={index * 0.08} className="relative pl-16 lg:pl-0 lg:text-center">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-primary-600 shadow-[0_0_0_6px_#f5f7fa] lg:relative lg:left-1/2 lg:-translate-x-1/2">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div className="mt-0 lg:mt-6">
              {step && (
                <p className="font-display text-xs font-bold tracking-[0.14em] text-primary-600">
                  {labelPrefix ? `${labelPrefix} ${step}` : step}
                </p>
              )}
              <h3 className="mt-1 text-base font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default ProcessTimeline;
