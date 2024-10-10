'use client';
import { SelectItem } from '@nextui-org/react';
import SelectCustom from './selectCustom';

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