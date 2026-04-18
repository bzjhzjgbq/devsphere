export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  size = "md",
  ...props
}) {
  const sizes = {
    sm: "h-10 px-3.5 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-sm",
  };

  const variants = {
    primary:
      "inline-flex items-center justify-center rounded-2xl bg-slate-950 font-medium text-white shadow-[0_1px_2px_rgba(15,23,42,0.08),0_10px_24px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:shadow-[0_0_0_4px_rgba(15,23,42,0.08)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-60",
    secondary:
      "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:shadow-[0_0_0_4px_rgba(148,163,184,0.12)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-60",
    ghost:
      "inline-flex items-center justify-center rounded-2xl font-medium text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:bg-slate-100 focus-visible:text-slate-900 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-60",
  };

  return (
    <button
      type={type}
      className={`${variants[variant]} ${sizes[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
