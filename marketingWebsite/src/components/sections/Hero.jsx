import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Button from "../ui/Button.jsx";
import DashboardMock from "../ui/DashboardMock.jsx";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-6xl">Smart School Management. Simplified for Everyone.</h1>
          <p className="mt-6 max-w-lg text-lg text-ink/70">
            Manage admissions, students, teachers, attendance, fees, examinations, and communication — all from one powerful platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#cta">Get Started <ArrowRight size={16} /></Button>
            <Button href="/#cta" variant="outline"><CalendarCheck size={16} /> Book a Free Demo</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}
