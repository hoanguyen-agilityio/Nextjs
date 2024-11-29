// Third party
import { revalidateTag } from 'next/cache';

// Constants
import { API_PATH, PRODUCT_URL } from '@/constants';

class API {
  private getFullUrl(path?: string, url?: string) {
    return url ? url : `${PRODUCT_URL}${path}`;
  }

  async get<T>(path?: string, time?: number, url?: string): Promise<T> {
    const fullUrl = this.getFullUrl(path, url);
    const response = await fetch(fullUrl, {
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

  async post(path?: string, payload: object = {}) {
    await fetch(`${PRODUCT_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
      }),
    }).catch((error) => {
      const errorMessage = (error as Error).message;
      throw new Error(errorMessage);
    });

    revalidateTag(API_PATH.PRODUCTS);
  }

  async put(path: string, payload: object = {}) {
    await fetch(`${PRODUCT_URL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    }).catch((error) => {
      throw new Error(error);
    });

    revalidateTag(API_PATH.PRODUCTS);
  }

  async delete(path: string) {
    await fetch(`${PRODUCT_URL}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      throw new Error(error);
    });

    revalidateTag(API_PATH.PRODUCTS);
  }
}

export const APIs = new API();
