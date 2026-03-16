import { useState, useEffect } from 'react';
import { X, Scan, Save } from 'lucide-react';
import { suppliers } from '../data/mockData';
import { InventoryItem } from '../types/inventory';
import { categories, getUnitsForCategory } from '../data/constants';

interface AddEditItemProps {
  item?: InventoryItem | null;
  onSave: (item: any) => void;
  onCancel: () => void;
}

export default function AddEditItem({ item, onSave, onCancel }: AddEditItemProps) {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    category: item?.category || '',
    quantity: item?.quantity?.toString() || '',
    unit: item?.unit || 'kg',
    minQuantity: item?.minQuantity?.toString() || '',
    supplier: item?.supplier || '',
    targetPrice: item?.targetPrice?.toString() || ''
  });
  const [newSupplierName, setNewSupplierName] = useState('');
  const [showNewSupplierInput, setShowNewSupplierInput] = useState(false);

  const availableUnits = getUnitsForCategory(formData.category);

  // Update unit when category changes if current unit is not available
  useEffect(() => {
    if (formData.category && !availableUnits.includes(formData.unit)) {
      setFormData(prev => ({ ...prev, unit: availableUnits[0] || 'kg' }));
    }
  }, [formData.category, formData.unit, availableUnits]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const itemData = {
      ...item,
      name: formData.name,
      category: formData.category,
      quantity: parseFloat(formData.quantity),
      unit: formData.unit,
      minQuantity: parseFloat(formData.minQuantity),
      supplier: formData.supplier,
      targetPrice: parseFloat(formData.targetPrice) || 0,
      lastUpdated: new Date().toISOString()
    };

    onSave(itemData);
  };

  const handleScanBarcode = () => {
    alert('Barcode scanner would open camera here. For demo purposes, this would use device camera API to scan product barcodes.');
  };

  const handleAddSupplier = () => {
    if (newSupplierName.trim()) {
      const newSupplier = { id: suppliers.length + 1, name: newSupplierName };
      setFormData(prev => ({ ...prev, supplier: newSupplier.name }));
      setNewSupplierName('');
      setShowNewSupplierInput(false);
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {item ? 'Edit Ingredient' : 'New Ingredient'}
        </h1>
        <button
          onClick={onCancel}
          className="text-gray-600 p-2 active:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Scan Barcode Button */}
      
      <button
        type="button"
        onClick={handleScanBarcode}
        className="w-full bg-gray-900 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 mb-6 active:bg-gray-800 transition-colors"
      >
        <Scan size={32} strokeWidth={2.5} />
        Scan Barcode
      </button>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Item Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Yellow Noodles"
            className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Category *
          </label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
          >
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Quantity and Unit */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-900 font-bold mb-2 text-lg">
              Quantity *
            </label>
            <input
              type="number"
              required
              step="0.1"
              min="0"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="0.0"
              className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
            />
          </div>
          <div>
            <label className="block text-gray-900 font-bold mb-2 text-lg">
              Unit *
            </label>
            <select
              required
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
            >
              {availableUnits.map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Minimum Quantity */}
        <div>
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Minimum Quantity *
          </label>
          <input
            type="number"
            required
            step="0.1"
            min="0"
            value={formData.minQuantity}
            onChange={(e) => setFormData({ ...formData, minQuantity: e.target.value })}
            placeholder="0.0"
            className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
          />
        </div>

        {/* Supplier */}
        <div>
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Supplier *
          </label>
          <select
            required
            value={formData.supplier || ''}
            onChange={(e) => {
              if (e.target.value === 'ADD_NEW') {
                setFormData({ ...formData, supplier: '' });
                setNewSupplierName('');
                setShowNewSupplierInput(true);
              } else {
                setFormData({ ...formData, supplier: e.target.value });
                setShowNewSupplierInput(false);
              }
            }}
            className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
          >
            <option value="">Select supplier</option>
            {suppliers.map(supplier => (
              <option key={supplier.id} value={supplier.name}>{supplier.name}</option>
            ))}
            <option value="ADD_NEW">+ Add New Supplier...</option>
          </select>
          {showNewSupplierInput && (
            <input
              type="text"
              value={newSupplierName}
              onChange={(e) => setNewSupplierName(e.target.value)}
              onBlur={handleAddSupplier}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddSupplier();
                }
              }}
              placeholder="New supplier name"
              autoFocus
              className="w-full p-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600 mt-2"
            />
          )}
        </div>

        {/* Target Price */}
        <div>
          <label className="block text-gray-900 font-bold mb-2 text-lg">
            Target Price (per {formData.unit})
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-600">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={formData.targetPrice}
              onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
              placeholder="0.00"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg font-bold text-xl focus:outline-none focus:border-orange-600"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-orange-700 transition-colors mt-6"
        >
          <Save size={28} strokeWidth={2.5} />
          Save Ingredient
        </button>
      </form>
    </div>
  );
}