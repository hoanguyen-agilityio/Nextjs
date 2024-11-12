import { IconProps } from '@/types';

const GoogleIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <mask
      id="mask0_1_7084"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="26"
      height="27"
    >
      <rect y="0.376953" width="26" height="26" fill="white" />
    </mask>
    <g mask="url(#mask0_1_7084)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.9996 13.6649C26.0159 12.7711 25.9218 11.8787 25.7197 11.0079L13.2646 11.0078V15.8318H20.5756C20.2904 17.5508 19.3099 19.0764 17.8646 20.0498L17.8397 20.2108L21.7766 23.1998L22.0507 23.2278C24.6767 20.7534 26.1147 17.2711 25.9996 13.6649Z"
        fill="#5A96F5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.2637 26.377C16.4843 26.4705 19.6218 25.346 22.0497 23.228L17.8627 20.0499C16.4986 20.944 14.8929 21.3978 13.2627 21.35C9.85089 21.3504 6.81714 19.1794 5.71667 15.95L5.56171 15.963L1.46167 19.0679L1.40869 19.2139C3.70471 23.6356 8.28155 26.4009 13.2637 26.377Z"
        fill="#3ABB5D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.71887 15.9478C5.42944 15.1214 5.28009 14.2524 5.27686 13.3768C5.28107 12.5028 5.42383 11.6351 5.69989 10.8058V10.6339L1.5509 7.47681L1.41589 7.54083C-0.471313 11.2019 -0.471313 15.5497 1.41589 19.2108L5.71887 15.9478Z"
        fill="#FBC41E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.264 5.40387C15.1575 5.37183 16.9918 6.06396 18.3921 7.33887L22.1371 3.7569C19.7174 1.54193 16.5441 0.333069 13.264 0.376892C8.28339 0.355652 3.70911 3.12146 1.41406 7.54187L5.70007 10.8049C6.80988 7.57544 9.84723 5.40649 13.2621 5.40491"
        fill="#ED5A4C"
      />
    </g>
  </svg>
);

export default GoogleIcon;
