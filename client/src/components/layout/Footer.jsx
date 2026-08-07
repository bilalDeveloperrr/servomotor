import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import { LinkedinIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "../ui/SocialIcons";
import { navLinks } from "../../data/nav";
import { services } from "../../data/services";
import { industries } from "../../data/industries";
import { company } from "../../data/company";

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{title}</h4>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A trusted industrial engineering partner delivering precision motor repair, rewinding, and
              maintenance services for over 20 years. Certified engineers, advanced diagnostics, and a
              commitment to minimal downtime for every client we serve.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 transition-colors hover:border-primary-500 hover:text-primary-400"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-slate-400 transition-colors hover:text-primary-400">
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="text-sm text-slate-400 transition-colors hover:text-primary-400"
              >
                {service.title}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a href={company.phoneHref} className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-primary-400">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
              {company.phone}
            </a>
            <a href={company.emailHref} className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-primary-400">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
              {company.email}
            </a>
            <span className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
              {company.address}
            </span>
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-300"
            >
              Request a Service Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-2 gap-y-1 border-t border-white/10 pt-6 text-xs text-slate-500">
          <span>Industries served:</span>
          {industries.map((industry, index) => (
            <span key={industry.title}>
              {industry.title}
              {index < industries.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 pb-24 pt-6 text-xs text-slate-500 sm:flex-row sm:pb-6">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-primary-400">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary-400">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-primary-400">ISO Certifications</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
