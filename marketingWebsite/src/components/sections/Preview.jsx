// Static marketing illustrations only. Sample data, no functionality.
import Section, { SectionHeading } from "../ui/Section.jsx";

function Frame({ title, caption, children }) {
  return (
    <figure>
      <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-lg shadow-ink/5" aria-hidden="true">
        <p className="mb-4 text-sm font-semibold">{title}</p>
        {children}
      </div>
      <figcaption className="mt-3 text-sm text-ink/60">{caption}</figcaption>
    </figure>
  );
}

const att = Array.from({ length: 28 }, (_, i) => (i % 9 === 4 ? "a" : i % 13 === 6 ? "l" : "p"));
const cls = { p: "bg-brand/80", a: "bg-red-300", l: "bg-sun" };
const fees = [["Class 6", 88], ["Class 7", 74], ["Class 8", 91], ["Class 9", 67]];
const marks = [["Mathematics", "92"], ["Science", "88"], ["English", "81"], ["History", "76"]];

export default function Preview() {
  return (
    <Section>
      <SectionHeading center title="See the modules in action" text="A quick look at a few screens your team will use every day." />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <Frame title="Attendance" caption="Mark a whole class in seconds.">
          <div className="grid grid-cols-7 gap-1.5">{att.map((s, i) => <span key={i} className={`aspect-square rounded ${cls[s]}`} />)}</div>
        </Frame>
        <Frame title="Fee collection" caption="Track dues by class at a glance.">
          <div className="space-y-3">
            {fees.map(([c, v]) => (
              <div key={c}>
                <div className="mb-1 flex justify-between text-xs text-ink/60"><span>{c}</span><span>{v}%</span></div>
                <div className="h-2 rounded-full bg-mist"><div className="h-2 rounded-full bg-brand" style={{ width: `${v}%` }} /></div>
              </div>
            ))}
          </div>
        </Frame>
        <Frame title="Report card" caption="Publish results to parents instantly.">
          <ul className="divide-y divide-ink/10 text-sm">
            {marks.map(([s, m]) => <li key={s} className="flex justify-between py-2"><span className="text-ink/70">{s}</span><span className="font-semibold">{m}</span></li>)}
          </ul>
        </Frame>
      </div>
    </Section>
  );
}
