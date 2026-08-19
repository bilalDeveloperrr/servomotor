import { useState } from "react";

function ContactInfoCard({ icon: Icon, label, value, valueAr, href, urgent = false }) {
  const [showArabic, setShowArabic] = useState(false);
  const hasArabic = Boolean(valueAr);
  const displayValue = showArabic && hasArabic ? valueAr : value;

  const content = (
    <div
      className={`flex items-start gap-4 rounded-lg border p-4 transition-colors duration-200 ${
        urgent
          ? "border-red-200 bg-red-50 hover:border-red-300"
          : "border-slate-200 bg-white hover:border-primary-500"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
          urgent ? "bg-red-100 text-red-600" : "bg-primary-50 text-primary-600"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className={`text-xs font-semibold uppercase tracking-wider ${urgent ? "text-red-600" : "text-slate-500"}`}>
            {label}
          </p>
          {hasArabic && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowArabic((v) => !v);
              }}
              className="shrink-0 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 transition-colors duration-200 hover:border-primary-300 hover:text-primary-600"
            >
              {showArabic ? "EN" : "عربي"}
            </button>
          )}
        </div>
        <p
          dir={showArabic && hasArabic ? "rtl" : "ltr"}
          className={`mt-0.5 wrap-break-word text-sm font-bold text-navy-900 ${showArabic && hasArabic ? "text-right" : ""}`}
        >
          {displayValue}
        </p>
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
