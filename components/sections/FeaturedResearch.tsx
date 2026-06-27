export default function FeaturedResearch() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Research
          </span>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Featured Research
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Independent analysis covering financial markets, regulation,
            compliance, and the Mauritian economy.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-8 lg:col-span-2">
            <span className="text-sm font-semibold text-blue-600">
              Latest Report
            </span>

            <h3 className="mt-4 text-3xl font-bold">
              Mauritius Banking Outlook 2026
            </h3>

            <p className="mt-4 text-slate-600">
              A comprehensive outlook covering the banking sector,
              macroeconomic trends, digital transformation and regulatory
              developments.
            </p>

            <button className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-blue-600 transition">
              Read Report
            </button>
          </div>

          <div className="space-y-6">
            {[
              "Capital Markets Outlook",
              "AML Trends Report",
              "Economic Review",
            ].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 p-6 hover:border-blue-500 transition"
              >
                <h4 className="font-semibold">{title}</h4>

                <p className="mt-2 text-sm text-slate-500">
                  Research Report
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}