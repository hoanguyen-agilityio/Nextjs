import { IconProps } from '@/types';

const ArrowRight: React.FC<IconProps> = ({ width, height, className }) => (
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
      clipRule="evenodd"
      d="M11.9924 13.8666C11.6967 13.5674 11.6967 13.0859 11.9924 12.7866L16.8824 7.90857H1.37549C1.10107 7.91064 0.84668 7.7655 0.708862 7.5282C0.571045 7.29102 0.571045 6.99805 0.708862 6.76086C0.84668 6.52356 1.10107 6.37842 1.37537 6.38049L16.8824 6.38061L11.9924 1.50256C11.6946 1.20386 11.6953 0.720093 11.9941 0.422241C12.2928 0.124268 12.7766 0.125 13.0745 0.423706L19.2744 6.60461C19.5708 6.90356 19.5708 7.3855 19.2744 7.68457L13.0745 13.8666C12.931 14.01 12.7363 14.0907 12.5334 14.0907C12.3306 14.0907 12.1359 14.01 11.9924 13.8666Z"
      className="fill-dark-800 dark:fill-white"
    />
  </svg>
);

export default ArrowRight;
