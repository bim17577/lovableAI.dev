import React from "react";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder = "",
  type = "text",
  icon,
}) => {
  return (
    <div className="mb-4">
      <div className="text-[rgba(43,42,42,1)] text-xs font-medium leading-[22px] z-10 ml-[13px] mb-2 max-md:ml-2.5">
        {label}
      </div>
      <div className="border flex flex-col justify-center px-[9px] py-3.5 rounded-[10px] border-black border-solid max-md:mr-2.5 max-md:pr-5">
        {icon && (
          <img
            src={icon}
            alt={label}
            className="aspect-[1] object-contain w-5"
          />
        )}
        {!icon && (
          <input
            type={type}
            placeholder={placeholder}
            className="bg-transparent outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
