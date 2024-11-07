import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { ThreeDotsIcon } from '@/icons';
import { ButtonCustom } from '@/components';
import { productActions } from '@/mocks';

interface DropdownIconProps {
  id: string | number;
}

const DropdownIcon = ({ id }: DropdownIconProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <ButtonCustom
          color="secondary"
          startContent={<ThreeDotsIcon width="5px" height="24px" />}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {productActions(id).map((item) => (
          <DropdownItem
            key={item.key}
            className={item.className}
            color={item.color || 'default'}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownIcon;
