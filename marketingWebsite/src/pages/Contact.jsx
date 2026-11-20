import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "../components/ui/PageHeader.jsx";
import Section from "../components/ui/Section.jsx";
import { brand } from "../data/content.js";

const field = "mt-1 w-full rounded-lg border border-ink/20 px-4 py-3 text-sm focus:border-brand";

export default function Contact() {
  const [sent, setSent] = useState(false);
  // Marketing form only: no backend yet. Connect to an API or email service later.
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <PageHeader title="Book a free demo or contact sales" text="Tell us about your school and we will get back to you." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4 text-sm text-ink/75">
            <p className="flex items-center gap-3"><Mail size={18} className="text-brand" />{brand.email}</p>
            <p className="flex items-center gap-3"><Phone size={18} className="text-brand" />{brand.phone}</p>
            <p className="flex items-center gap-3"><MapPin size={18} className="text-brand" />{brand.address}</p>
          </div>

          <div className="lg:col-span-2">
            {sent ? (
              <p className="rounded-2xl bg-mist p-8 text-lg font-semibold">Thanks, we have received your request and will be in touch soon.</p>
            ) : (
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium">Your name<input required className={field} /></label>
                <label className="text-sm font-medium">Email<input type="email" required className={field} /></label>
                <label className="text-sm font-medium">School name<input className={field} /></label>
                <label className="text-sm font-medium">Number of students<input className={field} /></label>
                <label className="text-sm font-medium sm:col-span-2">Message<textarea rows={5} className={field} /></label>
                <button className="rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark sm:col-span-2 sm:justify-self-start">Send request</button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
