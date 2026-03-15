import { useState } from 'react';
import { TrendingUp, ChefHat, TrendingDown, CloudRain, ChevronDown, ChevronUp, Zap, Package, BarChart3, Calendar, Bell } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { inventoryItems, todaySalesData } from '../data/mockData';
import { menuItems } from '../data/menuData';
import DailyPrepForecast from './DailyPrepForecast';
import SalesPrediction from './SalesPrediction';

interface DashboardProps {
  onNavigateToWorkMode: () => void;
  onNavigateToRestock: () => void;
}

export default function Dashboard({ onNavigateToWorkMode, onNavigateToRestock }: DashboardProps) {
  const totalSales = todaySalesData.reduce((sum, data) => sum + data.sales, 0);
  const [showSalesPrediction, setShowSalesPrediction] = useState(false);
  const [isPrepGuideExpanded, setIsPrepGuideExpanded] = useState(true);

  // Calculate prep recommendations (based on predicted sales)
  const prepRecommendations = [
    { name: 'Roasted Chicken Rice', prep: 80, change: 12 },
    { name: 'Char Kway Teow', prep: 65, change: 8 },
    { name: 'Wonton Mee', prep: 55, change: 0 },
    { name: 'Curry Laksa', prep: 45, change: -5 }
  ];

  // Quick Links data
  const quickLinks = [
    { id: 1, label: 'Track Orders', icon: Zap, onClick: onNavigateToWorkMode },
    { id: 2, label: 'Check Restock', icon: Package, onClick: onNavigateToRestock },
    { id: 3, label: 'View Analytics', icon: BarChart3 },
    { id: 4, label: 'Schedule', icon: Calendar },
    { id: 5, label: 'Alerts', icon: Bell }
  ];

  if (showSalesPrediction) {
    return <SalesPrediction onClose={() => setShowSalesPrediction(false)} />;
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-orange-600 rounded-lg p-4 mb-4">
          <h1 className="text-3xl font-bold text-white">Home</h1>
        </div>
        
      </div>

      {/* Today's Forecast Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Today's Forecast</h2>
        <div className="flex items-center gap-2 text-gray-600">
          <span className="font-semibold">Tuesday, 24 Feb 2026</span>
          <span className="font-semibold">•</span>
          <div className="flex items-center gap-1">
            <CloudRain size={18} strokeWidth={2.5} />
            <span className="font-semibold">Rainy</span>
          </div>
        </div>
      </div>

      {/* Daily Prep Forecast Widget */}
      <div className="mb-6">
        <DailyPrepForecast onViewDetails={() => setShowSalesPrediction(true)} />
      </div>

      {/* Quick Links */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Links</h2>
        <div className="overflow-x-auto -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-3 pb-2">
            {quickLinks.map(link => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={link.onClick}
                  className="flex-shrink-0 bg-white border border-gray-300 rounded-lg p-4 w-[125px] shadow-md active:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center gap-3">
                    <Icon size={50} className="text-gray-900" strokeWidth={2} />
                    <p className="text-gray-900 font-semibold text-center text-sm leading-tight">{link.label}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Prep Recommendations */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <ChefHat size={24} className="text-orange-600" strokeWidth={2.5} />
          <h2 className="text-xl font-bold text-gray-900">Today's Prep Guide</h2>
          <button
            className="ml-auto text-gray-500 hover:text-gray-700"
            onClick={() => setIsPrepGuideExpanded(!isPrepGuideExpanded)}
          >
            {isPrepGuideExpanded ? (
              <ChevronUp size={18} strokeWidth={2.5} />
            ) : (
              <ChevronDown size={18} strokeWidth={2.5} />
            )}
          </button>
        </div>
        {isPrepGuideExpanded && (
          <div className="space-y-2">
            {prepRecommendations.map((dish, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{dish.name}</h3>
                  {dish.change !== 0 && (
                    <div className={`flex items-center gap-1 ${
                      dish.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {dish.change > 0 ? (
                        <TrendingUp size={18} strokeWidth={2.5} />
                      ) : (
                        <TrendingDown size={18} strokeWidth={2.5} />
                      )}
                      <span className="font-bold text-sm">
                        {dish.change > 0 ? '+' : ''}{dish.change}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-orange-600 font-bold text-4xl">{dish.prep}</p>
                  <p className="text-gray-600 font-bold">portions</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Today's Sales */}
      {/*
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={24} className="text-orange-600" strokeWidth={2.5} />
          <h2 className="text-xl font-bold text-gray-900">Today's Sales</h2>
        </div>
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
          <div className="mb-4">
            <p className="text-gray-600 font-bold">Total Sales</p>
            <p className="text-4xl font-bold text-orange-600">${totalSales.toFixed(2)}</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={todaySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis 
                dataKey="time" 
                stroke="#374151"
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              />
              <YAxis 
                stroke="#374151"
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              />
              <Tooltip 
                contentStyle={{ 
                  fontWeight: 'bold',
                  border: '2px solid #ea580c',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#ea580c" 
                strokeWidth={3}
                dot={{ fill: '#ea580c', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div> 
      </div> */}
    </div>
  );
}