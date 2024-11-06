import { IconProps } from '@/types';

const BackIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.854614 6.03102C0.579834 5.84499 0.415283 5.5348 0.415283 5.20302C0.415283 4.87123 0.579834 4.56105 0.854614 4.37502L6.24365 0.375015C6.55017 0.166779 6.94666 0.145065 7.27405 0.318604C7.60144 0.492142 7.80603 0.832489 7.80566 1.20302V9.20302C7.80603 9.57358 7.60144 9.91391 7.27405 10.0874C6.94666 10.261 6.55005 10.2393 6.24365 10.031L0.854614 6.03102Z"
      className="fill-black-900 dark:fill-white"
    />
  </svg>
);

export default BackIcon;
