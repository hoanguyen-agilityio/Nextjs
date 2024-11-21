'use client';

// Third party
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Helpers
import { Theme } from '@/types';

// Components
import { MoonIcon } from '@/icons';

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return (
    <div className="flex items-center justify-between my-11">
      <div className="flex items-center">
        <MoonIcon width="26px" height="26px" className="mr-6" />
        <label className="text-lg font-semibold text-ratio-200 dark:text-grayBlue-400">
          Dark mode
        </label>
      </div>
      <Switch
        isSelected={theme === Theme.Dark}
        onChange={toggleTheme}
        color="success"
        size="md"
        aria-label="Automatic updates"
      />
    </div>
  );
};

export default SwitchMode;
