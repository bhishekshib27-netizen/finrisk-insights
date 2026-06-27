const stats = [
  {
    value: "50+",
    label: "Articles Published",
  },
  {
    value: "12",
    label: "Research Reports",
  },
  {
    value: "5K+",
    label: "Monthly Readers",
  },
  {
    value: "2026",
    label: "Founded",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-4xl font-bold text-slate-900">
              {stat.value}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}