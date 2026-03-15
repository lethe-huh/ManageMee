import { InventoryItem, Supplier, SupplierPrice } from '../types/inventory';

export const inventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Yellow Noodles',
    category: 'Noodles',
    quantity: 3.5,
    unit: 'kg',
    minQuantity: 5,
    supplier: 'Ah Seng Trading',
    lastUpdated: '2026-02-08T08:30:00',
    targetPrice: 3.50
  },
  {
    id: '2',
    name: 'Bee Hoon',
    category: 'Noodles',
    quantity: 8.2,
    unit: 'kg',
    minQuantity: 4,
    supplier: 'Ah Seng Trading',
    lastUpdated: '2026-02-08T08:30:00',
    targetPrice: 4.20
  },
  {
    id: '3',
    name: 'Eggs',
    category: 'Protein',
    quantity: 24,
    unit: 'pcs',
    minQuantity: 30,
    supplier: 'Fresh Supplies Co',
    lastUpdated: '2026-02-08T09:00:00',
    targetPrice: 0.35
  },
  {
    id: '4',
    name: 'Prawns',
    category: 'Protein',
    quantity: 4.2,
    unit: 'kg',
    minQuantity: 3,
    supplier: 'Fresh Supplies Co',
    lastUpdated: '2026-02-08T07:00:00',
    targetPrice: 18.00
  },
  {
    id: '5',
    name: 'Chicken Breast',
    category: 'Protein',
    quantity: 15.5,
    unit: 'kg',
    minQuantity: 8,
    supplier: 'Fresh Supplies Co',
    lastUpdated: '2026-02-08T07:00:00',
    targetPrice: 8.50
  },
  {
    id: '6',
    name: 'Bok Choy',
    category: 'Vegetables',
    quantity: 1.2,
    unit: 'kg',
    minQuantity: 3,
    supplier: 'Green Veggie Market',
    lastUpdated: '2026-02-08T06:30:00',
    targetPrice: 2.80
  },
  {
    id: '7',
    name: 'Bean Sprouts',
    category: 'Vegetables',
    quantity: 4.8,
    unit: 'kg',
    minQuantity: 2,
    supplier: 'Green Veggie Market',
    lastUpdated: '2026-02-08T06:30:00',
    targetPrice: 1.50
  },
  {
    id: '8',
    name: 'Chili Paste',
    category: 'Condiments',
    quantity: 1.8,
    unit: 'kg',
    minQuantity: 1.5,
    supplier: 'Spice World',
    lastUpdated: '2026-02-08T08:00:00',
    targetPrice: 12.00
  },
  {
    id: '9',
    name: 'Soy Sauce',
    category: 'Condiments',
    quantity: 3.2,
    unit: 'L',
    minQuantity: 2,
    supplier: 'Spice World',
    lastUpdated: '2026-02-08T08:00:00',
    targetPrice: 6.50
  },
  {
    id: '10',
    name: 'Cooking Oil',
    category: 'Condiments',
    quantity: 12.5,
    unit: 'L',
    minQuantity: 10,
    supplier: 'Ah Seng Trading',
    lastUpdated: '2026-02-08T08:30:00',
    targetPrice: 5.00
  },
  {
    id: '11',
    name: 'Brown Rice',
    category: 'Rice',
    quantity: 12.5,
    unit: 'kg',
    minQuantity: 10,
    supplier: 'Ah Seng Trading',
    lastUpdated: '2026-02-22T08:30:00',
    targetPrice: 5.00
  },
  {
    id: '12',
    name: 'Lemon Sauce',
    category: 'Condiments',
    quantity: 5,
    unit: 'L',
    minQuantity: 2.5,
    supplier: 'Ah Seng Trading',
    lastUpdated: '2026-02-22T08:30:00',
    targetPrice: 5.00
  }
];

export const suppliers: Supplier[] = [
  {
    id: '1',
    name: 'Ah Seng Trading',
    phone: '+6591234567',
    items: ['Yellow Noodles', 'Bee Hoon', 'Cooking Oil', 'Brown Rice']
  },
  {
    id: '2',
    name: 'Fresh Supplies Co',
    phone: '+6598765432',
    items: ['Eggs', 'Prawns', 'Chicken Breast']
  },
  {
    id: '3',
    name: 'Green Veggie Market',
    phone: '+6587654321',
    items: ['Bok Choy', 'Bean Sprouts']
  },
  {
    id: '4',
    name: 'Spice World',
    phone: '+6593456789',
    items: ['Chili Paste', 'Soy Sauce']
  },
  {
    id: '5',
    name: 'Wholesale Direct',
    phone: '+6596543210',
    items: ['Brown Rice']
  },
  {
    id: '6',
    name: 'Market Fresh',
    phone: '+6594567890',
    items: []
  },
  {
    id: '7',
    name: 'Seafood King',
    phone: '+6592345678',
    items: []
  }
];

export const todaySalesData = [
  { time: '7am', sales: 120 },
  { time: '8am', sales: 180 },
  { time: '9am', sales: 175 },
  { time: '10am', sales: 80 },
  { time: '11am', sales: 220 },
  { time: '12pm', sales: 310 },
  { time: '1pm', sales: 250 },
  { time: '2pm', sales: 140 }
];
