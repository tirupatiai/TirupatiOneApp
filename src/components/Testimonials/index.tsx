import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Tourist from Delhi',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content:
      'TirupatiOneApp made my pilgrimage so much easier! Found great hotels and local guides through their platform. Highly recommended!',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Frequent Visitor',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content:
      'The best part about TirupatiOneApp is their local expertise. They know all the hidden gems in the city that you won\'t find in guidebooks.',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Travel Blogger',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    content:
      'As a travel blogger, I rely on platforms like TirupatiOne for authentic local experiences. Their service is top-notch!',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What people are saying
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-indigo-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
