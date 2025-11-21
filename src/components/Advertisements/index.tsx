import React from 'react';
import { FiStar } from 'react-icons/fi';

const advertisements = [
  {
    id: 1,
    title: 'Special Hotel Deals',
    description: 'Get 20% off on premium hotels in Tirupati',
    cta: 'Book Now',
    image: 'https://via.placeholder.com/300x200?text=Hotel+Deal',
    sponsored: true,
  },
  {
    id: 2,
    title: 'Pilgrimage Tour',
    description: 'Complete darshan package with accommodation',
    cta: 'View Package',
    image: 'https://via.placeholder.com/300x200?text=Pilgrimage+Tour',
    sponsored: false,
  },
  {
    id: 3,
    title: 'Local Cuisine',
    description: 'Taste authentic Tirupati special dishes',
    cta: 'Explore Restaurants',
    image: 'https://via.placeholder.com/300x200?text=Local+Cuisine',
    sponsored: true,
  },
];

export const Advertisements: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Featured</h2>
      <div className="space-y-4">
        {advertisements.map((ad) => (
          <div key={ad.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={ad.image} 
                alt={ad.title}
                className="w-full h-32 object-cover"
              />
              {ad.sponsored && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded-full flex items-center">
                  <FiStar className="mr-1" />
                  <span>Sponsored</span>
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-medium text-gray-900">{ad.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{ad.description}</p>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
                {ad.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-800">Advertise with Us</h3>
        <p className="text-sm text-blue-700 mt-1">Reach thousands of visitors daily</p>
        <button className="mt-2 text-sm text-blue-600 hover:underline">
          Learn more →
        </button>
      </div>
    </div>
  );
};
