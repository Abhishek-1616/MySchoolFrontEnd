import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-ink/70">The page you are looking for does not exist.</p>
      <Button href="/" className="mt-6">Back to home</Button>
    </section>
  );
}
