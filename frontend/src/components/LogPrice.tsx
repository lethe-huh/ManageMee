import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { inventoryItems } from '../data/mockData';
import { suppliers } from '../data/mockData';

interface LogPriceProps {
  itemId?: string | null;
  onClose: () => void;
}

export default function LogPrice({ itemId, onClose }: LogPriceProps) {
  const [selectedItemId, setSelectedItemId] = useState(itemId || '');
  const [selectedSupplierId, setSelectedSupplierId] = useState('');
  const [price, setPrice] = useState('');
  const [newSupplierName, setNewSupplierName] = useState('');
  const [showNewSupplierInput, setShowNewSupplierInput] = useState(false);

  const selectedItem = inventoryItems.find(i => i.id === selectedItemId);

  const handleSave = () => {
    if (!selectedItemId || !price) {
      alert('Please fill in all fields');
      return;
    }

    // Check if supplier is selected
    if (!showNewSupplierInput && !selectedSupplierId) {
      alert('Please select a supplier');
      return;
    }

    // Check if new supplier name is entered
    if (showNewSupplierInput && !newSupplierName.trim()) {
      alert('Please enter supplier name');
      return;
    }

    const supplierName = showNewSupplierInput 
      ? newSupplierName.trim()
      : suppliers.find(s => s.id === selectedSupplierId)?.name;

    // In real app, save to database
    alert(`Price logged: ${selectedItem?.name} from ${supplierName} at $${parseFloat(price).toFixed(2)} per ${selectedItem?.unit}`);
    onClose();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-4 flex items-center justify-between z-10">
        <h1 className="text-2xl font-bold text-gray-900">Add New Supplier</h1>
        <button
          onClick={onClose}
          className="text-gray-600 p-2 active:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={32} strokeWidth={2.5} />
        </button>
      </div>

      <div className="p-4 pb-24">
        {/* Select Ingredient */}
        <div className="mb-6">
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Ingredient
          </label>
          <p className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600">
              {selectedItem.name} ({selectedItem.unit})
            </p>
        </div>

        {/* Select Supplier */}
        <div className="mb-6">
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Supplier *
          </label>
          <select
            value={showNewSupplierInput ? 'ADD_NEW' : selectedSupplierId}
            onChange={(e) => {
              if (e.target.value === 'ADD_NEW') {
                setShowNewSupplierInput(true);
                setSelectedSupplierId('');
              } else {
                setShowNewSupplierInput(false);
                setSelectedSupplierId(e.target.value);
                setNewSupplierName('');
              }
            }}
            className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
          >
            <option value="">Select supplier</option>
            {suppliers.map(supplier => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
            <option value="ADD_NEW">+ Add New Supplier...</option>
          </select>
          
          {showNewSupplierInput && (
            <div className="mt-3">
              <input
                type="text"
                value={newSupplierName}
                onChange={(e) => setNewSupplierName(e.target.value)}
                placeholder="Enter new supplier name"
                className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Price Input */}
        <div className="mb-6">
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Price {selectedItem && `(per ${selectedItem.unit})`} *
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-gray-600">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full pl-16 pr-4 py-5 border-2 border-gray-300 rounded-lg font-bold text-3xl focus:outline-none focus:border-orange-600 text-center"
            />
          </div>
        </div>

        {/* Current Target Price Reference */}
        {selectedItem && (
          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4 mb-6">
            <p className="text-blue-900 font-bold text-sm mb-1">Current Target Price</p>
            <p className="text-blue-600 font-bold text-2xl">
              ${selectedItem.targetPrice.toFixed(2)} per {selectedItem.unit}
            </p>
            {price && (
              <div className="mt-2 pt-2 border-t-2 border-blue-400">
                <p className="text-blue-900 font-bold text-sm">
                  Difference: 
                  <span className={`ml-2 text-lg ${
                    parseFloat(price) < selectedItem.targetPrice ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {parseFloat(price) < selectedItem.targetPrice ? '-' : '+'}
                    ${Math.abs(parseFloat(price) - selectedItem.targetPrice).toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* Number Pad Helper */}
        {/*<div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '⌫'].map((num, index) => (
            <button
              key={index}
              onClick={() => {
                if (num === '⌫') {
                  setPrice(price.slice(0, -1));
                } else if (num === '.') {
                  if (!price.includes('.')) setPrice(price + '.');
                } else {
                  setPrice(price + num.toString());
                }
              }}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg p-5 font-bold text-2xl active:bg-gray-200 transition-colors"
            >
              {num}
            </button>
          ))}
        </div>*/}

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!selectedItemId || !price}
          className="w-full bg-orange-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Save size={28} strokeWidth={2.5} />
          Save Supplier
        </button>
      </div>
    </div>
  );
}