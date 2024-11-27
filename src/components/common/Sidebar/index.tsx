'use client';
// Third party
import Link from 'next/link';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

// Constants
import { ROUTERS } from '@/constants';

// Components
import { Menu, ButtonCustom, SwitchMode } from '@/components';
import { Hamburger, Logo, PlusIcon } from '@/icons';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on initial render and window resize
    const checkScreenWidth = () => setIsMobile(window.innerWidth <= 1640);
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const handleOpenSidebar = () => {
    if (isMobile) {
      setIsSidebarVisible(true);
    }
  };

  const handleCloseSidebar = () => {
    if (isMobile) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={clsx(
          'flex flex-col justify-between w-[351px] bg-white border-r-2 border-gray-50 text-lg dark:bg-dark-900 dark:border-gray-700 transition-transform duration-300',
          {
            'fixed top-0 left-0 z-40 h-full overflow-y-auto':
              isSidebarVisible && isMobile,
            '-translate-x-full fixed top-0 left-0 z-40':
              !isSidebarVisible && isMobile,
            'relative translate-x-0': !isMobile,
          },
        )}
      >
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

      {/* Overlay (for mobile) */}
      {isSidebarVisible && isMobile && (
        <div
          onClick={handleCloseSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}

      {/* Hamburger Button */}
      {isMobile && !isSidebarVisible && (
        <button
          onClick={handleOpenSidebar}
          className="fixed top-7 left-4 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg dark:bg-dark-700"
          aria-label="Open sidebar"
        >
          <Hamburger width="24px" height="24px" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
