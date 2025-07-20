function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gray-900 mb-4">Jadoo.</div>
            <p className="text-gray-600 mb-6">
              Book your trip in minute, get full
              <br />
              Control for much longer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Help/FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500">Press</a></li>
              <li><a href="#" className="hover:text-orange-500">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">More</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Airlinefees</a></li>
              <li><a href="#" className="hover:text-orange-500">Airline</a></li>
              <li><a href="#" className="hover:text-orange-500">Low fare tips</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">All rights reserved@jadoo.co</p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-900 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;