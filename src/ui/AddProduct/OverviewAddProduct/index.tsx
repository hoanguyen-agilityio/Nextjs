'use client';

// Third party
import { toast } from 'react-toastify';

// Constants
import { IMAGE, MESSAGE } from '@/constants';

// Models
import { IProducts } from '@/types';

// API
import { handleAddProduct } from '@/actions';

// Components
import { Form, ProductPreview } from '@/components';

const OverviewAddProduct = () => {
  const handleAddProductSubmit = async (product: IProducts) => {
    try {
      await handleAddProduct(product);
      toast.success(MESSAGE.ADD_SUCCESSFULLY);
    } catch (error) {
      toast.error(MESSAGE.ERROR_ADD_DATA);
    }
  };

  return (
    <div className="flex gap-8">
      <Form
        modePage="add"
        label="Publish Product"
        onSubmit={handleAddProductSubmit}
      />
      <ProductPreview
        imageSrc={IMAGE.DEFAULT}
        imageAlt="Image default"
        price="99.99"
      />
    </div>
  );
};

export default OverviewAddProduct;
