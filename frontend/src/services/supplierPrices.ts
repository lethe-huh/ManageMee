import { apiRequest } from './api';
import type { SupplierPrice } from '../types/inventory';

export function getSupplierPrices(inventoryItemId?: string) {
  const query = inventoryItemId
    ? `?inventoryItemId=${encodeURIComponent(inventoryItemId)}`
    : '';

  return apiRequest<SupplierPrice[]>(`/api/supplier-prices${query}`);
}