'use client';

// Third party
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

// Constants
import { MESSAGE } from '@/constants';

// Models
import { IProducts } from '@/types';

// API
import { handleEditProduct } from '@/actions';
import { APIs } from '@/services';

// Components
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

  const handleEditProductSubmit = (formData: IProducts) => {
    handleEditProduct(id as string, formData);
    toast.success(MESSAGE.EDIT_SUCCESSFULLY);
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
        price={data?.total ?? 'N/A'}
      />
    </div>
  );
};

export default OverviewEditProduct;
