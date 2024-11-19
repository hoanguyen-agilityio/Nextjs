'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { APIs } from '@/services';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';
import { ROUTERS } from '@/constants';

const OverviewDetail = () => {
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

  return (
    <div className="flex gap-8">
      <Form
        data={data}
        modePage="detail"
        label="Edit Product"
        href={`${ROUTERS.EDIT_PRODUCT}/${id}`}
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

export default OverviewDetail;
