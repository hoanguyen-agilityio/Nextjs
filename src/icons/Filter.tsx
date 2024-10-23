import { IconProps } from '@/types';

const FilterIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.394043 3.59956C0.46344 1.81285 1.96512 0.418945 3.75204 0.482559H15.1581C16.8537 0.422897 18.278 1.74615 18.343 3.44154C18.3333 4.37648 17.8721 5.24901 17.105 5.78355L11.8701 9.53955C11.419 9.84952 11.1323 10.3469 11.0901 10.8925L10.7641 16.2525C10.6861 16.9346 10.2731 17.5328 9.66302 17.8476C9.05295 18.1624 8.32611 18.1522 7.72507 17.8205L6.82507 17.3525C6.03586 16.9588 5.53238 16.1574 5.52008 15.2755V10.6755C5.51569 10.2091 5.32568 9.76357 4.99207 9.43753L1.28406 5.71353C0.719086 5.15457 0.398987 4.39429 0.394043 3.59956ZM3.75204 1.98956C2.8064 1.93541 1.99414 2.65433 1.93307 3.59958C1.93723 4.00064 2.10095 4.38353 2.38806 4.66357L6.10004 8.38756C6.71329 8.99237 7.06082 9.81625 7.06604 10.6776V15.2776C7.07617 15.5988 7.26541 15.8873 7.55603 16.0245L8.45602 16.4926C8.62408 16.5782 8.823 16.5782 8.99103 16.4926C9.12814 16.4356 9.22247 16.3074 9.23602 16.1596L9.56201 10.7996C9.63229 9.80304 10.149 8.8916 10.968 8.31957L16.203 4.56357C16.5763 4.30904 16.8029 3.88928 16.811 3.43756C16.7543 2.58322 16.0187 1.93477 15.164 1.98557L3.75204 1.98956Z"
      className="fill-black-900 dark:fill-white"
    />
  </svg>
);

export default FilterIcon;
