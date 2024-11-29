import { Image, ImageProps } from '@nextui-org/react';
import { IMAGE } from '@/constants';

const ImageCustom = (props: ImageProps) => {
  return <Image {...props} fallbackSrc={IMAGE.BLUR} loading="lazy" />;
};

export default ImageCustom;
