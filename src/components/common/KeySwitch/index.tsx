import { Switch, SwitchProps } from '@nextui-org/react';

interface IKeySwitch extends SwitchProps {
  title: string;
  describe: string;
  classWrapper?: string;
  ariaLabel: string;
}

const KeySwitch = ({
  title,
  describe,
  classWrapper,
  ariaLabel,
  ...switchProps
}: IKeySwitch) => {
  return (
    <div className={`flex justify-between ${classWrapper}`}>
      <div>
        <span className="font-semibold text-lg text-black-900 dark:text-white">
          {title}
        </span>
        <p className="font-normal text-xsm text-grayBlue-400">{describe}</p>
      </div>
      <Switch {...switchProps} aria-label={ariaLabel} />
    </div>
  );
};

export default KeySwitch;
