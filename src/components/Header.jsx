import { ChevronDown } from 'lucide-react';

function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">Jadoo</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Destinations</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Hotels</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Flights</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Bookings</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Login</a>
          <button className="border border-gray-300 bg-transparent px-4 py-2 rounded">Sign up</button>
          <div className="flex items-center space-x-1">
            <span className="text-gray-700">EN</span>
            <ChevronDown className="h-4 w-4 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;