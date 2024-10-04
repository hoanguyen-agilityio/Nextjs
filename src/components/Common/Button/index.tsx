// Third party
import { ButtonProps, Button as NextUiButton } from '@nextui-org/react';
import { ReactNode } from 'react';

interface IButton extends ButtonProps {
  label: string;
  icon?: ReactNode;
  className: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const Button = ({ label, icon, className, ...props }: IButton) => {
  return (
    <NextUiButton
      aria-label="Button"
      className={className}
      icon={icon}
      {...props}
    >
      {label}
      {icon}
    </NextUiButton>
  );
};

export default Button;
