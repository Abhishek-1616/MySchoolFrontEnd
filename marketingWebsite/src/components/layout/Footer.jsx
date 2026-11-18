import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, School } from "lucide-react";
import { brand, features, solutions } from "../../data/content.js";

const social = [["in", "LinkedIn"], ["X", "X"], ["f", "Facebook"], ["yt", "YouTube"]];
const quick = [["Home", "/"], ["About Us", "/about"], ["Pricing", "/#pricing"], ["Contact Us", "/contact"]];

export default function Footer() {
  const h = "mb-4 text-sm font-semibold text-white";
  const a = "block py-1 text-sm text-white/65 hover:text-white";
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-sun text-ink"><School size={18} /></span>
            {brand.name}
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/65">One platform for admissions, attendance, fees, exams and communication.</p>
          <div className="mt-5 flex gap-2">
            {social.map(([t, label]) => (
              <a key={label} href="#" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-xs font-bold hover:bg-white/10">{t}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className={h}>Quick links</h4>
          {quick.map(([l, to]) => (to.startsWith("/#") ? <a key={l} href={to} className={a}>{l}</a> : <Link key={l} to={to} className={a}>{l}</Link>))}
        </div>
        <div>
          <h4 className={h}>Features</h4>
          {features.slice(0, 5).map((f) => <a key={f.title} href="/#features" className={a}>{f.title}</a>)}
        </div>
        <div>
          <h4 className={h}>Solutions</h4>
          {solutions.map((s) => <a key={s.who} href="/#solutions" className={a}>{s.who}</a>)}
          <h4 className={`${h} mt-6`}>Contact</h4>
          <p className="flex items-center gap-2 py-1 text-sm text-white/65"><Mail size={14} />{brand.email}</p>
          <p className="flex items-center gap-2 py-1 text-sm text-white/65"><Phone size={14} />{brand.phone}</p>
          <p className="flex items-center gap-2 py-1 text-sm text-white/65"><MapPin size={14} />{brand.address}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex gap-5"><a href="#" className="hover:text-white">Privacy Policy</a><a href="#" className="hover:text-white">Terms &amp; Conditions</a></div>
        </div>
      </div>
    </footer>
  );
}
