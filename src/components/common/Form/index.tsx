'use client';

import { Card } from '@nextui-org/react';
import ButtonCustom from '../Button';
import InputField from '../InputField';
import { INPUT_FIELD_DATA } from '@/constants';
import Media from '@/components/Media';
import File from '@/components/File';

const Form = () => {
  return (
    <Card className="flex-row max-w-3xl w-full pt-6 pr-3xl pl-[52px] pb-10 gap-9">
      <form className="w-full">
        {INPUT_FIELD_DATA.map((field, index) => (
          <InputField key={index} color="default" {...field} />
        ))}
        <Media onImagesChange={(images) => console.log(images)} />
        <File onFilesChange={(file) => console.log(file)} />
      </form>
      <ButtonCustom />
    </Card>
  );
};

export default Form;
