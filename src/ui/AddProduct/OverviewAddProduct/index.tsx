'use client';
import { IMAGE, ROUTERS } from '@/constants';
import { APIs } from '@/services';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';

const OverviewAddProduct = () => {
  const handleFormSubmit = async (products: IProducts[]) => {
    try {
      await APIs.post(ROUTERS.EMPTY, products);
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };
  return (
    <div className="flex gap-8">
      <Form
        modePage="add"
        label="Publish Product"
        onSubmit={handleFormSubmit}
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
