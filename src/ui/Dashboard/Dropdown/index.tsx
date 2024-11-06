import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { ThreeDotsIcon } from '@/icons';
import { ButtonCustom } from '@/components';
import { productActions } from '@/mocks';

const DropdownIcon = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <ButtonCustom
          color="secondary"
          startContent={<ThreeDotsIcon width="5px" height="24px" />}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {productActions.map((item) => (
          <DropdownItem
            key={item.key}
            className={item.className}
            color={item.color}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownIcon;
