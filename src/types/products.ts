export interface IProducts {
  key: string;
  name: string;
  status: string;
  views: string;
  sales: string;
  conversion: string;
  total: string;
  img: string[];
  id: string;
  fallbackSrc: string;
  file: string[];
  download: string;
  link: string;
  personal: string;
}

export interface ProductList {
  products: IProducts[];
}

export interface TableRowCustomProps {
  item: IProducts;
  index: number;
  currentPage: number;
  itemsPerPage: number;
}
