import { IconProps } from '@/types';

const PlusIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ maxWidth: 'none' }}
  >
    <circle cx="23" cy="23" r="23" fill="#12AFF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 29.5V25H17.5C16.9641 25 16.4689 24.7141 16.201 24.25C15.933 23.7859 15.933 23.2141 16.201 22.75C16.4689 22.2859 16.9641 22 17.5 22H22V17.5C22 16.9641 22.2859 16.4689 22.75 16.2009C23.2141 15.933 23.7859 15.933 24.25 16.2009C24.7141 16.4689 25 16.9641 25 17.5V22H29.5C30.0359 22 30.5311 22.2859 30.799 22.75C31.067 23.2141 31.067 23.7859 30.799 24.25C30.5311 24.7141 30.0359 25 29.5 25H25V29.5C25 30.0359 24.7141 30.5311 24.25 30.7991C23.7859 31.067 23.2141 31.067 22.75 30.7991C22.2859 30.5311 22 30.0359 22 29.5Z"
      fill="white"
    />
  </svg>
);

export default PlusIcon;
