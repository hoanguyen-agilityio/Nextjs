'use client';
import {
  colors,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useState } from 'react';
import { items } from '@/mocks';
import { ButtonCustom } from '@/components';
import { CloseIcon, FilterIcon } from '@/icons';

interface Item {
  key: string;
  label: string;
}

const Filter = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseButton = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-row-reverse">
      <Dropdown>
        <DropdownTrigger>
          <ButtonCustom
            color="default"
            size="xs"
            radius="sm"
            startContent={<FilterIcon width="18px" height="16px" />}
            className="h-auto gap-4"
          >
            Filter
          </ButtonCustom>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions">
          {items.map((item) => (
            <DropdownItem key={item.key} onClick={() => handleItemClick(item)}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {selectedItem && (
        <ButtonCustom
          color="info"
          radius="sm"
          endContent={
            <CloseIcon width="12px" height="12px" fill={colors.blue[400]} />
          }
          className="text-xsm text-blue-400 font-semibold h-auto py-4 pr-4 pl-5 gap-lg mr-5"
          onClick={handleCloseButton}
        >
          {selectedItem.label}
        </ButtonCustom>
      )}
    </div>
  );
};

export default Filter;
