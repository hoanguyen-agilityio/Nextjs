import { Switch } from '@nextui-org/react';

interface IKeySwitch {
  title: string;
  describe: string;
  classWrapper?: string;
}

const KeySwitch = ({ title, describe, classWrapper }: IKeySwitch) => {
  return (
    <div className={`flex justify-between ${classWrapper}`}>
      <div>
        <span className="font-semibold text-lg text-black-900 dark:text-white">
          {title}
        </span>
        <p className="font-normal text-xsm text-grayBlue-400">{describe}</p>
      </div>
      <Switch />
    </div>
  );
};

export default KeySwitch;
