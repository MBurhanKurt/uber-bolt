import React from 'react';
import { Calculator, BarChart2, Mail, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: 'Net Hourly Income',
    description: 'Automatically calculate your real earnings after expenses.',
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email Reports',
    description: 'Get weekly insights and earning summaries in your inbox.',
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: 'Advanced Analytics',
    description: 'Visualize your earnings and identify peak hours.',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Expense Tracking',
    description: 'Monitor fuel, maintenance, and other costs easily.',
  },
];

export function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}