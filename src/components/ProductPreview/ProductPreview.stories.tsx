import { Meta, StoryObj } from '@storybook/react';
import ProductPreview from '.';
import { IMAGE } from '@/constants';

export default {
  title: 'Components/ProductPreview',
  component: ProductPreview,
} as Meta;

type Story = StoryObj<typeof ProductPreview>;

// Product Preview type default
export const ProductPreviewDefault: Story = {
  args: {
    imageSrc: IMAGE.DEFAULT,
    imageAlt: 'Images displayed on storybook',
    imageFallbackSrc: IMAGE.BLUR,
  },
};
