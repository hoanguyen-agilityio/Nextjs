'use client';

// Third party
import clsx from 'clsx';
import Link from 'next/link';
import { Card } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

// Constants
import { IMAGE, KEY_SWITCH, MESSAGE, ROUTERS } from '@/constants';

// Models
import { FormProps, IProducts } from '@/types';

// API
import { getDataProducts } from '@/actions';

// Helpers
import { filterNumericInput, formSchema, normalizeUrl } from '@/utils';

// Components
import {
  Media,
  File,
  CheckboxCustom,
  KeySwitch,
  ButtonCustom,
  InputField,
} from '@/components';
import { BackIcon } from '@/icons';

const Form = ({ data, modePage, label, onSubmit, id }: FormProps) => {
  const [duplicateNameError, setDuplicateNameError] = useState<string | null>(
    null,
  );
  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name || '',
      status: data?.status || '',
      total: data?.total || '',
      views: data?.views || '',
      sales: data?.sales || '',
      conversion: data?.conversion || '',
      download: data?.download || '',
      link: data?.link || '',
      personal: data?.personal || '',
      img: data?.img || [],
      file: data?.file || [],
      fallbackSrc: IMAGE.BLUR,
    },
  });
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const clearImages = () => setValue('img', []);

  const checkDuplicateName = async (name: string) => {
    try {
      if (name === data?.name) return false;

      const products = await getDataProducts();
      return products?.some((product: IProducts) => product.name === name);
    } catch (error) {
      console.error('Error checking duplicate name:', error);
      return false;
    }
  };

  const safeOnSubmit = (product: IProducts) => {
    startTransition(async () => {
      try {
        const isDuplicate = await checkDuplicateName(product.name);
        if (isDuplicate) {
          setDuplicateNameError(MESSAGE.DUPLICATE_NAME);
          return;
        }

        setDuplicateNameError(null);

        if (onSubmit) {
          await onSubmit(product);
        }
        reset();
        clearImages();
        if (modePage === 'detail' && id) {
          router.push(`${ROUTERS.EDIT_PRODUCT}/${id}`);
        } else {
          router.push(ROUTERS.HOME);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    });
  };

  return (
    <Card className="flex-row min-w-3xl w-full pt-6 pr-3xl pl-[52px] pb-10 gap-9 max-[860px]:flex-col-reverse">
      <form
        key={data?.id || 'default'}
        className="w-full"
        onSubmit={handleSubmit(safeOnSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Name *"
              message="Give your product a short and clear name. 30 characters is recommended."
              className="mt-2"
              size="xl"
              color="secondary"
              fieldId="Input Name"
              errorMsg={duplicateNameError || fieldState.error?.message}
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="status"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Description"
              message="Give your product a short and clear description."
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              color="secondary"
              fieldId="Input Description"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="total"
          control={control}
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
                  <span className="text-xsm">$</span>
                </div>
              }
              color="secondary"
              fieldId="Input Price"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              onInput={filterNumericInput}
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="views"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="View"
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              color="secondary"
              fieldId="Input View"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              onInput={filterNumericInput}
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="sales"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Sales"
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              color="secondary"
              fieldId="Input Sales"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              onInput={filterNumericInput}
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="conversion"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              label="Conversion"
              className="mt-2"
              classWrapper="mt-3xl"
              size="xl"
              color="secondary"
              fieldId="Input Conversion"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              onInput={filterNumericInput}
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="img"
          control={control}
          render={({ field }) => (
            <Media
              {...field}
              onImagesChange={(images) => {
                setValue('img', images);
                if (images.length === 0) clearImages();
              }}
              data={data?.img ? { img: data.img } : undefined}
              mode={modePage}
            />
          )}
        />
        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <File
              {...field}
              onFilesChange={(file) => setValue('file', file)}
              data={
                data && data.link
                  ? { link: Array.isArray(data.link) ? data.link : [data.link] }
                  : undefined
              }
              mode={modePage}
            />
          )}
        />
        {KEY_SWITCH.map(
          ({ title, describe, classWrapper, defaultSelected, ariaLabel }) => (
            <KeySwitch
              key={title}
              title={title}
              describe={describe}
              classWrapper={classWrapper}
              isDisabled={modePage === 'detail'}
              defaultSelected={defaultSelected}
              ariaLabel={ariaLabel}
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
              color="secondary"
              fieldId="Input Download Button"
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="link"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              label="Product Link"
              message="Customize the button link in the email receipt."
              size="3xl"
              classWrapper="mt-[34px]"
              className="mt-2"
              color="secondary"
              startContent={
                <div className="bg-translucent-100 dark:bg-translucent-700 w-24 h-full rounded-l-lg absolute left-0 flex items-center justify-center">
                  <p className="text-xsm text-ratio-200 dark:text-grayBlue-400">
                    https://
                  </p>
                </div>
              }
              onChange={(e) => {
                const normalized = normalizeUrl(e.target.value);
                field.onChange(normalized);
              }}
              fieldId="Input Product Link"
              disabled={modePage === 'detail'}
            />
          )}
        />
        <Controller
          name="personal"
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
              color="secondary"
              fieldId="Input Personal Note"
              disabled={modePage === 'detail'}
            />
          )}
        />
        {modePage !== 'detail' && (
          <CheckboxCustom size="default" className="mt-8">
            I agree with Terms and Policy
          </CheckboxCustom>
        )}
        <div className="flex gap-5 mt-8 flex-wrap">
          <ButtonCustom
            type="submit"
            color="dark"
            radius="sm"
            size="l"
            className={clsx('h-auto py-4 px-[102px]', {
              'opacity-50 cursor-not-allowed': isPending,
            })}
            disabled={isPending}
          >
            {isPending ? 'Logging in...' : label}
          </ButtonCustom>
          <ButtonCustom
            color="grey"
            radius="sm"
            size="l"
            className="h-auto py-4 px-11 cursor-not-allowed"
            disabled={true}
            type="submit"
          >
            Save as Draft
          </ButtonCustom>
        </div>
      </form>
      <Link href={ROUTERS.HOME} className="h-10 flex max-[860px]:justify-end">
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
