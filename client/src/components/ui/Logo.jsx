import { Link } from "react-router-dom";

function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="5" />
          <circle cx="32" cy="32" r="6.5" fill="white" />
          <path
            d="M32 6V15M32 49V58M58 32H49M15 32H6M50.5 13.5L44.2 19.8M19.8 44.2L13.5 50.5M50.5 50.5L44.2 44.2M19.8 19.8L13.5 13.5"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          SERVOTECH
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-slate-300" : "text-slate-500"}`}>
          Industrial
        </span>
      </span>
    </Link>
  );
}

export default Logo;
