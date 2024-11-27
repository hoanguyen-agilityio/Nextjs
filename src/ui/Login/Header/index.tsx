// Third party
import Link from 'next/link';

// Constants
import { ROUTERS } from '@/constants';

// Components
import { ButtonCustom } from '@/components';
import Menu from '../Menu';
import { Logo } from '@/icons';

const Header = () => (
  <header className="flex justify-between pt-3xl pb-6 pl-5 pr-5xl bg-white dark:bg-dark-900">
    <Link href={ROUTERS.HOME} aria-label="WunderUI logo">
      <Logo width="266px" height="42px" />
    </Link>
    <div className="flex gap-[135px] max-[1280px]:gap-5">
      <Menu />
      <div className="flex gap-[22px] max-[555px]:hidden">
        <Link href={ROUTERS.LOGIN}>
          <ButtonCustom color="default" radius="sm" size="s">
            Log In
          </ButtonCustom>
        </Link>
        <Link href={ROUTERS.SIGN_UP}>
          <ButtonCustom
            color="dark"
            radius="sm"
            size="s"
            className="text-white"
          >
            Sign Up
          </ButtonCustom>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
