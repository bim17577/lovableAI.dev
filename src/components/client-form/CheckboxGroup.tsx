import React, { useState } from "react";

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  title: string;
  options: CheckboxOption[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="mb-8">
      <div className="text-[rgba(43,42,42,1)] text-[15px] font-medium leading-[27px] mb-5">
        {title}
      </div>
      <div className="self-center flex w-full max-w-[1047px] gap-[40px_100px] text-[15px] text-[rgba(43,42,42,1)] font-medium leading-[27px] flex-wrap max-md:max-w-full">
        {options.map((option, index) => (
          <div key={index} className="flex-1 max-md:max-w-full">
            <div
              className="border flex items-stretch gap-5 justify-between px-4 py-[11px] rounded-[10px] border-black border-solid max-md:max-w-full cursor-pointer"
              onClick={() => toggleOption(option.value)}
            >
              <div>{option.label}</div>
              <img
                src={
                  selectedOptions.includes(option.value) ? "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/9561f1bf5b04803f95caaefb62601a2b5b2e26f9?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/d017dba1ba4c0b78f8be40e84984394b12d4f992?placeholderIfAbsent=true"
                }
                alt={
                  selectedOptions.includes(option.value)
                    ? "Checked"
                    : "Unchecked"
                }
                className="aspect-[1] object-contain w-5 shrink-0 my-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
