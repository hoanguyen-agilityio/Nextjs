import { IconProps } from '@/types';

const FaceFrownIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-black-900 dark:fill-white  ${className}`}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      <g id="Face_Frown" data-name="Face Frown">
        <g>
          <path d="M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z" />
          <path d="M17.206,16.481a6.033,6.033,0,0,0-10.412,0,.5.5,0,0,0,.863.5,5.033,5.033,0,0,1,8.685,0,.5.5,0,0,0,.864-.5Z" />
          <circle cx="9" cy="9.011" r="1.25" />
          <circle cx="15" cy="9.011" r="1.25" />
        </g>
      </g>
    </g>
  </svg>
);

export default FaceFrownIcon;
