'use client';
import { Form, ProductPreview } from '@/components';
import { IMAGE } from '@/constants';
import { addData } from '@/services';
import { IProducts } from '@/types';
import { revalidatePath } from 'next/cache';

const OverviewAddProduct = () => {
  const handleFormSubmit = async (products: IProducts[]) => {
    try {
      const response = await addData({ products });
      return response;
    } catch (err) {
      console.error('Error adding product:', err);
    } finally {
      revalidatePath('/');
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
