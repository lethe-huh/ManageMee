import { useState } from 'react';
import { Phone, MessageCircle, FileText, CheckSquare, Square } from 'lucide-react';
import { suppliers, inventoryItems } from '../data/mockData';

export default function Suppliers() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const lowStockItems = inventoryItems.filter(item => item.quantity < item.minQuantity);

  const toggleItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const generateOrderMessage = () => {
    if (selectedItems.size === 0) {
      alert('Please select items to order');
      return;
    }

    const orderList = inventoryItems
      .filter(item => selectedItems.has(item.id))
      .map(item => {
        const restockAmount = item.minQuantity * 2 - item.quantity;
        return `• ${item.name}: ${restockAmount.toFixed(1)} ${item.unit}`;
      })
      .join('\n');

    const message = `Hello! I would like to order:\n\n${orderList}\n\nThank you!`;
    
    // In a real app, this would open WhatsApp with the message
    alert(`WhatsApp message prepared:\n\n${message}`);
  };

  const generatePDF = () => {
    if (selectedItems.size === 0) {
      alert('Please select items to order');
      return;
    }

    // In a real app, this would generate a PDF
    alert('PDF order list would be generated and downloaded here. This would include item names, quantities, supplier info, and date.');
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Supplier Orders</h1>
      </div>

      {/* Supplier List */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">My Suppliers</h2>
        <div className="space-y-3">
          {suppliers.map(supplier => (
            <div
              key={supplier.id}
              className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{supplier.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="text-gray-600" />
                <p className="text-gray-600 font-bold">{supplier.phone}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {supplier.items.map(item => (
                  <span
                    key={item}
                    className="bg-orange-100 text-orange-600 px-3 py-1 rounded font-bold text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={`tel:${supplier.phone}`}
                className="w-full bg-gray-900 text-white rounded-lg p-3 font-bold text-lg flex items-center justify-center gap-2 active:bg-gray-800 transition-colors"
              >
                <Phone size={24} strokeWidth={2.5} />
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Create Order */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Create Order</h2>
        <p className="text-gray-600 font-bold mb-4">Select items to restock:</p>
        
        <div className="space-y-2 mb-4">
          {lowStockItems.map(item => {
            const isSelected = selectedItems.has(item.id);
            const restockAmount = item.minQuantity * 2 - item.quantity;
            
            return (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`w-full border-2 rounded-lg p-4 text-left transition-colors ${
                  isSelected
                    ? 'bg-orange-50 border-orange-600'
                    : 'bg-white border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="pt-1">
                    {isSelected ? (
                      <CheckSquare size={28} className="text-orange-600" strokeWidth={2.5} />
                    ) : (
                      <Square size={28} className="text-gray-400" strokeWidth={2.5} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-gray-600 font-bold text-sm mb-1">{item.supplier}</p>
                    <p className="text-orange-600 font-bold">
                      Order: {restockAmount.toFixed(1)} {item.unit}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={generateOrderMessage}
            className="w-full bg-green-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-green-700 transition-colors"
          >
            <MessageCircle size={28} strokeWidth={2.5} />
            Send via WhatsApp
          </button>
          <button
            onClick={generatePDF}
            className="w-full bg-orange-600 text-white rounded-lg p-5 font-bold text-xl flex items-center justify-center gap-3 active:bg-orange-700 transition-colors"
          >
            <FileText size={28} strokeWidth={2.5} />
            Generate PDF Order
          </button>
        </div>
      </div>
    </div>
  );
}
