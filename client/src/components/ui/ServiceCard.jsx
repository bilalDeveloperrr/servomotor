import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { slugToImageCategory, getImageAt } from "../../data/images";

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const categoryKey = slugToImageCategory[service.slug];
  const image = categoryKey ? getImageAt(categoryKey, 1) : null;

  return (
    <Reveal delay={(index % 4) * 0.08} className="h-full">
      <Link
        to={`/services/${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_20px_45px_-18px_rgba(15,23,42,0.22)]"
      >
        <div className="relative flex h-36 items-center justify-center overflow-hidden bg-navy-900">
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className={`absolute inset-0 bg-blueprint-dark ${image ? "opacity-20" : "opacity-40"}`} />
          {image && <div className="absolute inset-0 bg-navy-950/45" />}
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary-600/25 blur-2xl transition-all duration-300 group-hover:bg-primary-500/40" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-500/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-primary-300" strokeWidth={1.75} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>

          <ul className="mt-4 space-y-1.5">
            {service.features.slice(0, 2).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                {feature}
              </li>
            ))}
          </ul>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default ServiceCard;
