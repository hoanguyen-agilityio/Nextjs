'use client';

// Third party
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

// Constants
import { MENU } from '@/constants';

const Menu = () => {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  useEffect(() => {
    const storedActiveItem = localStorage.getItem('activeMenuItem');
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);

  const handleClick = (label: string) => {
    setActiveItem(label);
    localStorage.setItem('activeMenuItem', label);
  };

  return (
    <nav className="px-6 border-b-2 border-gray-50 dark:border-gray-700">
      <ul>
        {MENU.map(({ icon, label, className, href }) => {
          const isActive = activeItem === label;

          return (
            <li key={label}>
              <Link
                href={href}
                onClick={() => handleClick(label)}
                className={twMerge(
                  'flex py-lg pl-2xl rounded-lg items-center cursor-pointer text-ratio-200 dark:text-grayBlue-400',
                  isActive &&
                    'text-ratio-100 bg-translucent-400 dark:text-blue-400',
                  className,
                )}
              >
                {icon}
                <span className="ml-5">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
