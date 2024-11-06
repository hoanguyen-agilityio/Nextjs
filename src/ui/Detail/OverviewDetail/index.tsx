import { Form, ProductPreview } from '@/components';

const OverviewDetail = () => {
  return (
    <div className="flex gap-8">
      <Form />
      <ProductPreview
        imageSrc="https://picsum.photos/200/300"
        imageAlt="test"
        imageFallbackSrc="https://picsum.photos/200/300"
      />
    </div>
  );
};

export default OverviewDetail;
