import { stats } from "../../data/content.js";

export default function Stats() {
  return (
    <section className="bg-brand py-16 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl font-extrabold sm:text-5xl">{s.value}</dd>
              <dt className="mt-1 text-sm text-white/75">{s.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-xs text-white/50">Placeholder figures. Replace with real numbers before launch.</p>
      </div>
    </section>
  );
}
