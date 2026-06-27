export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <span className="mb-6 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        Mauritius' Financial Intelligence Platform
      </span>

      <h1 className="max-w-5xl text-6xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
        Financial Intelligence
        <br />
        for Mauritius.
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-600">
        Delivering trusted research, market intelligence, regulatory updates,
        and financial education for professionals, students, and institutions.
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          Explore Research
        </button>

        <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100">
          Subscribe
        </button>
      </div>
    </section>
  );
}