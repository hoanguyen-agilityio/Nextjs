import { SelectItem } from '@nextui-org/react';
import SelectCustom from './selectCustom';

interface IRenderSelect {
  defaultSelectedKey: string;
  items: Array<{ key: string; label: string }>;
  width: string;
}

const RenderSelect = ({ defaultSelectedKey, items, width }: IRenderSelect) => (
  <SelectCustom
    defaultSelectedKeys={[defaultSelectedKey]}
    color="default"
    size="default"
    className={`w-[${width}] ml-5`}
  >
    {items.map((item) => (
      <SelectItem key={item.key}>{item.label}</SelectItem>
    ))}
  </SelectCustom>
);

export default RenderSelect;
