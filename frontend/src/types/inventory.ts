export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  supplier: string;
  lastUpdated: string;
  targetPrice: number; // Price per unit in SGD
  pendingRestock?: {
    quantity: number;
    supplier: string;
    estimatedCost: number;
    date: string;
  };
}

export interface Supplier {
  id: string;
  name: string;
  phone: string;
  items: string[];
}

export interface SupplierPrice {
  id: string;
  supplierId: string;
  supplierName: string;
  inventoryItemId: string;
  price: number; // Price per unit
  lastUpdated: string;
}