'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getDataById } from '@/services';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';

const OverviewAddProduct = () => {
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

  return (
    <div className="flex gap-8">
      <Form data={data} modePage="add" label="Publish Product" />
      <ProductPreview
        imageSrc={data?.img?.[0] ?? ''}
        imageAlt={data?.name ?? 'Product Image'}
        imageFallbackSrc={data?.fallbackSrc ?? ''}
        price={data?.total ?? 'N/A'}
      />
    </div>
  );
};

export default OverviewAddProduct;
