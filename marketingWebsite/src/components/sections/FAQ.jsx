import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Section, { SectionHeading } from "../ui/Section.jsx";
import { faqs } from "../../data/content.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <SectionHeading center title="Frequently asked questions" />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                {f.q}
                <Plus size={20} className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pb-5 text-ink/70">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
