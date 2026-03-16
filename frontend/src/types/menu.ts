export interface RecipeIngredient {
  inventoryItemId: string;
  inventoryItemName: string;
  quantity: number;
  unit: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: RecipeIngredient[];
  category: string;
  image?: string; // Optional image URL or data URL
}

export interface SaleRecord {
  menuItemId: string;
  menuItemName: string;
  quantity: number;
  timestamp: string;
}