import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHome, FiHeart, FiMapPin, FiShoppingBag, FiTruck } from 'react-icons/fi';

const services = [
  { 
    id: 1, 
    name: 'Hotels', 
    icon: <FiHome className="w-6 h-6 text-indigo-600" />,
    description: 'Find the best hotels and accommodations in Tirupati for a comfortable stay.'
  },
  { 
    id: 2, 
    name: 'Hospitals', 
    icon: <FiHeart className="w-6 h-6 text-indigo-600" />,
    description: 'Locate top hospitals and healthcare facilities in and around Tirupati.'
  },
  { 
    id: 3, 
    name: 'Restaurants', 
    icon: <FiShoppingBag className="w-6 h-6 text-indigo-600" />,
    description: 'Discover the finest dining experiences with local and international cuisines.'
  },
  { 
    id: 4, 
    name: 'Travels', 
    icon: <FiTruck className="w-6 h-6 text-indigo-600" />,
    description: 'Book cabs, buses, and other transportation services for your travel needs.'
  },
  { 
    id: 5, 
    name: 'Tourist Places', 
    icon: <FiMapPin className="w-6 h-6 text-indigo-600" />,
    description: 'Explore the most popular tourist attractions and hidden gems in Tirupati.'
  },
];

export const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Everything you need to make your stay in Tirupati comfortable and memorable
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                expandedService === service.id ? 'ring-2 ring-indigo-500' : 'hover:shadow-lg'
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="ml-4 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {expandedService === service.id ? (
                      <FiChevronUp className="h-5 w-5" />
                    ) : (
                      <FiChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              {expandedService === service.id && (
                <div className="px-6 pb-6 pt-0 transition-all duration-300">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Explore {service.name}
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};