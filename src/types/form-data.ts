import { ReactNode } from 'react';
import { IProducts } from './products';

export interface FormData {
  name: string;
  description: string;
  price: string;
  view: string;
  sales: string;
  conversion: string;
  download: string;
  productLink: string;
  personalNote: string;
}

export interface FormProps {
  data?: IProducts | null;
  modePage: 'add' | 'edit' | 'detail';
  label: string | ReactNode;
  onSubmit?: (formData: IProducts) => void;
  id?: string;
}
