import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import heroForLanding from "../../assets/servo_motor/servo_07.png";

function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden pb-44 pt-28 sm:min-h-[600px] sm:pb-32 sm:pt-32 lg:min-h-[650px] lg:pb-40">
      <img
        src={heroForLanding}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/45 to-navy-950/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/10" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-400/25 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              Industrial Engineering &amp; Repair Specialists
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              Precision Industrial Repair &amp; Engineering Solutions
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Expert repair, rewinding, maintenance, and emergency breakdown services for servo motors,
              industrial motors, spindle motors, transformers, and critical rotating equipment.
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button as={Link} to="/contact" variant="white" size="lg">
                Request a Service
              </Button>
              <Button as={Link} to="/contact" variant="outlineLight" size="lg" icon={false}>
                Contact Our Engineers
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

    </section>
  );
}

export default Hero;
