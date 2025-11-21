import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSend, FiMapPin, FiStar, FiDollarSign, FiWifi, FiCoffee, FiDroplet, FiMessageSquare } from 'react-icons/fi';
import { FaParking } from 'react-icons/fa';

const Hero = () => {
  const [message, setMessage] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const hotels = [
    {
      id: 1,
      name: 'Tirupati Grand',
      rating: 4.5,
      price: 3500,
      distance: '0.5 km from temple',
      amenities: ['Free WiFi', 'Restaurant', 'Pool', 'AC'],
      image: 'https://source.unsplash.com/random/300x200/?hotel,1'
    },
    {
      id: 2,
      name: 'Sri Venkateswara Guest House',
      rating: 4.2,
      price: 2200,
      distance: '1.2 km from temple',
      amenities: ['Free WiFi', 'AC', 'Parking'],
      image: 'https://source.unsplash.com/random/300x200/?hotel,2'
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setShowResults(true);
      setMessage('');
    }
  };

  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Welcome to</span>
                <span className="block text-indigo-600">TirupatiOne<span className="text-indigo-400">App</span></span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Your complete guide to Tirupati - Find the best hotels, top hospitals, and essential services with real-time assistance.
              </p>
              
              <div className="mt-8 max-w-lg">
                <form onSubmit={handleSendMessage} className="flex">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about hotels, hospitals, or services..."
                    className="flex-1 min-w-0 block w-full px-4 py-3 rounded-l-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FiSend className="h-5 w-5" />
                  </button>
                </form>
                <p className="mt-2 text-xs text-gray-500">
                  Try: "Best hotels near temple" or "24/7 hospitals"
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 p-6 overflow-y-auto">
        {showResults ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Hotels in Tirupati</h2>
            <div className="space-y-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img className="h-48 w-full object-cover md:w-48" src={hotel.image} alt={hotel.name} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                        <div className="ml-2 flex items-center text-yellow-400">
                          <FiStar className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-gray-600">{hotel.rating}</span>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <FiMapPin className="h-4 w-4 mr-1" />
                        {hotel.distance}
                      </div>
                      <div className="mt-2 flex items-center text-indigo-600 font-medium">
                        <FiDollarSign className="h-4 w-4" />
                        <span>₹{hotel.price}/night</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {amenity === 'Free WiFi' && <FiWifi className="mr-1 h-3 w-3" />}
                            {amenity === 'Restaurant' && <FiCoffee className="mr-1 h-3 w-3" />}
                            {amenity === 'Pool' && <FiDroplet className="mr-1 h-3 w-3" />}
                            {amenity === 'Parking' && <FaParking className="mr-1 h-3 w-3" />}
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Link to="/hotels" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          View details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center">
                <Link 
                  to="/hotels" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View All Hotels
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <FiMessageSquare className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Ask about hotels in Tirupati</h3>
            <p className="text-gray-500 max-w-md">
              Try asking questions like "best hotels near the temple" or "affordable places to stay"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
