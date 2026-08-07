function BlueprintPanel({ icon: Icon, label, className = "h-48", iconClassName = "h-14 w-14" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-navy-900 ${className}`}>
      <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary-600/25 blur-2xl" />
      <Icon className={`relative text-primary-300 ${iconClassName}`} strokeWidth={1.5} />
      {label && (
        <span className="absolute bottom-3 left-3 rounded bg-black/40 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-200">
          {label}
        </span>
      )}
    </div>
  );
}

export default BlueprintPanel;
