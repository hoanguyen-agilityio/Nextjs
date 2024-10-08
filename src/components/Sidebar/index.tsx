import Link from 'next/link';
import { MENU } from '@/Constant';
import { Logo, PlusIcon } from '@/icons';
import { ButtonCustom, DarkModeSwitch } from '@/components';
import { colors } from '@/themes';

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between max-w-m w-full bg-white min-h-screen border-r-2 border-gray-50 text-lg">
      <div className="pl-xl py-3xl border-b-2 border-gray-50">
        <Link href="/">
          <Logo width="267px" height="42px" fill={colors.dark[800]} />
        </Link>
      </div>
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
      <div className="px-[52px] text-grayBlue-400 font-semibold pt-6 border-t-2 border-gray-50">
        <ButtonCustom
          color="secondary"
          endContent={<PlusIcon width="46px" height="46px" className="mr-4" />}
          className="flex flex-row-reverse items-center text-lg"
        >
          Add new product
        </ButtonCustom>
        <DarkModeSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
