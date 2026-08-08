function BlueprintPanel({ icon: Icon, label, className = "h-48", iconClassName = "h-14 w-14" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden border border-slate-200 bg-gradient-to-br from-primary-50 to-surface-alt ${className}`}>
      <div className="absolute inset-0 bg-blueprint-light" />
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary-500/15 blur-2xl" />
      <Icon className={`relative text-primary-600 ${iconClassName}`} strokeWidth={1.5} />
      {label && (
        <span className="absolute bottom-3 left-3 rounded bg-white/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-800 shadow-sm">
          {label}
        </span>
      )}
    </div>
  );
}

export default BlueprintPanel;
