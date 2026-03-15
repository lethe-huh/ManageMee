import { X, CloudRain, TrendingUp, TrendingDown, Minus, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface SalesPredictionProps {
  onClose: () => void;
}

export default function SalesPrediction({ onClose }: SalesPredictionProps) {
  const todayForecast = {
    date: 'Tuesday, 8 Feb 2026',
    weather: 'Rainy',
    predictedSales: 2130,
    averageTuesday: 1610,
    confidence: 'High Confidence'
  };

  const dishBreakdown = [
    { name: 'Roasted Chicken Rice', prep: 80, trend: 'up', percentage: 12 },
    { name: 'Char Siew Noodles', prep: 65, trend: 'up', percentage: 8 },
    { name: 'Wonton Mee', prep: 55, trend: 'stable', percentage: 0 },
    { name: 'Curry Laksa', prep: 45, trend: 'down', percentage: -5 },
    { name: 'Fried Hokkien Mee', prep: 40, trend: 'up', percentage: 15 }
  ];

  const historicalData = [
    { week: '28 Jan', sales: 720, isToday: false },
    { week: '4 Feb', sales: 680, isToday: false },
    { week: '11 Feb', sales: 710, isToday: false },
    { week: '18 Feb', sales: 695, isToday: false },
    { week: 'Today', sales: 850, isToday: true }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={20} className="text-green-600" strokeWidth={2.5} />;
      case 'down':
        return <TrendingDown size={20} className="text-red-600" strokeWidth={2.5} />;
      default:
        return <Minus size={20} className="text-gray-600" strokeWidth={2.5} />;
    }
  };

  const difference = todayForecast.predictedSales - todayForecast.averageTuesday;
  const percentageChange = ((difference / todayForecast.averageTuesday) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-4 flex items-center justify-between z-10">
        <h1 className="text-2xl font-bold text-gray-900">Sales Prediction & Analytics</h1>
        <button
          onClick={onClose}
          className="text-gray-600 p-2 active:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={32} strokeWidth={2.5} />
        </button>
      </div>

      <div className="p-4 pb-24">
        {/* Today's Forecast Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Today's Forecast</h2>
          
          {/* Date and Weather */}
          <div className="flex items-center gap-2 mb-4">
            <CloudRain size={24} className="text-blue-600" strokeWidth={2.5} />
            <p className="font-bold text-gray-900 text-lg">
              {todayForecast.date} • {todayForecast.weather}
            </p>
          </div>

          {/* Primary Prediction Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-5 mb-3">
            <p className="text-sm font-bold opacity-90 mb-1">Predicted Sales</p>
            <p className="text-5xl font-bold mb-3">${todayForecast.predictedSales}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold opacity-90">vs Average Tuesday</p>
                <p className="text-2xl font-bold">${todayForecast.averageTuesday}</p>
              </div>
              <div className="text-right bg-white/20 px-4 py-2 rounded-lg">
                <p className="text-3xl font-bold">+{percentageChange}%</p>
                <p className="text-xs font-bold">increase</p>
              </div>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle size={32} className="text-green-600" strokeWidth={2.5} />
            <div>
              <p className="font-bold text-gray-900 text-lg">{todayForecast.confidence}</p>
              <p className="text-sm font-bold text-gray-600">Based on 12 weeks of data</p>
            </div>
          </div>
        </div>

        {/* Historical Trend Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Historical Trend</h2>
          <p className="text-gray-600 font-bold mb-4">Last 4 Tuesdays vs Today's Prediction</p>
          
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={historicalData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                <XAxis 
                  dataKey="week" 
                  stroke="#374151"
                  style={{ fontSize: '11px', fontWeight: 'bold' }}
                  interval={0}
                />
                <YAxis 
                  stroke="#374151"
                  style={{ fontSize: '12px', fontWeight: 'bold' }}
                  domain={[0, 1000]}
                />
                <Tooltip 
                  contentStyle={{ 
                    fontWeight: 'bold',
                    border: '2px solid #ea580c',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`$${value}`, 'Sales']}
                />
                <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
                  {historicalData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.isToday ? '#ea580c' : '#9ca3af'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <p className="text-sm font-bold text-gray-600">Historical</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-600 rounded"></div>
                <p className="text-sm font-bold text-gray-600">Today's forecast</p>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Box */}
        <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4">
          <h3 className="font-bold text-gray-900 text-lg mb-2">💡 Key Insights</h3>
          <ul className="space-y-1 text-gray-900 font-bold text-sm">
            <li>• Rainy weather typically reduces foot traffic by 10%</li>
            <li>• Public holiday expected to increase sales by 20%</li>
            <li>• Roasted Chicken Rice trending up - prep extra portions</li>
            <li>• Consider reducing Curry Laksa prep by 5%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
