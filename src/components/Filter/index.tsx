'use client';
import {
  colors,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { items } from '@/mocks';
import { ButtonCustom } from '@/components';
import { CloseIcon, FilterIcon } from '@/icons';

interface Item {
  key: string;
  label: string;
}

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentFilterKey = searchParams.get('filter');

  const selectedItem =
    items.find((item) => item.key === currentFilterKey) || null;

  const handleItemClick = useCallback(
    (item: Item) => {
      const params = new URLSearchParams(window.location.search);
      params.set('filter', item.key);
      router.push(`?${params.toString()}`);
    },
    [router],
  );

  const handleCloseButton = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete('filter');
    router.push(`?${params.toString()}`);
  }, [router]);

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

export default memo(Filter, isEqual);
