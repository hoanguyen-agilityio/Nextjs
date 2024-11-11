'use client';
import { IMAGE } from '@/constants';
import { Form, ProductPreview } from '@/components';
import { handleAddProduct } from '@/actions';

const OverviewAddProduct = () => {
  return (
    <div className="flex gap-8">
      <Form
        modePage="add"
        label="Publish Product"
        onSubmit={handleAddProduct}
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
