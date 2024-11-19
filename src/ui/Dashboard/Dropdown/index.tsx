// Third party
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from '@nextui-org/react';

// Constants
import { productActions } from '@/mocks';

// Components
import { ModelDeleteProduct } from '@/ui';
import { ButtonCustom } from '@/components';
import { ThreeDotsIcon } from '@/icons';

interface DropdownIconProps {
  id: string | number;
}

const DropdownIcon = ({ id }: DropdownIconProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const actions = productActions(id, onOpen);
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <ButtonCustom
            aria-label="Dropdown Button"
            color="secondary"
            startContent={<ThreeDotsIcon width="5px" height="24px" />}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {actions.map((item) => (
            <DropdownItem
              onPress={item.onOpen}
              key={item.key}
              className={item.className}
              color={item.color || 'default'}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <ModelDeleteProduct
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        id={String(id)}
      />
    </>
  );
};

export default DropdownIcon;
