// Third party
import { ButtonProps, Button as NextUiButton } from '@nextui-org/react';

interface IButton extends ButtonProps {
  label: string;
  className: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const Button = ({ label, className, ...props }: IButton) => {
  return (
    <NextUiButton aria-label="Button" className={className} {...props}>
      {label}
    </NextUiButton>
  );
};

export default Button;
