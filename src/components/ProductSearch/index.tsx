'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { handleSearch } from '@/utils';
import { InputCustom } from '@/components';
import { SearchIcon } from '@/icons';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query, router);
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <InputCustom
        color="secondary"
        placeholder="search"
        size="md"
        radius="xs"
        startContent={
          <SearchIcon
            width="21px"
            height="21px"
            className="mr-5 cursor-pointer"
          />
        }
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
};
export default ProductSearch;
