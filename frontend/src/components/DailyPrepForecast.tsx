import { Cloud, CloudRain, Sun, TrendingUp } from 'lucide-react';

interface DailyPrepForecastProps {
  onViewDetails?: () => void;
}

export default function DailyPrepForecast({ onViewDetails }: DailyPrepForecastProps) {
  const recommendedPortions = 150;
  const maxCapacity = 200;
  const percentage = (recommendedPortions / maxCapacity) * 100;
  
  // Calculate the circle progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const contextTags = [
    { label: 'Rainy Weather', impact: '-10%', color: 'blue' },
    { label: 'Public Holiday', impact: '+20%', color: 'green' }
  ];

  // Determine weather icon
  const WeatherIcon = CloudRain;

  return (
    <div 
      onClick={onViewDetails}
      className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-600 rounded-lg p-4 cursor-pointer active:scale-[0.98] transition-transform"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Recommended Prep for Today</h2>
        <WeatherIcon size={28} className="text-orange-600" strokeWidth={2.5} />
      </div>

      <div className="flex items-center gap-6">
        {/* Circular Progress */}
        <div className="relative flex-shrink-0">
          <svg width="140" height="140" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#ea580c"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-600">{recommendedPortions}</p>
              <p className="text-xs font-bold text-gray-600">portions</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <div className="mb-3">
            <p className="text-gray-600 font-bold text-sm mb-1">Capacity</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">{percentage.toFixed(0)}%</p>
              <p className="text-sm font-bold text-gray-600">of {maxCapacity}</p>
            </div>
          </div>

          {/* Context Tags */}
          <div className="space-y-2">
            {contextTags.map((tag, index) => (
              <div
                key={index}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mr-2 ${
                  tag.color === 'blue'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                <span>{tag.label}</span>
                <span className="font-extrabold">{tag.impact}</span>
              </div>
            ))}
          </div>

          {/* View Details Link */}
          <button className="mt-3 text-orange-600 font-bold text-sm flex items-center gap-1">
            View Full Analytics
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
