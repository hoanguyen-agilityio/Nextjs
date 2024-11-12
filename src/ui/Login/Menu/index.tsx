import Link from 'next/link';
import { MENU_NO_AUTH } from '@/constants';

const Menu = () => {
  return (
    <ul className="flex gap-24 items-center">
      {MENU_NO_AUTH.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className="text-xl font-semibold text-grayBlue-400">
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
