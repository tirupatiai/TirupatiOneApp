import React from 'react';
import { FiMapPin, FiClock, FiDollarSign, FiGlobe } from 'react-icons/fi';

const features = [
  {
    name: 'Local Expertise',
    description: 'Get the most accurate and up-to-date information about Tirupati from our local experts.',
    icon: <FiMapPin className="h-6 w-6 text-indigo-600" />,
  },
  {
    name: 'Save Time',
    description: 'Find everything you need in one place without wasting time searching multiple sources.',
    icon: <FiClock className="h-6 w-6 text-indigo-600" />,
  },
  {
    name: 'Best Deals',
    description: 'Get access to exclusive deals and discounts on hotels, restaurants, and local attractions.',
    icon: <FiDollarSign className="h-6 w-6 text-indigo-600" />,
  },
  {
    name: 'Anywhere Access',
    description: 'Access our services from any device, anywhere in Tirupati.',
    icon: <FiGlobe className="h-6 w-6 text-indigo-600" />,
  },
];

export const Features: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to explore Tirupati
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to make your trip to Tirupati memorable and hassle-free.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
