import PageHeader from "../components/ui/PageHeader.jsx";
import Section from "../components/ui/Section.jsx";
import Stats from "../components/sections/Stats.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

const blocks = [
  ["Our vision", "Every school, big or small, should run smoothly on simple, reliable technology."],
  ["Our mission", "Give schools one platform that removes paperwork so teachers can teach and parents stay informed."],
  ["Our commitment to education technology", "We build with educators, keep student data safe, and improve the product with every school we work with."],
  ["Why choose our platform", "It is easy to learn, covers the whole school, and comes with people who help you get started."],
];

export default function About() {
  return (
    <>
      <PageHeader title="About us" text="We help schools spend less time on administration and more time on students." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-ink/10 p-7">
              <h2 className="text-xl font-bold">{t}</h2>
              <p className="mt-3 text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
