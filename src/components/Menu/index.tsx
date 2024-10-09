import Link from 'next/link';
import { MENU } from '@/Constant';

const Menu = () => {
  return (
    <nav className="px-6 border-b-2 border-gray-50">
      <ul>
        {MENU.map(({ icon, label, className, href }) => (
          <Link href={href} key={label}>
            <li
              className={`flex py-[18px] pl-[26px] rounded-lg items-center cursor-pointer font-semibold ${className}`}
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
