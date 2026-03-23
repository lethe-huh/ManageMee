import { apiRequest } from './api';
import type { CreateSalePayload, SaleRecord } from '../types/menu';

interface CreateSaleResponse {
  message: string;
  sale: SaleRecord;
}

export function createSale(payload: CreateSalePayload) {
  return apiRequest<CreateSaleResponse>('/api/sales', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function getSales(menuItemId?: string) {
  const query = menuItemId
    ? `?menuItemId=${encodeURIComponent(menuItemId)}`
    : '';

  return apiRequest<SaleRecord[]>(`/api/sales${query}`);
}