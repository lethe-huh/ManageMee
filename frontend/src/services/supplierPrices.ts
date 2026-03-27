import { apiRequest } from './api';
import type { SupplierPrice } from '../types/inventory';

interface SupplierPricePayload {
  supplierId: string;
  inventoryItemId: string;
  price: number;
}

export function getSupplierPrices(inventoryItemId?: string) {
  const query = inventoryItemId
    ? `?inventoryItemId=${encodeURIComponent(inventoryItemId)}`
    : '';

  return apiRequest<SupplierPrice[]>(`/api/supplier-prices${query}`);
}

export function createSupplierPrice(payload: SupplierPricePayload) {
  return apiRequest<SupplierPrice>('/api/supplier-prices', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function updateSupplierPrice(id: string, payload: SupplierPricePayload) {
  return apiRequest<SupplierPrice>(`/api/supplier-prices/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}