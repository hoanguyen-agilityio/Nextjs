'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { editData, getDataById } from '@/services';
import { IProducts } from '@/types';
import { revalidateTag } from 'next/cache';
import { Form, ProductPreview } from '@/components';

const OverviewEditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState<IProducts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const productId = Array.isArray(id) ? id[0] : id;
      const result = await getDataById(productId);
      setData(result as IProducts);
    };

    fetchData();
  }, [id]);

  const handleFormSubmit = async (products: IProducts[]) => {
    try {
      await editData({ products }, id as string);
      revalidateTag('product');
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