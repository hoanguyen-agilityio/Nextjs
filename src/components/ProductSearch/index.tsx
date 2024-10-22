'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ROUTERS } from '@/constant';
import { SearchCustom } from '@/components';
import { SearchIcon } from '@/icons';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`?search=${encodeURIComponent(query)}`);
    } else {
      router.push(ROUTERS.HOME);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchCustom
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
