import { Switch } from '@nextui-org/react';
import { MoonIcon } from '@/icons';

const DarkModeSwitch = () => {
  return (
    <div className="flex items-center justify-between my-11">
      <div className="flex items-center">
        <MoonIcon width="26px" height="26px" className="mr-6" />
        <label className="text-lg font-semibold">Dark mode</label>
      </div>
      <Switch
        defaultSelected
        color="success"
        size="md"
        aria-label="Automatic updates"
      />
    </div>
  );
};

export default DarkModeSwitch;
