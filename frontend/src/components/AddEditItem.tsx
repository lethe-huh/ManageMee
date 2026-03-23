import { useState, useEffect } from 'react';
import { X, Scan, Save, Trash2 } from 'lucide-react';
import { InventoryItem, Supplier } from '../types/inventory';
import { createSupplier, getSuppliers } from '../services/suppliers';
import { categories, getUnitsForCategory } from '../data/constants';

interface AddEditItemProps {
  item?: InventoryItem | null;
  onSave: (item: Omit<InventoryItem, 'id' | 'lastUpdated'> | InventoryItem) => void | Promise<void>;
  onCancel: () => void;
  onDelete?: (id: string) => void | Promise<void>;
  isDeleteDisabled?: boolean;
}

export default function AddEditItem({ item, onSave, onCancel, onDelete, isDeleteDisabled = false }: AddEditItemProps) {
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
  const [supplierOptions, setSupplierOptions] = useState<Supplier[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const availableUnits = getUnitsForCategory(formData.category);

  useEffect(() => {
    const loadSuppliers = async () => {
      try {
        const backendSuppliers = await getSuppliers();
        setSupplierOptions(backendSuppliers);
      } catch (error) {
        console.error('Failed to load suppliers:', error);
      }
    };

    void loadSuppliers();
  }, []);

  // Update unit when category changes if current unit is not available
  useEffect(() => {
    if (formData.category && !availableUnits.includes(formData.unit)) {
      setFormData(prev => ({ ...prev, unit: availableUnits[0] || 'kg' }));
    }
  }, [formData.category, formData.unit, availableUnits]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let supplierName = formData.supplier;

    if (showNewSupplierInput) {
      const trimmedName = newSupplierName.trim();

      if (!trimmedName) {
        alert('Please enter a supplier name.');
        return;
      }

      const existingSupplier = supplierOptions.find(
        (supplier) => supplier.name.trim().toLowerCase() === trimmedName.toLowerCase()
      );

      if (existingSupplier) {
        supplierName = existingSupplier.name;
      } else {
        try {
          const createdSupplier = await createSupplier({
            name: trimmedName,
            phone: '-',
            items: [],
          });

          setSupplierOptions((prev) => [...prev, createdSupplier]);
          supplierName = createdSupplier.name;
        } catch (error) {
          console.error('Failed to create supplier:', error);
          alert('Failed to create supplier.');
          return;
        }
      }
    }

    const itemData = {
      ...item,
      name: formData.name,
      category: formData.category,
      quantity: parseFloat(formData.quantity),
      unit: formData.unit,
      minQuantity: parseFloat(formData.minQuantity),
      supplier: supplierName,
      targetPrice: parseFloat(formData.targetPrice) || 0,
      lastUpdated: new Date().toISOString()
    };

    await onSave(itemData);
  };

  const handleScanBarcode = () => {
    alert('Barcode scanner would open camera here. For demo purposes, this would use device camera API to scan product barcodes.');
  };

  const handleAddSupplier = async () => {
    const trimmedName = newSupplierName.trim();

    if (!trimmedName) {
      return;
    }

    const existingSupplier = supplierOptions.find(
      (supplier) => supplier.name.trim().toLowerCase() === trimmedName.toLowerCase(),
    );

    if (existingSupplier) {
      setFormData((prev) => ({ ...prev, supplier: existingSupplier.name }));
      setNewSupplierName('');
      setShowNewSupplierInput(false);
      return;
    }

    try {
      const createdSupplier = await createSupplier({
        name: trimmedName,
        phone: '-',
        items: [],
      });

      setSupplierOptions((prev) => [...prev, createdSupplier]);
      setFormData((prev) => ({ ...prev, supplier: createdSupplier.name }));
      setNewSupplierName('');
      setShowNewSupplierInput(false);
    } catch (error) {
      console.error('Failed to create supplier:', error);
      alert('Failed to create supplier.');
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
            required={!showNewSupplierInput}
            value={showNewSupplierInput ? 'ADD_NEW' : formData.supplier || ''}
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
            {supplierOptions.map((supplier) => (
              <option key={supplier.id} value={supplier.name}>
                {supplier.name}
              </option>
            ))}
            <option value="ADD_NEW">+ Add New Supplier...</option>
          </select>

          {showNewSupplierInput && (
            <input
              type="text"
              required
              value={newSupplierName}
              onChange={(e) => setNewSupplierName(e.target.value)}
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

        {/* Delete Button */}
        {item && onDelete && (
          <button
            type="button"
            disabled={isDeleteDisabled}
            onClick={() => {
              if (!isDeleteDisabled) {
                setShowDeleteConfirm(true);
              }
            }}
            className="w-full bg-red-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-red-700 transition-colors mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Trash2 size={28} strokeWidth={2.5} />
            Delete Ingredient
          </button>
        )}

        {item && isDeleteDisabled && (
          <p className="text-sm text-gray-600 mt-2">
            This ingredient cannot be deleted because it is used in a dish.
          </p>
        )}

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-orange-700 transition-colors mt-6"
        >
          <Save size={28} strokeWidth={2.5} />
          Save Ingredient
        </button>
      </form>

      {item && onDelete && !isDeleteDisabled && showDeleteConfirm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this ingredient?
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="bg-gray-600 text-white rounded-lg p-3 font-bold active:bg-gray-700 transition-colors mr-3"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await onDelete(item.id);
                    setShowDeleteConfirm(false);
                  } catch (error) {
                    console.error('Failed to delete ingredient:', error);
                  }
                }}
                className="bg-red-600 text-white rounded-lg p-3 font-bold active:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}