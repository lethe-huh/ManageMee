import { useState } from 'react';
import { X, Save, Plus, Trash2 } from 'lucide-react';
import { MenuItem, RecipeIngredient } from '../types/menu';
import { inventoryItems } from '../data/mockData';

interface EditMenuItemProps {
  item?: MenuItem | null;
  onSave: (item: MenuItem) => void;
  onCancel: () => void;
}

export default function EditMenuItem({ item, onSave, onCancel }: EditMenuItemProps) {
  const [dishName, setDishName] = useState(item?.name || '');
  const [dishType, setDishType] = useState(item?.category || 'Rice Dishes');
  const [price, setPrice] = useState(item?.price?.toString() || '');
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(
    item?.ingredients || []
  );
  const [showAddIngredient, setShowAddIngredient] = useState(false);

  const handleSave = () => {
    const menuItem: MenuItem = {
      id: item?.id || Date.now().toString(),
      name: dishName,
      price: parseFloat(price),
      category: dishType,
      ingredients: ingredients
    };
    onSave(menuItem);
  };

  const addIngredient = (inventoryItemId: string) => {
    const inventoryItem = inventoryItems.find(i => i.id === inventoryItemId);
    if (!inventoryItem) return;

    // Convert units to smaller measurement
    let unit = inventoryItem.unit;
    if (unit === 'kg') {
      unit = 'g';
    } else if (unit === 'L') {
      unit = 'ml';
    }

    const newIngredient: RecipeIngredient = {
      inventoryItemId: inventoryItem.id,
      inventoryItemName: inventoryItem.name,
      quantity: 0,
      unit: unit
    };
    setIngredients([...ingredients, newIngredient]);
    setShowAddIngredient(false);
  };

  const updateIngredientQuantity = (index: number, quantity: string) => {
    const updated = [...ingredients];
    const numValue = parseFloat(quantity) || 0;
    
    // For editing mode: prevent setting to 0 (user must delete via trash icon)
    // For create mode: allow 0
    if (item && numValue === 0) {
      return;
    }
    
    updated[index] = { ...updated[index], quantity: numValue };
    setIngredients(updated);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Filter available items based on dish type
  const availableItems = inventoryItems
    .filter(inv => {
      // First check if ingredient is already added
      if (ingredients.some(ing => ing.inventoryItemId === inv.id)) {
        return false;
      }
      
      // Filter based on dish type
      if (dishType === 'Rice Dishes') {
        // Hide noodles when Rice Dish is selected
        return inv.category !== 'Noodles';
      } else if (dishType === 'Noodle Dishes') {
        // Hide rice when Noodle Dish is selected
        return inv.category !== 'Rice';
      }
      
      // For other dish types, show all
      return true;
    })
    .sort((a, b) => {
      // Sort Brown Rice to the top
      if (a.name === 'Brown Rice') return -1;
      if (b.name === 'Brown Rice') return 1;
      return 0;
    });

  // Check if all ingredients have 0 quantity (for create mode)
  const allIngredientsZero = ingredients.length > 0 && ingredients.every(ing => ing.quantity === 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-4 flex items-center justify-between z-10">
        <h1 className="text-2xl font-bold text-gray-900">
          {item ? `Edit Dish: ${item.name}` : 'Add New Dish'}
        </h1>
        <button
          onClick={onCancel}
          className="text-gray-600 active:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <X size={28} strokeWidth={2.5} />
        </button>
      </div>

      <div className="p-4 pb-24">
        {/* Top Section: Basic Info */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
          
          {/* Dish Name */}
          <div className="mb-4">
            <label className="block text-gray-900 font-bold mb-2 text-lg">
              Dish Name *
            </label>
            <input
              type="text"
              required
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              placeholder="e.g., Chicken Rice"
              className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
            />
          </div>

          {/* Dish Type */}
          <div className="mb-4">
            <label className="block text-gray-900 font-bold mb-2 text-lg">
              Dish Type *
            </label>
            <select
              value={dishType}
              onChange={(e) => setDishType(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
            >
              <option value="Rice Dishes">Rice Dish</option>
              <option value="Noodle Dishes">Noodle Dish</option>
              {/*<option value="Appetizer">Appetizer</option>*/}
              {/*<option value="Main Course">Main Course</option>*/}
              {/*<option value="Dessert">Dessert</option>*/}
              {/*<option value="Beverage">Beverage</option>*/}
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Selling Price */}
          <div>
            <label className="block text-gray-900 font-bold mb-2 text-lg">
              Selling Price (SGD) *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-600">$</span>
              <input
                type="number"
                required
                step="0.10"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg font-bold text-2xl focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ingredients per Portion</h2>
          
          {/* Ingredients List */}
          <div className="space-y-3 mb-4">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg">{ingredient.inventoryItemName}</p>
                  </div>
                  <button
                    onClick={() => removeIngredient(index)}
                    className="text-red-600 p-2 active:bg-red-100 rounded-lg transition-colors"
                  >
                    <Trash2 size={24} strokeWidth={2.5} />
                  </button>
                </div>
                
                {/* Quantity Input */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      value={ingredient.quantity || ''}
                      onChange={(e) => updateIngredientQuantity(index, e.target.value)}
                      placeholder="0"
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-2xl focus:outline-none focus:border-orange-600 text-center"
                    />
                  </div>
                  <div className="bg-orange-100 text-orange-600 px-4 py-4 rounded-lg font-bold text-xl min-w-[80px] text-center">
                    {ingredient.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Ingredient Button */}
          {showAddIngredient ? (
            <div className="bg-white border-2 border-orange-600 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-3">Select Ingredient:</p>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {availableItems.map(inv => (
                  <button
                    key={inv.id}
                    onClick={() => addIngredient(inv.id)}
                    className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg p-3 text-left font-bold text-gray-900 active:bg-orange-50 active:border-orange-600 transition-colors"
                  >
                    {inv.name}   ({inv.category})
                  </button>
                ))}
                {availableItems.length === 0 && (
                  <p className="text-gray-600 font-bold text-center py-4">
                    All inventory items added
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowAddIngredient(false)}
                className="w-full mt-3 bg-gray-600 text-white rounded-lg p-3 font-bold active:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAddIngredient(true)}
              className="w-full bg-gray-900 text-white rounded-lg p-4 font-bold text-lg flex items-center justify-center gap-2 active:bg-gray-800 transition-colors"
            >
              <Plus size={28} strokeWidth={2.5} />
              Add Ingredient
            </button>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!dishName || !price || ingredients.length === 0 || allIngredientsZero}
          className="w-full bg-orange-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Save size={28} strokeWidth={2.5} />
          Save Dish
        </button>
      </div>
    </div>
  );
}