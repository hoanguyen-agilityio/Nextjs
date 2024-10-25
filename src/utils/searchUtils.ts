import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ROUTERS } from '@/constant';

const handleSearch = (query: string, router: AppRouterInstance) => {
  if (query.trim()) {
    router.push(`?search=${encodeURIComponent(query)}`);
  } else {
    router.push(ROUTERS.HOME);
  }
};

export { handleSearch };
