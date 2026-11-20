import { School } from "lucide-react";
import { schools } from "../../data/content.js";

export default function Trusted() {
  return (
    <section className="border-b border-ink/10 py-12">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-sm text-ink/60">Trusted by schools to simplify everyday operations.</p>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {schools.map((s) => (
            <li key={s} className="flex items-center justify-center gap-2 text-sm font-semibold text-ink/45">
              <School size={16} /> {s}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-ink/35">Placeholder school names</p>
      </div>
    </section>
  );
}
