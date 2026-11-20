import Section, { SectionHeading } from "../ui/Section.jsx";
import { steps } from "../../data/content.js";

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading center title="Get started in four steps" text="From first demo to your first day live, we handle the heavy lifting." />
      <ol className="mt-14 grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand font-display font-bold text-white">{i + 1}</span>
            {i < steps.length - 1 && <span className="absolute left-12 right-0 top-5 hidden h-px bg-ink/15 md:block" />}
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-1 text-sm text-ink/65">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
