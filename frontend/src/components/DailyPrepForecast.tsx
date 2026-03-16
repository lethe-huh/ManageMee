import { CloudRain, TrendingUp, ChevronRight } from 'lucide-react';
import { contextTags, prepRecommendations, totalPrepPortions } from '../data/forecastData';

interface DailyPrepForecastProps {
  onViewDetails: () => void;
}

export default function DailyPrepForecast({ onViewDetails }: DailyPrepForecastProps) {
  const recommendedPortions = totalPrepPortions;
  const maxCapacity = 200;
  const percentage = (recommendedPortions / maxCapacity) * 100;
  
  // Calculate the circle progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine weather icon
  const WeatherIcon = CloudRain;

  return (
    <div 
      onClick={onViewDetails}
      className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500 rounded-lg p-4 cursor-pointer active:scale-[0.98] transition-transform"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Demand Forecast</h2>
        
      </div>

      {/* Total Portions */}
      <div className="mb-4">
        <p className="text-gray-600 font-bold text-sm mb-1">Total Portions Expected</p>
        <p className="text-orange-500 font-bold text-5xl">{recommendedPortions}</p>
      </div>

      {/* Portions per Dish */}
      <div className="mb-4 space-y-2">
        {prepRecommendations.map((dish, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="text-gray-900 font-semibold text-sm">{dish.name}</p>
            <p className="text-orange-500 font-bold text-lg">{dish.prep}</p>
          </div>
        ))}
      </div>

      {/* View Prep Guide Link */}
      <button className="w-full mt-2 text-orange-500 font-bold text-base flex items-center justify-center gap-2">
        View Prep Guide
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}