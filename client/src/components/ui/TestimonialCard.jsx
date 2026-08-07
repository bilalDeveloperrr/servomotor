import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function TestimonialCard({ testimonial, delay = 0 }) {
  const { name, role, company, quote, rating } = testimonial;

  return (
    <Reveal delay={delay}>
      <div className="relative h-full rounded-xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-18px_rgba(15,23,42,0.18)]">
        <Quote className="h-8 w-8 text-primary-100" fill="currentColor" strokeWidth={0} />
        <div className="mt-3 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-amber-400" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700">&ldquo;{quote}&rdquo;</p>

        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
            {initials(name)}
          </span>
          <div>
            <p className="text-sm font-bold text-navy-900">{name}</p>
            <p className="text-xs text-slate-500">{role}, {company}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default TestimonialCard;
