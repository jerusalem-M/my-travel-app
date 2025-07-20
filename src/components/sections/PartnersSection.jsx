function PartnersSection() {
  const partners = ["axon", "jetstar", "expedia", "qantas", "alitalia"];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-center items-center space-x-12 opacity-60 flex-wrap gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="text-2xl font-bold text-gray-400">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;