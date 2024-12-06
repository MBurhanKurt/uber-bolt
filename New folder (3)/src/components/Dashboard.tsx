import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Clock, Percent } from 'lucide-react';

const mockData = [
  { name: 'Mon', earnings: 150, hours: 8 },
  { name: 'Tue', earnings: 180, hours: 9 },
  { name: 'Wed', earnings: 200, hours: 10 },
  { name: 'Thu', earnings: 170, hours: 8 },
  { name: 'Fri', earnings: 250, hours: 12 },
  { name: 'Sat', earnings: 300, hours: 14 },
  { name: 'Sun', earnings: 220, hours: 10 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Earnings"
          value="$1,470"
          icon={<DollarSign className="h-6 w-6" />}
          trend="+12%"
        />
        <StatCard
          title="Hours Worked"
          value="71"
          icon={<Clock className="h-6 w-6" />}
          trend="+5%"
        />
        <StatCard
          title="Hourly Average"
          value="$20.70"
          icon={<TrendingUp className="h-6 w-6" />}
          trend="+8%"
        />
        <StatCard
          title="Expenses"
          value="$245"
          icon={<Percent className="h-6 w-6" />}
          trend="-3%"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Earnings Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#3B82F6" name="Earnings ($)" />
              <Bar dataKey="hours" fill="#60A5FA" name="Hours" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string; value: string; icon: React.ReactNode; trend: string }) {
  const trendColor = trend.startsWith('+') ? 'text-green-500' : 'text-red-500';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="text-gray-500">{title}</div>
        <div className="bg-blue-100 p-2 rounded-lg">{icon}</div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`text-sm ${trendColor}`}>{trend} from last week</div>
      </div>
    </div>
  );
}