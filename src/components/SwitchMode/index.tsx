'use client';

// Third party
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

// Components
import { MoonIcon } from '@/icons';

const SwitchMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center justify-between my-11">
      <div className="flex items-center">
        <MoonIcon width="26px" height="26px" className="mr-6" />
        <label className="text-lg font-semibold text-grayBlue-400">
          Dark mode
        </label>
      </div>
      <Switch
        isSelected={theme === 'dark'}
        onChange={toggleTheme}
        color="success"
        size="md"
        aria-label="Automatic updates"
      />
    </div>
  );
};

export default SwitchMode;
