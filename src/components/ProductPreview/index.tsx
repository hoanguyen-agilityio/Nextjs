import { ClockIcon, RatingIcon, ThreeDotsIcon } from '@/icons';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react';
import { ChipCustom } from '../common';

interface ProductPreviewProp {
  imageSrc: string;
  imageAlt: string;
  imageFallbackSrc: string;
}

const ProductPreview = ({
  imageSrc,
  imageAlt,
  imageFallbackSrc,
}: ProductPreviewProp) => {
  return (
    <Card className="max-w-2xl pt-l pl-8 pr-lg pb-3xl h-[450px]">
      <CardHeader className="flex justify-between">
        <span className="font-bold text-2xl dark:text-white text-black-900">
          Product Preview
        </span>
        <ThreeDotsIcon width="5px" height="24px" className="cursor-pointer" />
      </CardHeader>
      <CardBody>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={493}
          height={240}
          loading="lazy"
          fallbackSrc={imageFallbackSrc}
        />
      </CardBody>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-[10px]">
            <ClockIcon width="17px" height="17px" />
            <p className="text-xsm text-grayBlue-400 font-semibold">
              9 Jan 2023 9:43 PM
            </p>
          </div>
          <div className="flex gap-[10px]">
            <RatingIcon
              width="114px"
              height="16px"
              className="cursor-pointer"
            />
            <p className="text-xsm text-grayBlue-400 font-semibold">4.3</p>
          </div>
        </div>
        <ChipCustom color="success" size="sm">
          $98.00
        </ChipCustom>
      </CardFooter>
    </Card>
  );
};

export default ProductPreview;
