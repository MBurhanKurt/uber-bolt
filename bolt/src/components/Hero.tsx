import React from 'react';
import { TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <TrendingUp className="h-16 w-16" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Maximize Your Earnings. Drive Smarter.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Track your income, analyze trends, and optimize your driving strategies—all in one place.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
          Get Started for Free
        </button>
      </div>
    </div>
  );
}