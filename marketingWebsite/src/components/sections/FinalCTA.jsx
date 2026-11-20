import Button from "../ui/Button.jsx";

export default function FinalCTA() {
  return (
    <section id="cta" className="scroll-mt-20 px-5 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-ink px-6 py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-5xl">Ready to Transform Your School Management?</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">See how the platform fits your school in a short, no-obligation demo.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#" variant="accent">Book a Free Demo</Button>
          <Button href="/contact" variant="ghostLight">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
