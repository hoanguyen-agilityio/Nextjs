'use client';

// Third party
import { useParams } from 'next/navigation';

import { IProducts } from '@/types';

// Components
import { Form, ProductPreview } from '@/components';

const OverviewDetail = ({ data }: { data: IProducts }) => {
  const { id } = useParams();

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
