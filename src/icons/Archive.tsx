import { IconProps } from '@/types';

const ArchiveIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.2739 28.3418L13.8109 24.7168C13.3255 24.5026 12.7723 24.5026 12.2869 24.7168L5.82288 28.3418C4.728 29.0718 3.32265 29.1484 2.15488 28.5417C1.06559 27.7963 0.455898 26.527 0.554882 25.2108V6.36279C0.543854 2.97571 3.27508 0.218201 6.662 0.196777H19.4399C22.8266 0.21875 25.5574 2.97601 25.5469 6.36279V25.2118C25.6459 26.528 25.0362 27.7974 23.9469 28.5428C23.4825 28.8189 22.9511 28.9622 22.4109 28.9567C21.657 28.9423 20.9201 28.7303 20.2739 28.3418ZM14.7639 22.9638L21.2279 26.5888C21.7151 26.9584 22.3608 27.0447 22.9279 26.8158C23.3925 26.4221 23.6266 25.82 23.5499 25.2158L23.5499 6.36279C23.5538 4.08014 21.7146 2.22211 19.4319 2.20288L6.65888 2.20282C4.37581 2.22156 2.53597 4.07971 2.53988 6.36285L2.53988 25.2118C2.35073 25.824 2.60555 26.486 3.15631 26.8135C3.70708 27.1409 4.41045 27.0484 4.85788 26.5898L11.3219 22.9648C12.4029 22.4117 13.6838 22.4117 14.7649 22.9648L14.7639 22.9638ZM9.05488 11.5638C8.53447 11.3737 8.26661 10.7979 8.45654 10.2774C8.64646 9.75696 9.22228 9.48895 9.74278 9.67871C11.8778 10.4546 14.2178 10.4546 16.3529 9.67877C16.6009 9.58838 16.8748 9.60101 17.1135 9.71368C17.3522 9.82635 17.536 10.0298 17.6239 10.2787C17.7152 10.5286 17.7032 10.8044 17.5906 11.0454C17.478 11.2864 17.2741 11.4725 17.0239 11.5627C14.4503 12.5082 11.6245 12.5082 9.05088 11.5627L9.05488 11.5638Z"
      fill="#809FB8"
    />
  </svg>
);

export default ArchiveIcon;
