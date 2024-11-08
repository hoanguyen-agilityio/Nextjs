'use client';
import { revalidateTag } from 'next/cache';
import { IMAGE } from '@/constants';
import { addData } from '@/services';
import { IProducts } from '@/types';
import { Form, ProductPreview } from '@/components';

const OverviewAddProduct = () => {
  const handleFormSubmit = async (products: IProducts[]) => {
    try {
      await addData({ products });
      revalidateTag('product');
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
