import { IButtonProps } from "@/app/utils/interfaces/global.interfaces";


const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  type,
  disabled = false,
  classname,
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick}
      disabled={disabled}
      className={classname}>
      {text}
    </button>
  );
};

export default Button;
