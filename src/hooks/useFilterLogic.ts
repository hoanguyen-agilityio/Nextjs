import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Item } from '@/types';

const useFilterLogic = (items: Item[], currentFilterKey: string | null) => {
  const router = useRouter();

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

  return { selectedItem, handleItemClick, handleCloseButton };
};

export default useFilterLogic;
