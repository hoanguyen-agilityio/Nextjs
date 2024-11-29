'use client';

// Third party
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

// Models
import { IProducts } from '@/types';

// API
import { APIs } from '@/services';

// Components
import { Form, ProductPreview } from '@/components';

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
        id={id as string}
      />
      <ProductPreview
        imageSrc={data?.img?.[0] ?? ''}
        imageAlt={data?.name ?? 'Product Image'}
        price={data?.total ?? 'N/A'}
      />
    </div>
  );
};

export default OverviewDetail;
