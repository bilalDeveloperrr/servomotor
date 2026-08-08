import Reveal from "./Reveal";
import BlueprintPanel from "./BlueprintPanel";

function BeforeAfterVisual({ Icon, tag }) {
  if (tag === "Facility") {
    return <BlueprintPanel icon={Icon} />;
  }

  return (
    <div className="relative flex h-48 overflow-hidden">
      <div className="relative flex w-1/2 items-center justify-center bg-slate-100">
        <div className="absolute inset-0 bg-blueprint-light grayscale" />
        <Icon className="relative h-11 w-11 text-slate-400" strokeWidth={1.5} />
        <span className="absolute bottom-2.5 left-2.5 rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
          Before
        </span>
      </div>
      <div className="relative flex w-1/2 items-center justify-center bg-primary-50">
        <div className="absolute inset-0 bg-blueprint-light" />
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-500/20 blur-2xl" />
        <Icon className="relative h-11 w-11 text-primary-600" strokeWidth={1.75} />
        <span className="absolute bottom-2.5 right-2.5 rounded bg-primary-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          After
        </span>
      </div>
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200" />
    </div>
  );
}

function BeforeAfterPhoto({ image }) {
  return (
    <div className="relative h-48 overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

function BeforeAfterCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(15,23,42,0.22)]">
        {item.image ? <BeforeAfterPhoto image={item.image} /> : <BeforeAfterVisual Icon={item.icon} tag={item.tag} />}
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">{item.category}</span>
          <h3 className="mt-1.5 text-base font-bold text-navy-900">{item.title}</h3>
        </div>
      </div>
    </Reveal>
  );
}

export default BeforeAfterCard;
