import { PRODUCT_URL } from '@/constants';
import { apiRequest } from './api';

export const getDataById = async (id: string) => {
  const response = await apiRequest(`${PRODUCT_URL}/${id}`, 'GET');
  return response;
};
