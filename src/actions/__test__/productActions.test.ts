import { APIs } from '@/services';
import {
  getDataProducts,
  handleAddProduct,
  handleDeleteProduct,
  handleEditProduct,
} from '../productActions';

jest.mock('@/services', () => ({
  APIs: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

const mockProduct = {
  id: '1',
  name: 'New Product',
  status: '',
  views: '1000',
  sales: '1000',
  conversion: '',
  total: '',
  download: '',
  link: '',
  personal: '',
};

describe('productActions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getDataProducts', () => {
    it('should fetch products successfully with search term', async () => {
      const mockProducts = [{ id: '1', name: 'Product 1' }];
      (APIs.get as jest.Mock).mockResolvedValue(mockProducts);

      const result = await getDataProducts('example');
      expect(APIs.get).toHaveBeenCalledWith('?search=example');
      expect(result).toEqual(mockProducts);
    });

    it('should fetch products successfully without search term', async () => {
      const mockProducts = [{ id: '1', name: 'Product 1' }];
      (APIs.get as jest.Mock).mockResolvedValue(mockProducts);

      const result = await getDataProducts();
      expect(APIs.get).toHaveBeenCalledWith('');
      expect(result).toEqual(mockProducts);
    });

    it('should return null on API error', async () => {
      (APIs.get as jest.Mock).mockRejectedValue(new Error('API error'));

      const result = await getDataProducts('example');
      expect(APIs.get).toHaveBeenCalledWith('?search=example');
      expect(result).toBeNull();
    });
  });

  describe('handleAddProduct', () => {
    it('should call APIs.post with the correct arguments', async () => {
      await handleAddProduct(mockProduct);

      expect(APIs.post).toHaveBeenCalledWith('', mockProduct);
    });

    it('should handle errors gracefully', async () => {
      (APIs.post as jest.Mock).mockRejectedValue(new Error('API error'));

      await handleAddProduct(mockProduct);
      expect(APIs.post).toHaveBeenCalled();
    });
  });

  describe('handleEditProduct', () => {
    it('should call APIs.put with the correct arguments', async () => {
      await handleEditProduct('1', mockProduct);

      expect(APIs.put).toHaveBeenCalledWith('/1', mockProduct);
    });

    it('should handle errors gracefully', async () => {
      (APIs.put as jest.Mock).mockRejectedValue(new Error('API error'));

      await handleEditProduct('1', mockProduct);
      expect(APIs.put).toHaveBeenCalled();
    });
  });

  describe('handleDeleteProduct', () => {
    it('should call APIs.delete with the correct arguments', async () => {
      await handleDeleteProduct('1');

      expect(APIs.delete).toHaveBeenCalledWith('/1');
    });

    it('should handle errors gracefully', async () => {
      (APIs.delete as jest.Mock).mockRejectedValue(new Error('API error'));

      const result = await handleDeleteProduct('1');
      expect(APIs.delete).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
