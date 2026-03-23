import { apiRequest } from './api';
import type { InventoryItem, InventoryItemPayload } from '../types/inventory';

export function getInventory() {
  return apiRequest<InventoryItem[]>('/api/inventory');
}

export function getLowStockInventory() {
  return apiRequest<InventoryItem[]>('/api/inventory/low-stock');
}

export function createInventoryItem(payload: InventoryItemPayload) {
  return apiRequest<InventoryItem>('/api/inventory', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function updateInventoryItem(id: string, payload: InventoryItemPayload) {
  return apiRequest<InventoryItem>(`/api/inventory/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export function deleteInventoryItem(id: string) {
  return apiRequest<InventoryItem>(`/api/inventory/${id}`, {
    method: 'DELETE',
  });
}