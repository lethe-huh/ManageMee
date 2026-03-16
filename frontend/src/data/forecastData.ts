// Sales prediction and forecast data

export const prepRecommendations = [
  { name: 'Roasted Chicken Rice', prep: 80, change: 12 },
  { name: 'Char Kway Teow', prep: 65, change: 8 },
  { name: 'Wonton Mee', prep: 55, change: 0 },
  { name: 'Curry Laksa', prep: 45, change: -5 }
];

// Calculate total portions from prep recommendations
export const totalPrepPortions = prepRecommendations.reduce((sum, dish) => sum + dish.prep, 0);

export const todayForecast = {
  date: 'Tuesday, 8 Feb 2026',
  weather: 'Rainy',
  predictedSales: 2130,
  averageTuesday: 1610,
  confidence: 'High Confidence'
};

export const dishBreakdown = [
  { name: 'Roasted Chicken Rice', prep: 80, trend: 'up', percentage: 12 },
  { name: 'Char Siew Noodles', prep: 65, trend: 'up', percentage: 8 },
  { name: 'Wonton Mee', prep: 55, trend: 'stable', percentage: 0 },
  { name: 'Curry Laksa', prep: 45, trend: 'down', percentage: -5 },
  { name: 'Fried Hokkien Mee', prep: 40, trend: 'up', percentage: 15 }
];

export const historicalData = [
  { week: '28 Jan', sales: 720, isToday: false },
  { week: '4 Feb', sales: 680, isToday: false },
  { week: '11 Feb', sales: 710, isToday: false },
  { week: '18 Feb', sales: 695, isToday: false },
  { week: 'Today', sales: 850, isToday: true }
];

export const contextTags = [
  { label: 'Rainy Weather', impact: '-10%', color: 'blue' },
  { label: 'Public Holiday', impact: '+20%', color: 'green' }
];