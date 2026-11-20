export default function PageHeader({ title, text }) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-ink/70">{text}</p>}
      </div>
    </section>
  );
}
