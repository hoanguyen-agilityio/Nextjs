import { IconProps } from '@/types';

const CheckedIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="9" cy="9.48779" r="9" fill="#1AD598" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.8938 12.7879L4.51685 10.3959C4.14551 10.0213 4.14551 9.41742 4.51685 9.04285C4.69446 8.86353 4.9364 8.7627 5.18884 8.7627C5.44128 8.7627 5.68323 8.86353 5.86084 9.04285L7.56079 10.7579L12.1188 6.17188C12.2965 5.9928 12.5385 5.89209 12.7908 5.89209C13.0431 5.89209 13.285 5.9928 13.4628 6.17188C13.8335 6.54669 13.8335 7.15009 13.4628 7.5249L8.23376 12.7869C8.05566 12.9655 7.81396 13.0658 7.56177 13.0658C7.30957 13.0658 7.06787 12.9655 6.88977 12.7869L6.8938 12.7879Z"
      fill="white"
    />
  </svg>
);

export default CheckedIcon;
