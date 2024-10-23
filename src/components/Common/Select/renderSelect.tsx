'use client';
import { SelectItem } from '@nextui-org/react';
import SelectCustom from './SelectCustom';

interface IRenderSelect {
  defaultSelectedKey: string;
  items: Array<{ key: string; label: string }>;
  className: string;
}

const RenderSelect = ({
  defaultSelectedKey,
  items,
  className,
}: IRenderSelect) => (
  <SelectCustom
    aria-hidden={true}
    defaultSelectedKeys={[defaultSelectedKey]}
    color="default"
    size="default"
    className={`ml-5 ${className}`}
  >
    {items.map((item) => (
      <SelectItem key={item.key}>{item.label}</SelectItem>
    ))}
  </SelectCustom>
);

export default RenderSelect;
