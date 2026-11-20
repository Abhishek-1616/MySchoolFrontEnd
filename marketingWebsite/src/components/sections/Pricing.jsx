import { Check } from "lucide-react";
import Section, { SectionHeading } from "../ui/Section.jsx";
import Button from "../ui/Button.jsx";
import { plans } from "../../data/content.js";

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-mist">
      <SectionHeading center title="Simple pricing that grows with your school" text="Placeholder pricing. Every plan starts with a free demo." />
      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`flex flex-col rounded-2xl p-8 ${p.popular ? "bg-ink text-white ring-2 ring-sun" : "border border-ink/10 bg-white"}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{p.name}</h3>
              {p.popular && <span className="rounded-full bg-sun px-3 py-1 text-xs font-semibold text-ink">Most popular</span>}
            </div>
            <p className="mt-5 font-display text-4xl font-extrabold">{p.price}</p>
            <p className={`mt-1 text-sm ${p.popular ? "text-white/65" : "text-ink/60"}`}>{p.note}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm"><Check size={18} className={`shrink-0 ${p.popular ? "text-sun" : "text-brand"}`} />{f}</li>
              ))}
            </ul>
            <Button href="/#cta" variant={p.popular ? "accent" : "outline"} className="mt-8">{p.cta}</Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
