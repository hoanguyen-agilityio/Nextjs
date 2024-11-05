import { Form, ProductPreview } from '@/components';

const DetailPage = () => {
  return (
    <main className="flex gap-8">
      <Form />
      <ProductPreview
        imageSrc="https://picsum.photos/200/300"
        imageAlt="test"
        imageFallbackSrc="https://picsum.photos/200/300"
      />
    </main>
  );
};

export default DetailPage;
