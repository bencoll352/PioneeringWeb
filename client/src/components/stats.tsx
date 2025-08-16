export default function Stats() {
  const stats = [
    { value: "15+", label: "Years Builders Merchant Focus" },
    { value: "2,500+", label: "Industry Placements Made" },
    { value: "150+", label: "Merchant Partners" },
    { value: "96%", label: "First-Time Success Rate" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold brand-orange mb-2">{stat.value}</div>
              <p className="text-brand-gray font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
