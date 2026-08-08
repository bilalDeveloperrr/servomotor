import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SearchX, Home, Wrench } from "lucide-react";
import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist or has been moved." />

      <section className="relative overflow-hidden bg-surface py-28 sm:py-36">
        <div className="absolute inset-0 bg-blueprint-light" />
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary-500/10 blur-[120px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-xl flex-col items-center text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-primary-200 bg-primary-50">
              <SearchX className="h-8 w-8 text-primary-600" strokeWidth={1.75} />
            </span>

            <p className="mt-8 font-display text-7xl font-bold text-navy-900 sm:text-8xl">404</p>
            <h1 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">Page Not Found</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The page you're looking for may have been moved, renamed, or doesn't exist. Let's get you back on
              track.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button as={Link} to="/" variant="primary" size="lg" icon={false}>
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
              <Button as={Link} to="/services" variant="outline" size="lg" icon={false}>
                <Wrench className="h-4 w-4" />
                View Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default NotFound;
