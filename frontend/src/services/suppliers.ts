import { apiRequest } from './api';
import type { Supplier } from '../types/inventory';

export function getSuppliers() {
  return apiRequest<Supplier[]>('/api/suppliers');
}

export function createSupplier(payload: { name: string; phone: string; items: string[] }) {
  return apiRequest<Supplier>('/api/suppliers', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}