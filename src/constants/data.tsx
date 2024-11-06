const INPUT_FIELD_DATA = [
  {
    type: 'text',
    label: 'Name *',
    message:
      'Give your product a short and clear name. 30 characters is recommended.',
    className: 'mt-2',
    size: 'xl' as const,
  },
  {
    type: 'text',
    label: 'Description',
    message: 'Give your product a short and clear description.',
    classWrapper: 'mt-3xl',
    className: 'mt-2',
    size: 'xl' as const,
  },
  {
    type: 'text',
    label: 'Price',
    placeholder: '0.00',
    message: 'Give your product a final price.',
    size: 'xxl' as const,
    startContent: (
      <div className="pointer-events-none flex items-center">
        <span className="font-semibold text-xsm">$</span>
      </div>
    ),
    classWrapper: 'mt-3xl',
    className: 'mt-2',
  },
];

const KEY_SWITCH = [
  {
    title: 'Generate License Keys',
    describe: 'Issue each customer a unique license key after purchase',
    classWrapper: 'mt-9',
  },
  {
    title: 'Redirect customers after purchase?',
    describe: 'Redirect customers to a custom URL after making a purchase',
    classWrapper: 'mt-[60px]',
  },
  {
    title: 'Display product on shop page?',
    describe: 'Show this product on your shop page',
    classWrapper: 'mt-[60px]',
    defaultSelected: true,
  },
];

const CUSTOM_INPUT_FIELDS = [
  {
    label: 'Download Button',
    message: 'Customize the button text in the email receipt.',
    size: 'xl' as const,
    classWrapper: 'mt-[60px]',
    className: 'mt-2',
  },
  {
    label: 'Product Link',
    message: 'Customize the button link in the email receipt.',
    size: '3xl' as const,
    classWrapper: 'mt-[34px]',
    className: 'mt-2',
    startContent: (
      <div className="bg-translucent-100 dark:bg-translucent-700 w-24 h-full rounded-l-lg absolute left-0 flex items-center justify-center">
        <p className="font-semibold text-xsm text-grayBlue-400">https://</p>
      </div>
    ),
  },
  {
    label: 'Personal Note',
    message: 'Add a personalized thank you note to the end of email receipts.',
    size: 'xl' as const,
    classWrapper: 'mt-[34px]',
    className: 'mt-2',
    placeholder: 'Thank you for purchasing my product!',
  },
];

export { INPUT_FIELD_DATA, KEY_SWITCH, CUSTOM_INPUT_FIELDS };
