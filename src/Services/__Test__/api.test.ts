import { apiRequest } from '../api';

global.fetch = jest.fn();

describe('apiRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('makes a GET request without data', async () => {
    const mockResponse = { success: true };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await apiRequest<{ success: boolean }>(
      'https://api.example.com/data',
      'GET',
    );

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: undefined,
    });
    expect(result).toEqual(mockResponse);
  });
});
