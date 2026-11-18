import Section, { SectionHeading } from "../ui/Section.jsx";
import { testimonials } from "../../data/content.js";

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading title="What school leaders say" text="Sample testimonials from fictional schools." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl bg-mist p-7">
            <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-white">{t.name[0]}</span>
              <span><span className="block text-sm font-semibold">{t.name}</span><span className="block text-sm text-ink/60">{t.role}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
