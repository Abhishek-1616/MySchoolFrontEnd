import { Check } from "lucide-react";
import Section, { SectionHeading } from "../ui/Section.jsx";
import { solutions } from "../../data/content.js";

export default function Solutions() {
  return (
    <Section id="solutions" className="bg-mist">
      <SectionHeading title="A better day for everyone in your school" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {solutions.map(({ icon: Icon, who, points }) => (
          <div key={who} className="rounded-2xl border border-ink/10 bg-white p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white"><Icon size={20} /></span>
              <h3 className="text-xl font-bold">{who}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-ink/75"><Check size={18} className="mt-0.5 shrink-0 text-brand" />{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
