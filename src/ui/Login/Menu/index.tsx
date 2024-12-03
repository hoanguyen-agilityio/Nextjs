// Third party
import Link from 'next/link';

// Constants
import { MENU_NO_AUTH } from '@/constants';

const Menu = () => (
  <ul className="flex gap-24 items-center max-[1500px]:gap-10 max-[1200px]:hidden">
    {MENU_NO_AUTH.map(({ label, href }) => (
      <li key={label}>
        <Link
          href={href}
          className="text-xl text-ratio-200 dark:text-grayBlue-400 cursor-not-allowed"
        >
          <span>{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default Menu;
