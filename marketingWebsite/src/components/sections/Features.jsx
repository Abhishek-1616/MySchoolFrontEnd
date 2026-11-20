import Section, { SectionHeading } from "../ui/Section.jsx";
import { features } from "../../data/content.js";

export default function Features() {
  return (
    <Section id="features">
      <SectionHeading title="Everything your school runs on, in one place" text="Twelve connected modules replace registers, spreadsheets and scattered apps." />
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group bg-white p-6 transition-colors hover:bg-mist">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white"><Icon size={20} /></span>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-ink/65">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
