export interface IProducts {
  key: string;
  img: string;
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

export interface TableRowCustomProps {
  item: IProducts;
  index: number;
}
