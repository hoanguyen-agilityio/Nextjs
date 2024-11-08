import { ProductList } from '@/types';
import { apiRequest } from './api';
import { PRODUCT_URL } from '@/constants';

const addData = async ({ products }: ProductList) => {
  try {
    if (!PRODUCT_URL) {
      throw new Error('PRODUCT_URL is not defined');
    }

    const response = await apiRequest(PRODUCT_URL, 'POST', products);
    return response;
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

const editData = async ({ products }: ProductList, id: string) => {
  try {
    if (!PRODUCT_URL) {
      throw new Error('PRODUCT_URL is not defined');
    }

    const response = await apiRequest(`${PRODUCT_URL}/${id}`, 'PUT', products);
    return response;
  } catch (error) {
    console.error('Error edit product:', error);
  }
};

const deleteData = async (id: string) => {
  try {
    if (!PRODUCT_URL) {
      throw new Error('PRODUCT_URL is not defined');
    }

    const response = await apiRequest(`${PRODUCT_URL}/${id}`, 'DELETE');
    return response;
  } catch (error) {
    console.error('Error delete product:', error);
  }
};

export { addData, editData, deleteData };
