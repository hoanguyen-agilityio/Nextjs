import { ButtonCustom, TableSkeleton } from '@/components';
import { IMAGE } from '@/constants';
import { NewCustomerIcon, RightArrowUp } from '@/icons';
import { APIs } from '@/services';
import { IProducts } from '@/types';
import { OverviewDetail } from '@/ui';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const product = await APIs.get<IProducts>(`/${params.id}`);
  const productImage =
    product.img && product.img.length > 0 ? product.img[0] : IMAGE.DEFAULT;

  return {
    title: `Detail Product: ${product.name}`,
    description: `View details for the product "${product.name}". Price: $${product.total}.`,
    icons: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
    openGraph: {
      title: `Product Details: ${product.name}`,
      description: `Discover more about the product "${product.name}". Price: $${product.total}`,
      url: `/products/${product.id}`,
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
};

const DetailPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;

  const data = await APIs.get<IProducts | 'string'>(`/${id}`);

  if (typeof data === 'string') notFound();

  return (
    <section className="pb-[52px] pl-7 pr-[50px] pt-5">
      <div className="flex justify-between mb-l sm:flex-row flex-col sm:items-center items-start gap-5 sm:gap-0">
        <h1 className="font-bold text-3xl">Detail</h1>
        <div className="flex gap-5 flex-wrap">
          <ButtonCustom
            color="default"
            radius="sm"
            className="h-auto gap-6 cursor-not-allowed max-[420px]:w-full"
            size="xs"
            startContent={<RightArrowUp width="14px" height="13px" />}
          >
            Export
          </ButtonCustom>
          <ButtonCustom
            color="dark"
            radius="sm"
            size="xxl"
            className="p-4 h-auto gap-4 text-white dark:text-black-900 cursor-not-allowed max-[420px]:w-full"
            startContent={
              <NewCustomerIcon width="26px" height="26px" fill="white" />
            }
          >
            New Customer
          </ButtonCustom>
        </div>
      </div>
      <Suspense fallback={<TableSkeleton productCount={10} />}>
        <OverviewDetail data={data} />
      </Suspense>
    </section>
  );
};

export default DetailPage;
