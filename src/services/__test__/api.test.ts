import { API_PATH, PRODUCT_URL } from '@/constants';
import { APIs } from '../api';

// Mock fetch globally
global.fetch = jest.fn();

// Mock next/cache methods
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
  unstable_noStore: jest.fn(),
}));

// Import the mock to use revalidateTag
import { revalidateTag } from 'next/cache';

describe('API class', () => {
  const mockResponse = { success: true };

  beforeEach(() => {
    // Reset the mocks before each test
    jest.clearAllMocks();
  });

  test('should make a GET request and return data', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = await APIs.get('/products');
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${PRODUCT_URL}/products`,
      expect.objectContaining({
        method: 'GET',
        next: expect.objectContaining({
          tags: [API_PATH.PRODUCTS],
          revalidate: 60,
        }),
      }),
    );
  });

  test('should make a POST request and return data', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const payload = { name: 'New Product' };
    const data = await APIs.post('/products', payload);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${PRODUCT_URL}/products`,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
    );
    expect(revalidateTag).toHaveBeenCalledWith(API_PATH.PRODUCTS);
  });

  test('should make a PUT request and return data', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const payload = { name: 'Updated Product' };
    const data = await APIs.put('/products/1', payload);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${PRODUCT_URL}/products/1`,
      expect.objectContaining({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
    );
    expect(revalidateTag).toHaveBeenCalledWith(API_PATH.PRODUCTS);
  });

  test('should make a DELETE request and return data', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = await APIs.delete('/products/1');
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${PRODUCT_URL}/products/1`,
      expect.objectContaining({
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    expect(revalidateTag).toHaveBeenCalledWith(API_PATH.PRODUCTS);
  });

  test('should throw an error when a GET request fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(APIs.get('/products')).rejects.toThrow('Network error');
  });

  test('should throw an error when a POST request fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(APIs.post('/products')).rejects.toThrow('Network error');
  });

  test('should throw an error when a PUT request fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(APIs.put('/products/1')).rejects.toThrow('Network error');
  });

  test('should throw an error when a DELETE request fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(APIs.delete('/products/1')).rejects.toThrow('Network error');
  });
});
