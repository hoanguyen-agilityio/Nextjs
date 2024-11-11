'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { APIs } from '@/services';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';

const OverviewEditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState<IProducts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const productId = Array.isArray(id) ? id[0] : id;
      const result = await APIs.get(`/${productId}`);
      setData(result as IProducts);
    };

    fetchData();
  }, [id]);

  const handleFormSubmit = async (products: IProducts[]) => {
    try {
      // await editData({ products }, id as string);
      // revalidateTag('product');
      await APIs.put(id as string, products);
    } catch (err) {
      console.error('Error edit product:', err);
    }
  };

  return (
    <div className="flex gap-8">
      <Form
        data={data}
        modePage="edit"
        label="Publish Product"
        onSubmit={handleFormSubmit}
      />
      <ProductPreview
        imageSrc={data?.img?.[0] ?? ''}
        imageAlt={data?.name ?? 'Product Image'}
        imageFallbackSrc={data?.fallbackSrc ?? ''}
        price={data?.total ?? 'N/A'}
      />
    </div>
  );
};

export default OverviewEditProduct;
