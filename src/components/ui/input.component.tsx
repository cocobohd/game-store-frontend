import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  label: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  type = "string",
  placeholder = "Start enter",
  label,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col relative", className)}>
      <label className="text-2xl">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
