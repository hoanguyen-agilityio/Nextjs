'use client';
import { useParams } from 'next/navigation';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';
import { handleEditProduct } from '@/actions';
import { useEffect, useState } from 'react';
import { APIs } from '@/services';

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

  const handleEditProductSubmit = (formData: IProducts) => {
    handleEditProduct(id as string, formData);
  };

  return (
    <div className="flex gap-8">
      <Form
        data={data}
        modePage="edit"
        label="Publish Product"
        onSubmit={handleEditProductSubmit}
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
