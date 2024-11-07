'use client';
import { Card } from '@nextui-org/react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { ReactNode, useEffect } from 'react';
import { KEY_SWITCH, MESSAGE, REGEX, ROUTERS } from '@/constants';
import { IProducts } from '@/types';
import { normalizeUrl } from '@/utils';
import {
  Media,
  File,
  CheckboxCustom,
  KeySwitch,
  ButtonCustom,
  InputField,
} from '@/components';
import { BackIcon } from '@/icons';

interface FormProps {
  data?: IProducts | null;
  modePage: 'add' | 'edit' | 'detail';
  label: string | ReactNode;
  onSubmit?: (formData: IProducts, reset: () => void) => void;
}

const Form = ({ data, modePage, label, onSubmit }: FormProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: data?.name || '',
      description: data?.status || '',
      price: data?.total || '',
      view: data?.views || '',
      sales: data?.sales || '',
      conversion: data?.conversion || '',
      download: data?.download || '',
      productLink: data?.link || '',
      personalNote: data?.personal || '',
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.name || '',
        description: data.status || '',
        price: data.total || '',
        view: data.views || '',
        sales: data.sales || '',
        conversion: data.conversion || '',
        download: data.download || '',
        productLink: data.link || '',
        personalNote: data.personal || '',
      });
    }
  }, [data, reset]);

  const safeOnSubmit = (formData: IProducts) => {
    onSubmit && onSubmit(formData, reset);
  };

  return (
    <Card className="flex-row min-w-3xl w-full pt-6 pr-3xl pl-[52px] pb-10 gap-9">
      <form
        key={data?.id || 'default'}
        className="w-full"
        onSubmit={handleSubmit(safeOnSubmit)}
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: MESSAGE.NAME_REQUIRED,
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Name *"
              message="Give your product a short and clear name. 30 characters is recommended."
              className="mt-2"
              size="xl"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{
            required: MESSAGE.DESCRIPTION_REQUIRED,
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Description"
              message="Give your product a short and clear description."
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{
            required: MESSAGE.PRICE_REQUIRED,
            pattern: {
              value: REGEX.NUMBER,
              message: MESSAGE.VALID_NUMBER,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Price *"
              placeholder="0.00"
              message="Give your product a final price."
              className="mt-2"
              classWrapper="mt-3xl"
              size="xxl"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="font-semibold text-xsm">$</span>
                </div>
              }
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Controller
          name="view"
          control={control}
          rules={{
            required: MESSAGE.VIEW_REQUIRED,
            pattern: {
              value: REGEX.NUMBER,
              message: MESSAGE.VALID_NUMBER,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="View"
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Controller
          name="sales"
          control={control}
          rules={{
            required: MESSAGE.SALES_REQUIRED,
            pattern: {
              value: REGEX.NUMBER,
              message: MESSAGE.VALID_NUMBER,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Sales"
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Controller
          name="conversion"
          control={control}
          rules={{
            required: MESSAGE.CONVERSION_REQUIRED,
            pattern: {
              value: REGEX.PERCENT,
              message: MESSAGE.VALID_PERCENT,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Conversion"
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Media
          onImagesChange={(images) => console.log(images)}
          data={data ? { img: data.img } : undefined}
          mode={modePage}
        />
        <File
          onFilesChange={(file) => console.log(file)}
          data={
            data && data.link
              ? { link: Array.isArray(data.link) ? data.link : [data.link] }
              : undefined
          }
          mode={modePage}
        />
        {KEY_SWITCH.map(
          ({ title, describe, classWrapper, defaultSelected }) => (
            <KeySwitch
              key={title}
              title={title}
              describe={describe}
              classWrapper={classWrapper}
              isDisabled={modePage === 'detail'}
              defaultSelected={defaultSelected}
            />
          ),
        )}
        <Controller
          name="download"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              label="Download Button"
              message="Customize the button text in the email receipt."
              size="xl"
              classWrapper="mt-[60px]"
              className="mt-2"
            />
          )}
        />
        <Controller
          name="productLink"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              label="Product Link"
              message="Customize the button link in the email receipt."
              size="3xl"
              classWrapper="mt-[34px]"
              className="mt-2"
              startContent={
                <div className="bg-translucent-100 dark:bg-translucent-700 w-24 h-full rounded-l-lg absolute left-0 flex items-center justify-center">
                  <p className="font-semibold text-xsm text-grayBlue-400">
                    https://
                  </p>
                </div>
              }
              onChange={(e) => {
                const normalized = normalizeUrl(e.target.value);
                field.onChange(normalized);
              }}
            />
          )}
        />
        <Controller
          name="personalNote"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              label="Personal Note"
              message="Add a personalized thank you note to the end of email receipts."
              size="xl"
              classWrapper="mt-[34px]"
              className="mt-2"
              placeholder="Thank you for purchasing my product!"
            />
          )}
        />
        {modePage !== 'detail' && (
          <CheckboxCustom size="default" className="mt-8">
            I agree with Terms and Policy
          </CheckboxCustom>
        )}
        <div className="flex gap-5 mt-8">
          <ButtonCustom
            type="submit"
            color="dark"
            radius="sm"
            className="h-auto py-4 px-[102px] font-semibold text-base"
          >
            {label}
          </ButtonCustom>
          <ButtonCustom
            color="grey"
            radius="sm"
            className="h-auto py-4 px-11 font-semibold text-base cursor-not-allowed"
            disabled={true}
            type="submit"
          >
            Save as Draft
          </ButtonCustom>
        </div>
      </form>
      <Link href={ROUTERS.HOME} className="h-10">
        <ButtonCustom
          startContent={<BackIcon width="7px" height="18px" />}
          color="default"
          radius="sm"
          size="xs"
          className="gap-5"
        >
          Back
        </ButtonCustom>
      </Link>
    </Card>
  );
};

export default Form;
