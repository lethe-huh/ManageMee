import { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronUp, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { inventoryItems as initialItems } from '../data/mockData';
import { supplierPrices } from '../data/supplierPrices';
import { InventoryItem } from '../types/inventory';
import LogPrice from './LogPrice';
import AddEditItem from './AddEditItem';

export default function PriceComparison({ onFormStateChange }: { onFormStateChange?: (isOpen: boolean) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const [showLogPrice, setShowLogPrice] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [items, setItems] = useState<InventoryItem[]>(initialItems);
  const [isPriceTrackingExpanded, setIsPriceTrackingExpanded] = useState(true);
  const [isSupplierUpdatesExpanded, setIsSupplierUpdatesExpanded] = useState(false);
  const [showPriceChangeAlert, setShowPriceChangeAlert] = useState(false);
  const [chartMode, setChartMode] = useState<'sales' | 'finances'>('sales');
  const [showChartModeDropdown, setShowChartModeDropdown] = useState(false);

  // Mock supplier price updates data
  const supplierUpdates = [
    {
      id: '1',
      date: '5 Feb 2026',
      ingredient: 'Chicken Breast',
      supplier: 'Fresh Poultry Supplier',
      oldPrice: 8.50,
      newPrice: 9.20,
      change: 8.2,
      impact: 'Chicken Rice profit margin drops from 55% to 52%'
    },
    {
      id: '2',
      date: '3 Feb 2026',
      ingredient: 'Rice',
      supplier: 'Grain Wholesale Co',
      oldPrice: 1.20,
      newPrice: 1.10,
      change: -8.3,
      impact: 'All rice dishes profit margin improves by 2%'
    },
    {
      id: '3',
      date: '28 Jan 2026',
      ingredient: 'Soy Sauce',
      supplier: 'Asian Groceries Pte Ltd',
      oldPrice: 0.08,
      newPrice: 0.10,
      change: 25.0,
      impact: 'Minimal impact on overall margins (<1%)'
    }
  ];

  // Check if alert has been shown before
  const checkPriceAlert = () => {
    const hasSeenAlert = sessionStorage.getItem('priceChangeAlertShown');
    if (!hasSeenAlert && supplierUpdates.length > 0) {
      setShowPriceChangeAlert(true);
      sessionStorage.setItem('priceChangeAlertShown', 'true');
    }
  };

  // Analytics data
  const analyticsData = {
    revenue: 721.50,
    cost: 343.40,
    profit: 378.10,
    margin: 52.4
  };

  const performanceData = [
    { name: 'Chicken Rice', sales: 45 },
    { name: 'Char Kway Teow', sales: 52 },
    { name: 'Laksa', sales: 38 },
    { name: 'Nasi Lemak', sales: 20 }
  ];

  const financesData = [
    { name: 'Chicken Rice', revenue: 195, cost: 90, profit: 105 },
    { name: 'Char Kway Teow', revenue: 165, cost: 88, profit: 77 },
    { name: 'Laksa', revenue: 155, cost: 82, profit: 73 },
    { name: 'Nasi Lemak', revenue: 85, cost: 65, profit: 20 }
  ];

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpanded = (itemId: string) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  const handleLogPrice = (itemId: string) => {
    setSelectedItem(itemId);
    setShowLogPrice(true);
    if (onFormStateChange) {
      onFormStateChange(true);
    }
  };

  const handleAddItem = (item: Omit<InventoryItem, 'id' | 'lastUpdated'>) => {
    const newItem: InventoryItem = {
      ...item,
      id: Date.now().toString(),
      lastUpdated: new Date().toISOString()
    };
    setItems([...items, newItem]);
    setShowAddItem(false);
  };

  const getSupplierPricesForItem = (itemId: string) => {
    return supplierPrices.filter(sp => sp.inventoryItemId === itemId);
  };

  const calculateAveragePrice = (itemId: string) => {
    const prices = getSupplierPricesForItem(itemId);
    if (prices.length === 0) return 0;
    const sum = prices.reduce((acc, sp) => acc + sp.price, 0);
    return sum / prices.length;
  };

  const getPriceStatus = (price: number, average: number) => {
    const difference = ((price - average) / average) * 100;
    if (difference <= -5) return { color: 'green', label: 'BEST', icon: TrendingDown };
    if (difference >= 5) return { color: 'red', label: 'HIGH', icon: TrendingUp };
    return { color: 'orange', label: 'AVG', icon: DollarSign };
  };

  if (showLogPrice) {
    return (
      <LogPrice
        itemId={selectedItem}
        onClose={() => {
          setShowLogPrice(false);
          setSelectedItem(null);
          if (onFormStateChange) {
            onFormStateChange(false);
          }
        }}
      />
    );
  }

  if (showAddItem) {
    return (
      <AddEditItem
        onSave={handleAddItem}
        onCancel={() => setShowAddItem(false)}
      />
    );
  }

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof inventoryItems>);

  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-orange-600 rounded-lg p-4 mb-2">
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
        </div>
        
      </div>

      {/* Analytics Overview */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Revenue Today */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 font-bold text-xs mb-1">Revenue Today</p>
            <p className="text-green-600 font-bold text-2xl">${analyticsData.revenue.toFixed(2)}</p>
          </div>

          {/* Total Cost */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 font-bold text-xs mb-1">Total Cost</p>
            <p className="text-red-600 font-bold text-2xl">${analyticsData.cost.toFixed(2)}</p>
          </div>

          {/* Profit Today */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 font-bold text-xs mb-1">Profit Today</p>
            <p className="text-blue-600 font-bold text-2xl">${analyticsData.profit.toFixed(2)}</p>
          </div>

          {/* Avg Margin */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 font-bold text-xs mb-1">Avg Margin</p>
            <p className="text-gray-900 font-bold text-2xl">{analyticsData.margin.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Today's Performance</h2>
        <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
          {/* Chart Mode Dropdown */}
          <div className="relative mb-4">
            <button
              onClick={() => setShowChartModeDropdown(!showChartModeDropdown)}
              className="flex items-center justify-between w-full p-3 bg-white border-2 border-gray-300 rounded-lg active:bg-gray-50"
            >
              <span className="text-lg font-bold text-gray-900">
                {chartMode === 'sales' ? 'Sales' : 'Finances'}
              </span>
              <ChevronDown size={24} strokeWidth={2.5} className="text-gray-600" />
            </button>
            
            {showChartModeDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
                <button
                  onClick={() => {
                    setChartMode('sales');
                    setShowChartModeDropdown(false);
                  }}
                  className={`w-full p-3 text-left font-bold transition-colors ${
                    chartMode === 'sales'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-900 active:bg-gray-100'
                  }`}
                >
                  Sales
                </button>
                <button
                  onClick={() => {
                    setChartMode('finances');
                    setShowChartModeDropdown(false);
                  }}
                  className={`w-full p-3 text-left font-bold transition-colors ${
                    chartMode === 'finances'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-900 active:bg-gray-100'
                  }`}
                >
                  Finances
                </button>
              </div>
            )}
          </div>

          {/* Chart Display */}
          <ResponsiveContainer width="100%" height={200}>
            {chartMode === 'sales' ? (
              <BarChart data={performanceData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  stroke="#666666"
                  style={{ fontSize: '10px', fontWeight: 'normal' }}
                  tick={{ fill: '#666666' }}
                  interval={0}
                />
                <YAxis 
                  stroke="#666666"
                  style={{ fontSize: '10px', fontWeight: 'normal' }}
                  tick={{ fill: '#666666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    fontWeight: 'bold',
                    border: '2px solid #ea580c',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="sales" fill="#ea580c" radius={[8, 8, 0, 0]} />
              </BarChart>
            ) : (
              <BarChart data={financesData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  stroke="#666666"
                  style={{ fontSize: '10px', fontWeight: 'normal' }}
                  tick={{ fill: '#666666' }}
                  interval={0}
                />
                <YAxis 
                  stroke="#666666"
                  style={{ fontSize: '10px', fontWeight: 'normal' }}
                  tick={{ fill: '#666666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    fontWeight: 'bold',
                    border: '2px solid #666666',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="revenue" fill="#10B981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="cost" fill="#EF4444" radius={[8, 8, 0, 0]} />
                <Bar dataKey="profit" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Supplier Price Tracking Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsPriceTrackingExpanded(!isPriceTrackingExpanded)}
          className="w-full flex items-center justify-between mb-4 text-left"
        >
          <h2 className="text-xl font-bold text-gray-900">Ingredient Price Tracking</h2>
          {isPriceTrackingExpanded ? (
            <ChevronUp size={24} strokeWidth={2.5} className="text-gray-600" />
          ) : (
            <ChevronDown size={24} strokeWidth={2.5} className="text-gray-600" />
          )}
        </button>
        
        {isPriceTrackingExpanded && (
          <>
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" 
                size={24}
                strokeWidth={2.5}
              />
              <input
                type="text"
                placeholder="Search ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-orange-600"
              />
            </div>

            {/* Ingredient Cards by Category */}
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([category, categoryItems]) => (
                <div key={category}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{category}</h2>
                  <div className="space-y-3">
                    {categoryItems.map(item => {
                      const isExpanded = expandedItemId === item.id;
                      const itemSupplierPrices = getSupplierPricesForItem(item.id);
                      const averagePrice = calculateAveragePrice(item.id);
                      const bestPrice = itemSupplierPrices.length > 0 
                        ? Math.min(...itemSupplierPrices.map(sp => sp.price))
                        : item.targetPrice;

                      return (
                        <div
                          key={item.id}
                          className={`bg-white border-2 rounded-lg shadow-sm transition-all ${
                            isExpanded ? 'border-orange-600 shadow-md' : 'border-gray-300'
                          }`}
                        >
                          {/* Compact View */}
                          <div
                            onClick={() => toggleExpanded(item.id)}
                            className="p-4 cursor-pointer active:bg-gray-50"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">
                                  {item.name}
                                </h3>
                                <div className="flex items-baseline gap-2">
                                  <p className="text-gray-600 font-bold text-sm">Target:</p>
                                  <p className="text-orange-600 font-bold text-xl">
                                    ${item.targetPrice.toFixed(2)}
                                  </p>
                                  <p className="text-gray-600 font-bold text-sm">
                                    per {item.unit}
                                  </p>
                                </div>
                                {itemSupplierPrices.length > 0 && (
                                  <div className="flex items-baseline gap-2 mt-1">
                                    <p className="text-gray-600 font-bold text-sm">Best:</p>
                                    <p className="text-green-600 font-bold text-lg">
                                      ${bestPrice.toFixed(2)}
                                    </p>
                                  </div>
                                )}
                              </div>

                              {/* Expand Icon */}
                              <div className="text-gray-600">
                                {isExpanded ? (
                                  <ChevronUp size={28} strokeWidth={2.5} />
                                ) : (
                                  <ChevronDown size={28} strokeWidth={2.5} />
                                )}
                              </div>
                            </div>

                            {!isExpanded && (
                              <p className="text-gray-600 font-bold text-xs mt-2">
                                {itemSupplierPrices.length} suppliers • Tap for details
                              </p>
                            )}
                          </div>

                          {/* Expanded View - Supplier Prices */}
                          {isExpanded && (
                            <div className="border-t-2 border-gray-200 p-4">
                              {/* Market Average */}
                              {itemSupplierPrices.length > 0 && (
                                <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-3 mb-4">
                                  <p className="text-blue-900 font-bold text-sm mb-1">Market Average</p>
                                  <p className="text-blue-600 font-bold text-2xl">
                                    ${averagePrice.toFixed(2)} per {item.unit}
                                  </p>
                                </div>
                              )}

                              {/* Supplier Price List */}
                              <div className="space-y-2 mb-4">
                                {itemSupplierPrices.length > 0 ? (
                                  itemSupplierPrices.map((sp, index) => {
                                    const status = getPriceStatus(sp.price, averagePrice);
                                    const StatusIcon = status.icon;
                                    
                                    return (
                                      <div
                                        key={index}
                                        className={`bg-${status.color}-50 border-2 border-${status.color}-600 rounded-lg p-3`}
                                      >
                                        <div className="flex items-center justify-between mb-2">
                                          <div className="flex-1">
                                            <p className="font-bold text-gray-900">{sp.supplierName}</p>
                                            <p className="text-gray-600 font-bold text-xs">
                                              Updated: {sp.lastUpdated}
                                            </p>
                                          </div>
                                          <div className={`bg-${status.color}-600 text-white px-3 py-1 rounded font-bold text-xs flex items-center gap-1`}>
                                            <StatusIcon size={14} strokeWidth={2.5} />
                                            {status.label}
                                          </div>
                                        </div>
                                        <p className={`text-${status.color}-600 font-bold text-2xl`}>
                                          ${sp.price.toFixed(2)} <span className="text-base">per {item.unit}</span>
                                        </p>
                                      </div>
                                    );
                                  })
                                ) : (
                                  <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 text-center">
                                    <p className="text-gray-600 font-bold">No supplier prices logged yet</p>
                                  </div>
                                )}
                              </div>

                              {/* Log Price Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLogPrice(item.id);
                                }}
                                className="w-full bg-orange-600 text-white rounded-lg p-3 font-bold text-lg flex items-center justify-center gap-2 active:bg-orange-700 transition-colors"
                              >
                                <Plus size={24} strokeWidth={2.5} />
                                Add New Supplier
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}