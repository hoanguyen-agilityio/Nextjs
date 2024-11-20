// Third party
import Link from 'next/link';

// Constants
import { MENU_NO_AUTH } from '@/constants';

const Menu = () => (
  <ul className="flex gap-24 items-center">
    {MENU_NO_AUTH.map(({ label, href }) => (
      <li key={label}>
        <Link
          href={href}
          className="text-xl font-semibold text-ratio-200 dark:text-grayBlue-400"
        >
          <span>{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default Menu;
