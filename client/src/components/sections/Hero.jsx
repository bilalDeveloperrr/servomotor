import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall, ShieldCheck, Gauge, BadgeCheck } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import MotorIllustration from "../ui/MotorIllustration";

const heroStats = [
  { icon: ShieldCheck, value: "20+", label: "Years Experience" },
  { icon: Gauge, value: "5000+", label: "Repairs Completed" },
  { icon: PhoneCall, value: "24/7", label: "Emergency Support" },
  { icon: BadgeCheck, value: "ISO", label: "Quality Standards" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-32 pt-16 sm:pt-20 lg:pb-40 lg:pt-24">
      <div className="absolute inset-0 bg-blueprint-dark opacity-60" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-400/25 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-300">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              Industrial Engineering &amp; Repair Specialists
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              Precision Industrial Motor Repair &amp; Engineering Solutions
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We provide expert repair, rewinding, preventive maintenance, and emergency breakdown support
              for industrial motors, servo motors, spindle motors, transformers, and rotating equipment. Our
              experienced engineers ensure maximum reliability, efficiency, and minimal production downtime.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Request Service
              </Button>
              <Button as={Link} to="/contact" variant="outlineLight" size="lg" icon={false}>
                Contact Engineers
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[420px]"
          >
            <MotorIllustration />

            <div className="absolute left-0 top-2 w-40 rounded-lg border border-white/10 bg-navy-900/80 p-3.5 shadow-2xl backdrop-blur-sm sm:left-[-2rem]">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Winding Efficiency</p>
              <p className="mt-1 text-xl font-bold text-white">98.4%</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-primary-500" />
              </div>
            </div>

            <div className="absolute bottom-4 right-0 w-44 rounded-lg border border-white/10 bg-navy-900/80 p-3.5 shadow-2xl backdrop-blur-sm sm:right-[-1.5rem]">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/15">
                  <BadgeCheck className="h-4 w-4 text-emerald-400" />
                </span>
                <p className="text-xs font-semibold text-white">Precision Tested &amp; Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* <Container className="absolute inset-x-0 -bottom-16 sm:-bottom-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] sm:grid-cols-4 sm:gap-0 sm:p-0 sm:divide-x sm:divide-slate-200"
        >
          {heroStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <Icon className="h-5 w-5" strokeWidth={2.1} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-xl font-bold text-navy-900">{value}</p>
                <p className="text-xs font-medium text-slate-500">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container> */}
    </section>
  );
}

export default Hero;
