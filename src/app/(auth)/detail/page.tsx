import { ProductPreview } from '@/components';

const DetailPage = () => {
  return (
    <ProductPreview
      imageSrc="https://picsum.photos/200/300"
      imageAlt="test"
      imageFallbackSrc="https://picsum.photos/200/300"
    />
  );
};

export default DetailPage;
