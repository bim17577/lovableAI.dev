
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";

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
          <div 
            key={index} 
            className="flex-1 max-md:max-w-full"
            onClick={() => toggleOption(option.value)}
          >
            <div
              className="border flex items-stretch gap-5 justify-between px-4 py-[11px] rounded-[10px] border-black border-solid max-md:max-w-full cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">{option.label}</div>
              <div className="flex items-center justify-center w-5 h-5">
                <Checkbox 
                  checked={selectedOptions.includes(option.value)}
                  onCheckedChange={() => toggleOption(option.value)}
                  className="h-5 w-5 rounded-sm border-black"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
