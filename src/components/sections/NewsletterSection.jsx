function NewsletterSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to get information, latest news and other
          <br />
          interesting offers about Jadoo
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <input 
            placeholder="Your email" 
            className="max-w-xs bg-white border border-gray-300 px-4 py-2 rounded" 
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;