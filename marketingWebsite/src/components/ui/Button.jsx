const variants = {
  primary: "bg-ink text-white hover:bg-brand-dark",
  accent: "bg-sun text-ink hover:brightness-95",
  outline: "border border-ink/20 text-ink hover:bg-mist",
  light: "bg-white text-ink hover:bg-mist",
  ghostLight: "border border-white/30 text-white hover:bg-white/10",
};

export default function Button({ as: Tag = "a", variant = "primary", className = "", ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
