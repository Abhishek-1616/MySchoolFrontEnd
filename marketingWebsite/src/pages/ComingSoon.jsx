import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function ComingSoon() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">This page is coming next</h1>
      <p className="mt-3 text-ink/70">We are building the remaining pages in the next phase.</p>
      <Button as={Link} to="/" className="mt-6">Back to home</Button>
    </section>
  );
}
