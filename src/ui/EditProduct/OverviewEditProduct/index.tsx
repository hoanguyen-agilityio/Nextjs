'use client';

// Third party
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

// Constants
import { MESSAGE } from '@/constants';

// Models
import { IProducts } from '@/types';

// API
import { handleEditProduct } from '@/actions';

// Components
import { Form, ProductPreview } from '@/components';

const OverviewEditProduct = ({ data }: { data: IProducts }) => {
  const { id } = useParams();

  const handleEditProductSubmit = (formData: IProducts) => {
    try {
      handleEditProduct(id as string, formData);
      toast.success(MESSAGE.EDIT_SUCCESSFULLY);
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(`${MESSAGE.ERROR_EDIT_DATA} ${errorMessage}`);
    }
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
