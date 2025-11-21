import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to explore Tirupati?</span>
          <span className="block text-indigo-200">
            Start your journey today.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Join thousands of travelers who have made their Tirupati trip
          memorable with our services.
        </p>
        <Link
          to="/register"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Sign up for free
        </Link>
        <p className="mt-3 text-sm text-indigo-100">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-white font-medium underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CTA;
