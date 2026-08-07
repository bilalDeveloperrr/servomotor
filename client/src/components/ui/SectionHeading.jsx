import Reveal from "./Reveal";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}) {
  const isCenter = align === "center";
  const eyebrowColor = theme === "dark" ? "text-primary-300" : "text-primary-700";
  const titleColor = theme === "dark" ? "text-white" : "text-navy-900";
  const descColor = theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <Reveal
      className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
            theme === "dark"
              ? "border-primary-400/30 bg-primary-500/10"
              : "border-primary-600/20 bg-primary-50"
          } ${eyebrowColor}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          {eyebrow}
        </div>
      )}
      <h2 className={`text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
