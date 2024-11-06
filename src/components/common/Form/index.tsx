'use client';

import { Card } from '@nextui-org/react';
import ButtonCustom from '../Button';
import InputField from '../InputField';
import {
  CUSTOM_INPUT_FIELDS,
  INPUT_FIELD_DATA,
  KEY_SWITCH,
  ROUTERS,
} from '@/constants';
import Media from '@/components/Media';
import File from '@/components/File';
import KeySwitch from '../KeySwitch';
import { BackIcon } from '@/icons';
import Link from 'next/link';
import CheckboxCustom from '../Checkbox';

const Form = () => {
  return (
    <Card className="flex-row min-w-3xl w-full pt-6 pr-3xl pl-[52px] pb-10 gap-9">
      <form className="w-full">
        {INPUT_FIELD_DATA.map((field, index) => (
          <InputField key={index} color="default" {...field} />
        ))}
        <Media onImagesChange={(images) => console.log(images)} />
        <File onFilesChange={(file) => console.log(file)} />
        {KEY_SWITCH.map(({ title, describe, classWrapper }) => (
          <KeySwitch
            key={title}
            title={title}
            describe={describe}
            classWrapper={classWrapper}
          />
        ))}
        {CUSTOM_INPUT_FIELDS.map((field, index) => (
          <InputField key={`custom-${index}`} color="default" {...field} />
        ))}
        <CheckboxCustom size="default" className="mt-8">
          I agree with Terms and Policy
        </CheckboxCustom>
        <div className="flex gap-5 mt-8">
          <ButtonCustom
            color="dark"
            radius="sm"
            className="h-auto py-4 px-[102px] font-semibold text-base"
          >
            Publish Product
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
