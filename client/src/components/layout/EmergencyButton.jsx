import { PhoneCall } from "lucide-react";
import { company } from "../../data/company";

function EmergencyButton() {
  return (
    <a
      href={company.emergencyPhoneHref}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-red-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(220,38,38,0.6)] transition-transform hover:scale-105"
      aria-label="Call emergency hotline"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
      </span>
      <PhoneCall className="h-4 w-4" />
      <span className="hidden sm:inline">24/7 Emergency</span>
    </a>
  );
}

export default EmergencyButton;
