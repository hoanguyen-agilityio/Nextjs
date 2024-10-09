import Link from 'next/link';
import { Logo, PlusIcon } from '@/icons';
import { ButtonCustom, DarkModeSwitch, Menu } from '@/components';
import { colors } from '@/themes';

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between max-w-m w-full bg-white min-h-screen border-r-2 border-gray-50 text-lg">
      <div className="pl-xl py-3xl border-b-2 border-gray-50">
        <Link href="/">
          <Logo width="267px" height="42px" fill={colors.dark[800]} />
        </Link>
      </div>
      <Menu />
      <div className="px-[52px] pt-6 border-t-2 border-gray-50">
        <ButtonCustom
          color="secondary"
          startContent={<PlusIcon width="46px" height="46px" />}
          className="flex items-center text-lg px-0 text-grayBlue-400 font-semibold h-auto gap-4"
        >
          Add new product
        </ButtonCustom>
        <DarkModeSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
