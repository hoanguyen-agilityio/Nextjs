import { IProducts } from '@/types';
import { getFieldValue } from '../getFieldUtils';

describe('getFieldValue', () => {
  const mockData: IProducts = {
    name: 'Product A',
    status: 'In stock',
    total: '100',
    views: '150',
    sales: '50',
    conversion: '10%',
    download: 'Download Here',
    link: 'https://example.com/product-a',
    personal: 'This is a personal note',
  };

  test('should return the correct value for each label', () => {
    expect(getFieldValue('Name *', mockData)).toBe('Product A');
    expect(getFieldValue('Description', mockData)).toBe('In stock');
    expect(getFieldValue('Price', mockData)).toBe('100');
    expect(getFieldValue('Views', mockData)).toBe('150');
    expect(getFieldValue('Sales', mockData)).toBe('50');
    expect(getFieldValue('Conversion', mockData)).toBe('10%');
    expect(getFieldValue('Download Button', mockData)).toBe('Download Here');
    expect(getFieldValue('Product Link', mockData)).toBe(
      'https://example.com/product-a',
    );
    expect(getFieldValue('Personal Note', mockData)).toBe(
      'This is a personal note',
    );
  });

  test('should return an empty string for an unknown label', () => {
    expect(getFieldValue('Unknown Label', mockData)).toBe('');
  });

  test('should return an empty string if data is null', () => {
    expect(getFieldValue('Name *', null)).toBe('');
    expect(getFieldValue('Unknown Label', null)).toBe('');
  });
});
