// Third party
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

// Components
import { ChipCustom, ImageCustom } from '@/components';
import { ClockIcon, RatingIcon, ThreeDotsIcon } from '@/icons';

interface ProductPreviewProp {
  imageSrc: string;
  imageAlt: string;
  price: string;
}

const ProductPreview = ({ imageSrc, imageAlt, price }: ProductPreviewProp) => {
  return (
    <Card className="max-[1250px]:hidden max-w-2xl pt-l pl-8 pr-lg pb-3xl h-[460px]">
      <CardHeader className="flex justify-between">
        <span className="font-bold text-2xl dark:text-white text-black-900">
          Product Preview
        </span>
        <ThreeDotsIcon
          width="5px"
          height="24px"
          className="cursor-not-allowed"
        />
      </CardHeader>
      <CardBody>
        <ImageCustom
          src={imageSrc}
          alt={imageAlt}
          width={493}
          height={240}
          classNames={{
            wrapper: 'bg-cover',
          }}
        />
      </CardBody>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-[10px]">
            <ClockIcon width="17px" height="17px" />
            <p className="text-xsm text-ratio-200 dark:text-grayBlue-400">
              9 Jan 2023 9:43 PM
            </p>
          </div>
          <div className="flex gap-[10px]">
            <RatingIcon width="114px" height="16px" />
            <p className="text-xsm text-ratio-200 dark:text-grayBlue-400">
              4.3
            </p>
          </div>
        </div>
        <ChipCustom color="success" size="sm">
          {`$${price}`}
        </ChipCustom>
      </CardFooter>
    </Card>
  );
};

export default ProductPreview;
