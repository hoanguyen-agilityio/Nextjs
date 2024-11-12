import { IconProps } from '@/types';

const LogoWithoutText: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 164 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M54.5346 54.1856V0.619629H0.163635C0.128632 1.23862 0.0796204 1.69562 0.0796204 2.15363C0.0796204 19.9906 -0.00137329 37.8286 0.11261 55.6656C0.153809 66.3361 3.42514 76.7434 9.49591 85.518C11.4356 88.3746 13.7866 90.9536 16.1186 93.8716L54.6426 55.2426"
      fill="#34C1FD"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M54.4417 55.2436V109.379C59.3557 109.779 66.6417 108.541 72.7107 106.329C94.1963 98.6541 108.596 78.3712 108.757 55.5566C108.937 37.7866 108.811 20.0146 108.817 2.24359C108.817 1.80759 108.764 1.37158 108.707 0.506592L54.4307 54.8506"
      fill="#FBD263"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M108.614 55.2436V109.379C113.528 109.779 120.814 108.541 126.883 106.329C148.367 98.653 162.765 78.3702 162.925 55.5566C163.105 37.7866 162.98 20.0146 162.986 2.24359C162.986 1.80759 162.933 1.37158 162.876 0.506592L108.6 54.8506"
      fill="#F4768F"
    />
  </svg>
);

export default LogoWithoutText;
