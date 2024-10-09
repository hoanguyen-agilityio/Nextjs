import { SearchCustom } from '@/components';
import { NotificationIcon, SearchIcon, UpAndDownArrows } from '@/icons';
import { colors } from '@/themes';

const Header = () => {
  return (
    <header className="flex justify-between w-full h-[104px] bg-white border-b-2 border-gray-50 pl-6 pr-4xl">
      <div className="flex items-center relative w-xl">
        <SearchCustom
          color="default"
          placeholder="search"
          size="xs"
          radius="xs"
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
          className="mr-10 cursor-pointer"
        />
        <div className="flex items-center border-l-2 border-gray-50 pl-10">
          <span className="rounded-full w-sm h-sm bg-translucent-400 text-blue-400 flex items-center justify-center text-xl font-semibold">
            TE
          </span>
          <div className="flex flex-col ml-6 font-semibold">
            <span className="text-xl text-dark-800">Theo Edwards</span>
            <span className="text-base text-grayBlue-400">Administrator</span>
          </div>
          <UpAndDownArrows
            width="20px"
            height="21px"
            className="ml-l cursor-pointer"
            fill={colors.lightGray[100]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
