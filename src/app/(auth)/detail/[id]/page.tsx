import { ButtonCustom } from '@/components';
import { IMAGE } from '@/constants';
import { NewCustomerIcon, RightArrowUp } from '@/icons';
import { APIs } from '@/services';
import { IProducts } from '@/types';
import { OverviewDetail } from '@/ui';
import { Metadata } from 'next';

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

const DetailPage = () => {
  return (
    <main className="pb-[52px] pl-7 pr-[50px] pt-5">
      <div className="flex justify-between items-center mb-l">
        <h1 className="font-bold text-3xl">Detail</h1>
        <div className="flex">
          <ButtonCustom
            color="default"
            radius="sm"
            className="mr-5 h-auto gap-6"
            size="xs"
            startContent={<RightArrowUp width="14px" height="13px" />}
          >
            Export
          </ButtonCustom>
          <ButtonCustom
            color="dark"
            radius="sm"
            className="p-4 h-auto gap-4 text-xsm font-semibold text-white dark:text-black-900"
            startContent={
              <NewCustomerIcon width="26px" height="26px" fill="white" />
            }
          >
            New Customer
          </ButtonCustom>
        </div>
      </div>
      <OverviewDetail />
    </main>
  );
};

export default DetailPage;
