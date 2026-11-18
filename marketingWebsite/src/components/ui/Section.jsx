export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, text, center = false, light = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-ink/65"}`}>{text}</p>}
    </div>
  );
}
