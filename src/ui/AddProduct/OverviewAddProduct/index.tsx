'use client';

// Third party
import { toast } from 'react-toastify';

// Constants
import { IMAGE, MESSAGE, ROUTERS } from '@/constants';

// Models
import { IProducts } from '@/types';

// API
import { handleAddProduct } from '@/actions';

// Components
import { Form, ProductPreview } from '@/components';

const OverviewAddProduct = () => {
  const handleAddProductSubmit = async (product: IProducts) => {
    toast.success(MESSAGE.ADD_SUCCESSFULLY);
    await handleAddProduct(product);
  };

  return (
    <div className="flex gap-8">
      <Form
        modePage="add"
        label="Publish Product"
        onSubmit={handleAddProductSubmit}
        href={ROUTERS.EMPTY}
      />
      <ProductPreview
        imageSrc={IMAGE.DEFAULT}
        imageAlt="Image default"
        imageFallbackSrc={IMAGE.BLUR}
        price="99.99"
      />
    </div>
  );
};

export default OverviewAddProduct;
