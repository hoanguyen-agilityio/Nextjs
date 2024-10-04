import { IconProps } from '@/types';

const RightArrowUp: React.FC<IconProps> = ({
  width,
  height,
  className,
  fill,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.374023 13.8177C0.0784912 13.5176 0.0784912 13.0358 0.374023 12.7357L11.339 1.77072L4.43103 1.77972C4.00915 1.77951 3.66736 1.43748 3.66736 1.01567C3.66748 0.593842 4.00928 0.251877 4.43115 0.251724L13.1851 0.240723C13.6056 0.242935 13.9458 0.583252 13.948 1.00372L13.937 9.75673C13.9225 10.1685 13.5845 10.4948 13.1725 10.4948C12.7605 10.4948 12.4225 10.1685 12.408 9.75673L12.417 2.84973L1.45203 13.8147C1.15186 14.1103 0.670166 14.1103 0.369995 13.8147L0.374023 13.8177Z"
      fill={fill}
    />
  </svg>
);

export default RightArrowUp;
