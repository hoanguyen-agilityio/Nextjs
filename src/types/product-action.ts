export interface ProductAction {
  key: string;
  label: JSX.Element | string;
  color: 'default' | 'danger' | 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
  onOpen?: () => void;
}
