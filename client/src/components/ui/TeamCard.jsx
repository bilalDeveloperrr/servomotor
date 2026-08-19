import Reveal from "./Reveal";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function TeamCard({ member, delay = 0 }) {
  const { name, role, credential } = member;

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-xl border border-slate-200 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-[0_16px_36px_-16px_rgba(15,23,42,0.2)]">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white transition-colors duration-300 group-hover:bg-primary-600">
          {initials(name)}
        </span>
        <h3 className="mt-4 text-base font-bold text-navy-900">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary-600">{role}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">{credential}</p>
      </div>
    </Reveal>
  );
}

export default TeamCard;
