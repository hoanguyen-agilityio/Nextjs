import { IconProps } from '@/types';

const ProductIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 54 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 20.4878V10.4878C0 7.72637 0.976311 5.36935 2.92893 3.41672C4.88155 1.4641 7.23858 0.487793 10 0.487793H44C46.7614 0.487793 49.1184 1.4641 51.0711 3.41672C53.0237 5.36935 54 7.72637 54 10.4878V44.4878C54 47.2492 53.0237 49.6062 51.0711 51.5589C49.1184 53.5115 46.7614 54.4878 44 54.4878H10C7.23858 54.4878 4.88155 53.5115 2.92893 51.5589C0.976311 49.6062 0 47.2492 0 44.4878V20.4878Z"
      className="fill-gray-50 dark:fill-gray-700"
    />
    <ellipse
      cx="22.96"
      cy="32.4277"
      rx="12.96"
      ry="13.06"
      fill="#8F69E7"
      fill-opacity="0.639216"
    />
    <g style={{ mixBlendMode: 'difference' }}>
      <ellipse
        cx="32.0401"
        cy="23.5478"
        rx="12.96"
        ry="13.06"
        fill="#E95931"
        fill-opacity="0.639216"
      />
    </g>
  </svg>
);

export default ProductIcon;
