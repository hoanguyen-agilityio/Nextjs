import { revalidateTag } from 'next/cache';
import { unstable_noStore as noStore } from 'next/cache';
import { API_PATH, PRODUCT_URL } from '../constants';
class API {
  async get<T>(path?: string, time?: number): Promise<T> {
    const response = await fetch(`${PRODUCT_URL}${path}`, {
      method: 'GET',
      next: {
        tags: [API_PATH.PRODUCTS],

        // Re-validate every minute
        revalidate: time || 60,
      },
    }).catch((error) => {
      throw new Error(error);
    });

    return response.json();
  }

  async post<T>(path?: string, payload: object = {}): Promise<T> {
    noStore();

    const response = await fetch(`${PRODUCT_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
      }),
    }).catch((error) => {
      throw new Error(error);
    });

    revalidateTag(API_PATH.PRODUCTS);
    return response.json();
  }

  async put<T>(path: string, payload: object = {}): Promise<T> {
    noStore();
    console.log('Hoá nè', `${PRODUCT_URL}${path}`);

    const response = await fetch(`${PRODUCT_URL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    }).catch((error) => {
      throw new Error(error);
    });

    revalidateTag(API_PATH.PRODUCTS);
    return response.json();
  }

  async delete<T>(path: string): Promise<T> {
    noStore();

    const response = await fetch(`${PRODUCT_URL}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      throw new Error(error);
    });

    revalidateTag(API_PATH.PRODUCTS);
    return response.json();
  }
}

export const APIs = new API();
