import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from '@nextui-org/react';
import { ThreeDotsIcon } from '@/icons';
import { ButtonCustom } from '@/components';
import { productActions } from '@/mocks';
import { ModelDeleteProduct } from '@/ui/DeleteProduct';

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
      <ModelDeleteProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default DropdownIcon;
