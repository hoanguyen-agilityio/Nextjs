// Third party
import Link from 'next/link';

// Constants
import { ROUTERS } from '@/constants';

// Components
import { Menu, ButtonCustom, SwitchMode } from '@/components';
import { Logo, PlusIcon } from '@/icons';

const Sidebar = () => (
  <aside className="flex flex-col justify-between max-w-m w-full bg-white min-h-screen border-r-2 border-gray-50 text-lg dark:bg-dark-900 dark:border-gray-700">
    <div className="flex flex-col gap-80">
      <div className="pl-xl py-3xl border-b-2 border-gray-50 dark:border-gray-700">
        <Link href={ROUTERS.HOME} aria-label="WunderUI logo">
          <Logo width="267px" height="42px" />
        </Link>
      </div>
      <Menu />
    </div>
    <div className="px-[52px] pt-6 border-t-2 border-gray-50 dark:border-gray-700">
      <Link href={ROUTERS.ADD_PRODUCT}>
        <ButtonCustom
          color="secondary"
          startContent={<PlusIcon width="46px" height="46px" />}
          className="flex items-center text-lg px-0 text-ratio-200 dark:text-grayBlue-400 font-semibold h-auto gap-4"
        >
          Add new product
        </ButtonCustom>
      </Link>
      <SwitchMode />
    </div>
  </aside>
);

export default Sidebar;
