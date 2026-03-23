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
  pendingRestock?: PendingRestock | null;
  image?: string | null;
}

export interface Supplier {
  id: string;
  name: string;
  phone: string;
  items: string[];
}

export interface SupplierPrice {
  id?: string;
  supplierId: string;
  supplierName: string;
  inventoryItemId: string;
  price: number;
  lastUpdated: string;
}

export interface PendingRestock {
  quantity: number;
  supplier: string;
  estimatedCost: number;
  date: string;
}

export interface InventoryItemPayload {
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  supplier: string;
  targetPrice: number;
  pendingRestock: PendingRestock | null;
  image?: string | null;
}