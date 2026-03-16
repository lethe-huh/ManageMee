// App-wide constants and configuration data

export const categories = [
  'Noodles', 
  'Rice', 
  'Protein', 
  'Vegetables', 
  'Condiments', 
  'Beverages', 
  'Other'
];

export const dishCategories = [
  'Rice Dishes',
  'Noodle Dishes',
  'Other'
];

// Define units based on category
export const getUnitsForCategory = (category: string): string[] => {
  switch (category) {
    case 'Rice':
      return ['g', 'kg'];
    case 'Noodles':
      return ['g', 'kg'];
    case 'Protein':
      return ['g', 'kg', 'pcs'];
    case 'Vegetables':
      return ['g', 'kg', 'pcs'];
    case 'Condiments':
      return ['ml', 'L'];
    case 'Beverages':
      return ['ml', 'L'];
    default:
      return ['kg', 'L', 'pcs', 'g', 'ml'];
  }
};

// Quick links configuration for Dashboard
export const quickLinksConfig = [
  { id: 1, label: 'Track Orders', icon: 'Zap' },
  { id: 2, label: 'Check Restock', icon: 'Package' },
  { id: 3, label: 'View Analytics', icon: 'BarChart3' },
  { id: 4, label: 'Schedule', icon: 'Calendar' },
  { id: 5, label: 'Alerts', icon: 'Bell' }
];
