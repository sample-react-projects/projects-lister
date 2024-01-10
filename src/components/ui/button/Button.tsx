import { MouseEventHandler, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { Variant } from "./Button.variant";

interface IButton extends PropsWithChildren {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant: Variant;
}

const Button: React.FC<IButton> = ({
  children,
  className = "",
  onClick,
  variant,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
