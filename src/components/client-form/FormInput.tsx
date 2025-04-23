
import React from "react";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder = "",
  type = "text",
  icon,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-4">
      <div className="text-[rgba(43,42,42,1)] text-xs font-medium leading-[22px] z-10 ml-[13px] mb-2 max-md:ml-2.5">
        {label}
      </div>
      <div className="border flex items-center gap-2 px-[9px] py-3.5 rounded-[10px] border-black border-solid max-md:mr-2.5 max-md:pr-5 bg-white">
        {icon && (
          <img
            src={icon}
            alt={label}
            className="aspect-[1] object-contain w-5"
          />
        )}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="bg-transparent outline-none flex-1"
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default FormInput;
