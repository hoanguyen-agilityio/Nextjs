export interface IProducts {
  key: string;
  name: string;
  status: string;
  views: string;
  sales: string;
  conversion: string;
  total: string;
}

export interface ProductList {
  products: IProducts[];
}
