'use client';
import { Card } from '@nextui-org/react';
import Link from 'next/link';
import {
  CUSTOM_INPUT_FIELDS,
  INPUT_FIELD_DATA,
  KEY_SWITCH,
  ROUTERS,
} from '@/constants';
import { IProducts } from '@/types';
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
  data: IProducts | null;
  modePage: 'add' | 'edit' | 'detail';
  label: string;
}

const Form = ({ data, modePage, label }: FormProps) => {
  return (
    <Card className="flex-row min-w-3xl w-full pt-6 pr-3xl pl-[52px] pb-10 gap-9">
      <form className="w-full">
        {INPUT_FIELD_DATA.map((field, index) => (
          <InputField
            key={index}
            color="default"
            {...field}
            value={
              data
                ? field.label === 'Name *'
                  ? data.name
                  : field.label === 'Description'
                    ? data.status
                    : field.label === 'Price'
                      ? data.total
                      : ''
                : ''
            }
          />
        ))}
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
              isDisabled={!!data}
              defaultSelected={defaultSelected}
            />
          ),
        )}
        {CUSTOM_INPUT_FIELDS.map((field, index) => (
          <InputField
            key={`custom-${index}`}
            color="default"
            {...field}
            value={
              data
                ? field.label === 'Download Button'
                  ? data.download
                  : field.label === 'Product Link'
                    ? data.link
                    : field.label === 'Personal Note'
                      ? data.personal
                      : ''
                : ''
            }
          />
        ))}
        {modePage !== 'detail' && (
          <CheckboxCustom size="default" className="mt-8">
            I agree with Terms and Policy
          </CheckboxCustom>
        )}
        <div className="flex gap-5 mt-8">
          <ButtonCustom
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
