import { IconProps } from '@/types';

const ArrowLeft: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M6.92481 13.8671L0.724792 7.68506C0.428955 7.38574 0.428955 6.9043 0.724792 6.60498L6.92481 0.424072C7.11755 0.230713 7.39886 0.154785 7.66278 0.224976C7.92667 0.295166 8.13309 0.500732 8.20428 0.764404C8.27545 1.02808 8.20056 1.30969 8.00781 1.50317L3.1178 6.3811H18.6248C18.8991 6.37891 19.1536 6.52405 19.2914 6.76135C19.4292 6.99854 19.4292 7.2915 19.2914 7.52869C19.1536 7.76599 18.8991 7.91113 18.6248 7.90906H3.11682L8.00684 12.7871C8.30267 13.0864 8.30267 13.5679 8.00684 13.8672C7.7077 14.1663 7.2229 14.1661 6.92383 13.8672L6.92481 13.8671Z"
      className="fill-dark-800 dark:fill-white"
    />
  </svg>
);

export default ArrowLeft;
