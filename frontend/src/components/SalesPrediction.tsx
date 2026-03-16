import { X, CloudRain, TrendingUp, TrendingDown, Minus, CheckCircle } from 'lucide-react';
import { todayForecast, prepRecommendations } from '../data/forecastData';
import { menuItems } from '../data/menuData';

interface SalesPredictionProps {
  onClose: () => void;
}

export default function SalesPrediction({ onClose }: SalesPredictionProps) {
  const getTrendIcon = (change: number) => {
    if (change > 0) {
      return <TrendingUp size={20} className="text-green-600" strokeWidth={2.5} />;
    } else if (change < 0) {
      return <TrendingDown size={20} className="text-red-600" strokeWidth={2.5} />;
    } else {
      return <Minus size={20} className="text-gray-600" strokeWidth={2.5} />;
    }
  };

  // Calculate ingredients needed based on dish portions
  const calculateIngredientsNeeded = () => {
    const ingredientsMap = new Map<string, { name: string; quantity: number; unit: string }>();
    
    prepRecommendations.forEach(dishRec => {
      const menuItem = menuItems.find(item => item.name === dishRec.name);
      if (menuItem) {
        menuItem.ingredients.forEach(ingredient => {
          const key = ingredient.inventoryItemName;
          const existing = ingredientsMap.get(key);
          
          // Convert quantity based on unit
          let quantityPerPortion = ingredient.quantity;
          if (ingredient.unit === 'g') {
            quantityPerPortion = ingredient.quantity / 1000; // Convert to kg
          } else if (ingredient.unit === 'ml') {
            quantityPerPortion = ingredient.quantity / 1000; // Convert to L
          }
          
          const totalQuantity = quantityPerPortion * dishRec.prep;
          
          if (existing) {
            existing.quantity += totalQuantity;
          } else {
            // Determine display unit
            let displayUnit = ingredient.unit;
            if (ingredient.unit === 'g') displayUnit = 'kg';
            if (ingredient.unit === 'ml') displayUnit = 'L';
            
            ingredientsMap.set(key, {
              name: ingredient.inventoryItemName,
              quantity: totalQuantity,
              unit: displayUnit
            });
          }
        });
      }
    });
    
    return Array.from(ingredientsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  };

  const ingredientsNeeded = calculateIngredientsNeeded();
  const difference = todayForecast.predictedSales - todayForecast.averageTuesday;
  const percentageChange = ((difference / todayForecast.averageTuesday) * 100).toFixed(0);
  const isIncrease = difference > 0;
  const isDecrease = difference < 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-4 flex items-center justify-between z-10">
        <h1 className="text-2xl font-bold text-gray-900">Detailed Prep Guide</h1>
        <button
          onClick={onClose}
          className="text-gray-600 p-2 active:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={32} strokeWidth={2.5} />
        </button>
      </div>

      <div className="p-4 pb-24">
        {/* Date and Weather */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <CloudRain size={24} className="text-orange-500" strokeWidth={2.5} />
            <p className="font-bold text-gray-900 text-lg">
              {todayForecast.date} • {todayForecast.weather}
            </p>
          </div>
        </div>

        {/* Dish Breakdown */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Dish Breakdown</h2>
          <div className="space-y-2">
            {prepRecommendations.map((dish, index) => {
              const isIncrease = dish.change > 0;
              const isDecrease = dish.change < 0;
              const isStable = dish.change === 0;
              
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-300 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{dish.name}</h3>
                    {!isStable && (
                      <div className="flex items-center gap-1">
                        {getTrendIcon(dish.change)}
                        <span className={`font-bold text-sm ${
                          isIncrease ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {isIncrease ? '+' : ''}{dish.change}%
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-orange-500 font-bold text-3xl">{dish.prep}</p>
                    <p className="text-gray-600 font-bold text-base">portions</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ingredients Needed */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ingredients Needed</h2>
          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4">
            <div className="space-y-3">
              {ingredientsNeeded.map((ingredient, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-gray-900 font-bold text-base">{ingredient.name}</p>
                  <p className="text-blue-600 font-bold text-xl">
                    {ingredient.quantity.toFixed(1)} {ingredient.unit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Predicted Sales */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Predicted Sales</h2>
          
          {/* Primary Prediction Card */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
            <p className="font-bold mb-1 text-[16px] text-[#000000]">Predicted Sales</p>
            <p className="text-5xl font-bold text-orange-500 mb-3">${todayForecast.predictedSales}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#000000]">vs Average Tuesday</p>
                <p className="text-2xl font-bold text-orange-500">${todayForecast.averageTuesday}</p>
              </div>
              <div className={`text-right px-4 py-2 rounded-lg border-2 ${
                isIncrease 
                  ? 'bg-green-50 border-green-600' 
                  : isDecrease 
                    ? 'bg-red-50 border-red-600' 
                    : 'bg-gray-50 border-gray-300'
              }`}>
                <p className={`text-3xl font-bold ${
                  isIncrease 
                    ? 'text-green-600' 
                    : isDecrease 
                      ? 'text-red-600' 
                      : 'text-gray-600'
                }`}>
                  {isIncrease ? '+' : ''}{percentageChange}%
                </p>
                <p className={`text-xs font-bold ${
                  isIncrease 
                    ? 'text-green-600' 
                    : isDecrease 
                      ? 'text-red-600' 
                      : 'text-gray-600'
                }`}>
                  {isIncrease ? 'increase' : isDecrease ? 'decrease' : 'no change'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rationale */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Rationale</h2>
          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4">
            <div className="space-y-2 text-gray-900 font-bold text-base">
              <p>Rainy weather typically reduces foot traffic by 10%</p>
              <p>Public holiday expected to increase sales by 20%</p>
              <p>Roasted Chicken Rice trending up - prep extra portions</p>
              <p>Consider reducing Curry Laksa prep by 5%</p>
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
    </div>
  );
}