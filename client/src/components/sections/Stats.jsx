import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/stats";

function StatItem({ value, suffix, label, isRatio, delay }) {
  const { ref, value: animated } = useCountUp(value, { duration: 1600 });

  return (
    <Reveal delay={delay} className="text-center">
      <p ref={ref} className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">
        {isRatio ? "24/7" : `${animated}${suffix}`}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-slate-500">{label}</p>
    </Reveal>
  );
}

function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br bg-white bg-white bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-blueprint-dark opacity-[0.15]" />
      <Container className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <StatItem key={stat.label} {...stat} delay={index * 0.08} />
        ))}
      </Container>
    </section>
  );
}

export default Stats;
