import { Meta, StoryObj } from '@storybook/react';
import ImageCustom from '.';
import { IMAGE } from '@/constants';

export default {
  title: 'Components/Image',
  component: ImageCustom,
} as Meta;

type Story = StoryObj<typeof ImageCustom>;

export const ImageFallback: Story = {
  args: {
    width: 200,
    height: 200,
    classNames: {
      img: '',
      wrapper: 'bg-cover bg-center',
      zoomedWrapper: '',
      blurredImg: '',
    },
  },
};

export const ImageComponentWithDisplayedImage: Story = {
  args: {
    src: IMAGE.DEFAULT,
    alt: 'Image default',
    width: 200,
    height: 200,
    classNames: {
      img: '',
      wrapper: 'bg-cover bg-center',
      zoomedWrapper: '',
      blurredImg: '',
    },
  },
};
