'use client';
import { Form, ProductPreview } from '@/components';
import { IMAGE } from '@/constants';
import { addData } from '@/services';
import { IProducts } from '@/types';

const OverviewAddProduct = () => {
  const handleFormSubmit = async (products: IProducts[], reset: () => void) => {
    try {
      const response = await addData({ products });

      if (response) {
        reset();
      }
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
