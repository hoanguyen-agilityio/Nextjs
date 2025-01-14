'use client';

// Third party
import { SelectItem } from '@nextui-org/react';

// Components
import SelectCustom from '../SelectCustom';

interface IRenderSelect {
  defaultSelectedKey: string;
  items: Array<{ key: string; label: string }>;
  className: string;
  ariaLabel: string;
}

const RenderSelect = ({
  defaultSelectedKey,
  items,
  className,
  ariaLabel,
}: IRenderSelect) => (
  <SelectCustom
    aria-label={ariaLabel}
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
