import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import Container from "../ui/Container";
import { services } from "../../data/services";

const staticLabels = {
  about: "About Us",
  services: "Services",
  industries: "Industries",
  gallery: "Gallery",
  contact: "Contact",
};

function labelFor(segment) {
  const service = services.find((s) => s.slug === segment);
  if (service) return service.title;
  if (staticLabels[segment]) return staticLabels[segment];
  return segment
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => ({
    label: labelFor(segment),
    path: "/" + segments.slice(0, index + 1).join("/"),
    isLast: index === segments.length - 1,
  }));

  return (
    <div className="border-b border-slate-200 bg-surface">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 py-3 text-xs font-medium text-slate-500">
          <Link to="/" className="flex items-center gap-1 transition-colors hover:text-primary-600">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              {crumb.isLast ? (
                <span className="font-semibold text-navy-800" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.path} className="transition-colors hover:text-primary-600">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export default Breadcrumbs;
