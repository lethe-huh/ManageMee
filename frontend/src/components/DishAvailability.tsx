import { AlertTriangle, CheckCircle } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { InventoryItem } from '../types/inventory';

interface DishAvailabilityProps {
  menuItem: MenuItem;
  inventoryItems: InventoryItem[];
}

export default function DishAvailability({ menuItem, inventoryItems }: DishAvailabilityProps) {
  // Calculate max portions for each ingredient
  const ingredientPortions = menuItem.ingredients.map(ingredient => {
    const inventoryItem = inventoryItems.find(item => item.id === ingredient.inventoryItemId);
    if (!inventoryItem) return { ...ingredient, maxPortions: 0, currentStock: 0 };

    // Convert to same unit and calculate portions
    const stockInGrams = inventoryItem.unit === 'kg' 
      ? inventoryItem.quantity * 1000 
      : inventoryItem.unit === 'L'
      ? inventoryItem.quantity * 1000
      : inventoryItem.quantity;

    const requiredPerPortion = ingredient.unit === 'kg'
      ? ingredient.quantity * 1000
      : ingredient.unit === 'L'
      ? ingredient.quantity * 1000
      : ingredient.quantity;

    const maxPortions = Math.floor(stockInGrams / requiredPerPortion);

    return {
      ...ingredient,
      maxPortions,
      currentStock: inventoryItem.quantity,
      stockUnit: inventoryItem.unit,
      percentageUsed: (requiredPerPortion * maxPortions) / stockInGrams * 100
    };
  });

  // Find bottleneck (limiting ingredient)
  const bottleneck = ingredientPortions.reduce((min, current) => 
    current.maxPortions < min.maxPortions ? current : min
  );

  const maxPortionsAvailable = bottleneck.maxPortions;
  const isLimited = maxPortionsAvailable < 50;

  return (
    <div className={`border-2 rounded-lg p-4 ${
      isLimited ? 'bg-red-50 border-red-600' : 'bg-green-50 border-green-600'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-900 text-base">Max Portions Available</h3>
        {isLimited ? (
          <AlertTriangle size={28} className="text-red-600" strokeWidth={2.5} />
        ) : (
          <CheckCircle size={28} className="text-green-600" strokeWidth={2.5} />
        )}
      </div>

      {/* Max Portions */}
      <div className="mb-4">
        <p className={`text-5xl font-bold ${isLimited ? 'text-red-600' : 'text-green-600'}`}>
          {maxPortionsAvailable}
        </p>
        <p className="text-gray-600 font-bold text-sm">
          {menuItem.category === 'Rice Dishes' ? 'plates' : 'bowls'}
        </p>
      </div>

      {/* Ingredient Progress Bars */}
      <div className="space-y-3 mb-4">
        {ingredientPortions.map((ingredient, index) => {
          const isBottleneck = ingredient.inventoryItemId === bottleneck.inventoryItemId;
          const percentage = Math.min((ingredient.maxPortions / 100) * 100, 100);

          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <p className={`font-bold text-sm ${isBottleneck ? 'text-red-600' : 'text-gray-900'}`}>
                  {ingredient.inventoryItemName}
                </p>
                <p className={`font-bold text-sm ${isBottleneck ? 'text-red-600' : 'text-gray-600'}`}>
                  {ingredient.maxPortions} portions
                </p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    isBottleneck ? 'bg-red-600' : 'bg-green-600'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottleneck Alert */}
      {isLimited && (
        <div className="bg-red-600 text-white rounded-lg p-3">
          <p className="font-bold text-sm">⚠️ LIMITED BY:</p>
          <p className="font-bold text-lg">
            {bottleneck.inventoryItemName} (Only {bottleneck.maxPortions} portions left)
          </p>
        </div>
      )}
    </div>
  );
}