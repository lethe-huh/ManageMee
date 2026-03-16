// Analytics and performance data

export const analyticsData = {
  revenue: 721.50,
  cost: 343.40,
  profit: 378.10,
  margin: 52.4
};

export const performanceData = [
  { name: 'Roasted Chicken Rice', sales: 45 },
  { name: 'Char Kway Teow', sales: 52 },
  { name: 'Curry Laksa', sales: 38 },
  { name: 'Wonton Mee', sales: 20 }
];

export const financesData = [
  { name: 'Roasted Chicken Rice', revenue: 195, cost: 90, profit: 105 },
  { name: 'Char Kway Teow', revenue: 165, cost: 88, profit: 77 },
  { name: 'Curry Laksa', revenue: 155, cost: 82, profit: 73 },
  { name: 'Wonton Mee', revenue: 85, cost: 65, profit: 20 }
];

export const supplierUpdates = [
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
