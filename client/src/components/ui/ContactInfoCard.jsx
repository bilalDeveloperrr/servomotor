function ContactInfoCard({ icon: Icon, label, value, href, urgent = false }) {
  const content = (
    <div
      className={`flex items-start gap-4 rounded-lg border p-4 transition-colors duration-200 ${
        urgent
          ? "border-red-200 bg-red-50 hover:border-red-300"
          : "border-slate-200 bg-white hover:border-primary-200"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
          urgent ? "bg-red-100 text-red-600" : "bg-primary-50 text-primary-600"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className={`text-xs font-semibold uppercase tracking-wider ${urgent ? "text-red-600" : "text-slate-500"}`}>
          {label}
        </p>
        <p className="mt-0.5 wrap-break-word text-sm font-bold text-navy-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

export default ContactInfoCard;
