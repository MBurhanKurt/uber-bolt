import React from 'react';
import { Car } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Car className="h-8 w-8" />
            <h1 className="text-2xl font-bold">GigTracker</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#dashboard" className="hover:text-blue-200 transition-colors">Dashboard</a>
            <a href="#earnings" className="hover:text-blue-200 transition-colors">Log Earnings</a>
            <a href="#community" className="hover:text-blue-200 transition-colors">Community</a>
          </nav>
        </div>
      </div>
    </header>
  );
}