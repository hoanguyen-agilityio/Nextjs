// Third party
import { ComponentProps } from 'react';

// Components
import { InputCustom } from '@/components';

interface IInputField extends ComponentProps<typeof InputCustom> {
  label: string;
  errorMsg?: string;
  message?: string;
  classLabel?: string;
  classWrapper?: string;
  fieldId: string;
}

const InputField = ({
  label,
  errorMsg,
  message,
  classLabel,
  classWrapper,
  fieldId,
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
        className={`text-lg text-black-900 dark:text-white ${classLabel}`}
        htmlFor={fieldId}
      >
        {label}
      </label>
      <InputCustom {...rest} id={fieldId} />
      {(errorMsg || message) && (
        <p
          className={`text-xsm mt-4 font-normal ${errorMsg ? 'text-red-500' : 'text-ratio-200 dark:text-grayBlue-400'}`}
        >
          {getMessage()}
        </p>
      )}
    </div>
  );
};

export default InputField;
