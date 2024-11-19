'use client';
import { toast } from 'react-toastify';
import { IMAGE, MESSAGE, ROUTERS } from '@/constants';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';
import { handleAddProduct } from '@/actions';

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
        price="$99.99"
      />
    </div>
  );
};

export default OverviewAddProduct;
