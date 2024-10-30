import { MESSAGE, PRODUCT_URL } from '@/constants';
import { IProducts } from '@/types';
import { apiRequest } from '@/services';
import { getData, getDataOverview } from '../productActions';

jest.mock('@/services/api', () => ({
  apiRequest: jest.fn(),
}));

describe('getData', () => {
  const mockProducts: IProducts[] = [
    {
      key: '1',
      name: 'Basic design guideline',
      status: '9 Jan 2023 9:43 PM',
      views: '3147',
      sales: '1.004',
      conversion: '6,5%',
      total: '$14.238',
    },
    {
      key: '2',
      name: 'Basic design guideline',
      status: '9 Jan 2023 9:43 PM',
      views: '3147',
      sales: '1.004',
      conversion: '6,5%',
      total: '$14.238',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('fetches data with search query', async () => {
    (apiRequest as jest.Mock).mockResolvedValue(mockProducts);

    const result = await getData('test search');

    expect(apiRequest).toHaveBeenCalledWith(
      `${PRODUCT_URL}?search=test%20search`,
      'GET',
      undefined,
      10,
    );
    expect(result).toEqual(mockProducts);
  });

  test('fetches data without search query', async () => {
    (apiRequest as jest.Mock).mockResolvedValue(mockProducts);

    const result = await getData();

    expect(apiRequest).toHaveBeenCalledWith(PRODUCT_URL, 'GET', undefined, 10);
    expect(result).toEqual(mockProducts);
  });

  test('returns null when an error occurs', async () => {
    const error = new Error('API error');
    (apiRequest as jest.Mock).mockRejectedValue(error);

    const result = await getData('error search');

    expect(apiRequest).toHaveBeenCalledWith(
      `${PRODUCT_URL}?search=error%20search`,
      'GET',
      undefined,
      10,
    );
    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(MESSAGE.ERROR_GET_DATA, error);
  });
});

describe('getDataOverview', () => {
  const mockData = [
    { value: '$39,510.32', label: 'Total Revenue', growth: '+12.7%' },
    { value: '175,182', label: 'Total Sales', growth: '+5.1%' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return data when API request is successful', async () => {
    (apiRequest as jest.Mock).mockResolvedValue(mockData);

    const result = await getDataOverview();

    expect(apiRequest).toHaveBeenCalledWith(
      expect.any(String),
      'GET',
      undefined,
      60,
    );
    expect(result).toEqual(mockData);
  });

  test('should handle an error during API request', async () => {
    const errorMessage = 'API error';
    (apiRequest as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    await getDataOverview();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      MESSAGE.ERROR_GET_DATA,
      expect.any(Error),
    );
    consoleErrorSpy.mockRestore();
  });
});
