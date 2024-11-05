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
    type: 'number',
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

export { INPUT_FIELD_DATA };
