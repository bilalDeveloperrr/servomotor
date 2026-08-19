import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-[0_10px_24px_-8px_rgba(180,83,9,0.45)] focus-visible:outline-primary-600",
  dark:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_10px_24px_-8px_rgba(15,23,42,0.45)] focus-visible:outline-navy-900",
  outline:
    "border border-navy-900/15 text-navy-900 hover:border-navy-900/30 hover:bg-navy-900/[0.03] focus-visible:outline-navy-900",
  outlineLight:
    "border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white",
  ghost: "text-navy-900 hover:bg-navy-900/5 focus-visible:outline-navy-900",
  white:
    "border border-[#E5E7EB] bg-white text-[#0F4C81] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-8px_rgba(15,23,42,0.12)] hover:bg-[#F0F5FA] focus-visible:outline-[#0F4C81]",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

function Button({
  as: Component = "button",
  variant = "primary",
  size = "lg",
  icon = true,
  className = "",
  children,
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <Component className={classes} {...props}>
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />
      )}
    </Component>
  );
}

export default Button;
