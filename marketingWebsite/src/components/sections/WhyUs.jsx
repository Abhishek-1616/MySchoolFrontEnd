import Section, { SectionHeading } from "../ui/Section.jsx";
import { whyUs } from "../../data/content.js";

export default function WhyUs() {
  return (
    <Section className="bg-ink">
      <SectionHeading light title="Why schools choose us" text="Built around the daily work of principals, teachers, office staff and parents." />
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun text-ink"><Icon size={20} /></span>
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/65">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
