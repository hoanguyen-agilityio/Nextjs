// Helpers
import { handleLogout } from '@/utils';

// Components
import { ButtonCustom, InputCustom } from '@/components';
import { Logout, NotificationIcon, SearchIcon } from '@/icons';

const Header = () => {
  return (
    <header className="md:justify-between flex justify-end  w-full h-[104px] bg-white border-b-2 border-gray-50 pl-6 pr-4xl dark:bg-dark-900 dark:border-gray-700">
      <div className="md:flex hidden items-center relative w-xl">
        <InputCustom
          color="default"
          placeholder="search"
          size="xs"
          radius="xs"
          disabled={true}
          startContent={
            <SearchIcon
              width="21px"
              height="21px"
              className="mr-5 cursor-pointer"
            />
          }
        />
      </div>
      <div className="flex items-center">
        <NotificationIcon
          width="21px"
          height="26px"
          className="mr-10 cursor-not-allowed"
        />
        <div className="flex items-center border-l-2 border-gray-50 pl-10 dark:border-gray-700">
          <span className="rounded-full w-sm h-sm bg-translucent-400 text-ratio-100 dark:text-blue-400 flex items-center justify-center text-xl">
            TE
          </span>
          <div className="max-[850px]:hidden flex flex-col ml-6">
            <span className="text-xl text-dark-800 dark:text-white">
              Theo Edwards
            </span>
            <span className="text-base text-ratio-200 dark:text-grayBlue-400">
              Administrator
            </span>
          </div>
          <ButtonCustom
            color="unstyled"
            size="unstyled"
            startContent={<Logout width="28px" height="28px" />}
            aria-label="Logout Button"
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
