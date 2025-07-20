import testimoniImage from '../../assets/testimoni.png'; // Adjust path if needed

function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 text-lg mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What People Say
            <br />
            About Us.
          </h2>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="p-8 shadow-xl rounded-lg border">
            <div className="flex items-start space-x-4 mb-6">
              <img
                src={testimoniImage}
                alt="Testimonial profile"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew
                  next. Of believed or diverted no."
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike taylor</h4>
                  <p className="text-gray-600 text-sm">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
