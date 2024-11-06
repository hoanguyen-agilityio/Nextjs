import { ComponentProps } from 'react';
import InputCustom from '../Input';

interface IInputField extends ComponentProps<typeof InputCustom> {
  label: string;
  errorMsg?: string;
  message?: string;
  classLabel?: string;
  classWrapper?: string;
}

const InputField = ({
  label,
  errorMsg,
  message,
  classLabel,
  classWrapper,
  ...rest
}: IInputField) => {
  const getMessage = () => {
    if (errorMsg) {
      return errorMsg;
    }

    return message;
  };
  return (
    <div className={classWrapper}>
      <label
        className={`font-semibold text-lg text-black-900 dark:text-white ${classLabel}`}
      >
        {label}
      </label>
      <InputCustom {...rest} />
      {(errorMsg || message) && (
        <p
          className={`text-xsm mt-4 font-normal ${errorMsg ? 'text-red-500' : 'text-grayBlue-400'}`}
        >
          {getMessage()}
        </p>
      )}
    </div>
  );
};

export default InputField;
