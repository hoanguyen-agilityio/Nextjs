import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { MENU } from '@/constant';

const Menu = () => {
  return (
    <nav className="px-6 border-b-2 border-gray-50 dark:border-gray-700">
      <ul>
        {MENU.map(({ icon, label, className, href }) => (
          <Link href={href} key={label}>
            <li
              className={twMerge(
                'flex py-lg pl-2xl rounded-lg items-center cursor-pointer font-semibold text-grayBlue-400',
                className,
              )}
            >
              {icon}
              <span className="ml-5">{label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
