import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail, Clock, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks } from "../../data/nav";
import { services } from "../../data/services";
import { company } from "../../data/company";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `text-[14.5px] font-medium transition-colors ${isActive ? "text-primary-600" : "text-navy-700 hover:text-primary-600"}`;

  return (
    <>
      <div className="hidden border-b border-slate-200 bg-surface text-slate-600 lg:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-10 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={company.emailHref}
              className="flex items-center gap-1.5 transition-colors duration-200 hover:text-primary-600 hover:underline"
            >
              <Mail className="h-3.5 w-3.5 text-primary-600" strokeWidth={2.25} />
              {company.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary-600" strokeWidth={2.25} />
              {company.hours}
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-semibold text-navy-800">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            24/7 Emergency Breakdown Support
          </span>
        </div>
      </div>

      <header
        className={`relative z-50 w-full transition-all duration-300 ${
          scrolled ? "border-b border-slate-200 bg-white/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-md" : "bg-white"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={link.label === "Services" ? "relative" : ""}
                onMouseEnter={() => link.label === "Services" && setServicesOpen(true)}
                onMouseLeave={() => link.label === "Services" && setServicesOpen(false)}
              >
                {link.label === "Services" ? (
                  <>
                    <NavLink to={link.href} className={navLinkClass}>
                      <span className="flex items-center gap-1">
                        {link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                      </span>
                    </NavLink>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_20px_50px_-16px_rgba(15,23,42,0.25)]">
                            <div className="grid grid-cols-2 gap-1 p-3">
                              {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.slug}
                                    to={`/services/${service.slug}`}
                                    className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-primary-50"
                                  >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-600">
                                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                                    </span>
                                    <span className="text-sm font-semibold text-navy-800">{service.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                            <Link
                              to="/services"
                              className="flex items-center justify-between border-t border-slate-100 bg-surface px-5 py-3.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                            >
                              View All Services
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={link.href} end={link.href === "/"} className={navLinkClass}>
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button as={Link} to="/contact" variant="primary" size="md">
              Request Quote
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            >
              <ul className="flex max-h-[70vh] flex-col overflow-y-auto px-5 py-3">
                {navLinks.map((link) =>
                  link.label === "Services" ? (
                    <li key={link.href} className="border-b border-slate-100">
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-3.5 text-[15px] font-medium text-navy-800"
                      >
                        Services
                        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pb-3 pl-2">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  onClick={() => setMenuOpen(false)}
                                  className="rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                                >
                                  {service.title}
                                </Link>
                              ))}
                              <Link
                                to="/services"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-md px-3 py-2 text-sm font-semibold text-primary-600"
                              >
                                View All Services
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <NavLink
                        to={link.href}
                        end={link.href === "/"}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between border-b border-slate-100 py-3.5 text-[15px] font-medium text-navy-800"
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
              <div className="flex flex-col gap-3 px-5 pb-6 pt-2">
                <Button as={Link} to="/contact" variant="primary" onClick={() => setMenuOpen(false)}>
                  Request Quote
                </Button>
                <a
                  href={company.emailHref}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-primary-600 hover:underline"
                >
                  <Mail className="h-4 w-4 text-primary-600" />
                  {company.email}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;
