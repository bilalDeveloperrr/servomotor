import { motion } from "framer-motion";
import Container from "./Container";

function PageHero({ eyebrow, title, description, icon: Icon, image, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div
        className={`absolute inset-0 bg-blueprint-dark ${image ? "opacity-25" : "opacity-60"}`}
      />
      {image && <div className="absolute inset-0 bg-navy-950/80" />}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {Icon && (
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-500/10">
              <Icon className="h-8 w-8 text-primary-300" strokeWidth={1.75} />
            </span>
          )}

          {eyebrow && (
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary-400/25 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-300">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              {eyebrow}
            </div>
          )}

          <h1 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">{title}</h1>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {description}
            </p>
          )}

          {children}
        </motion.div>
      </Container>
    </section>
  );
}

export default PageHero;
