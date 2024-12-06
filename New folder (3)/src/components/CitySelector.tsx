import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  { id: 'nyc', name: 'New York City' },
  { id: 'sf', name: 'San Francisco' },
  { id: 'la', name: 'Los Angeles' },
  { id: 'chi', name: 'Chicago' },
  { id: 'mia', name: 'Miami' },
];

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (cityId: string) => void;
}

export function CitySelector({ selectedCity, onCityChange }: CitySelectorProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Select your city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}