import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface ProjectTypeRadioProps {
  title: string;
  options: RadioOption[];
}

const ProjectTypeRadio: React.FC<ProjectTypeRadioProps> = ({
  title,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="mb-6">
      <div className="text-[rgba(43,42,42,1)] text-[15px] font-medium leading-[27px] mb-3">
        {title}
      </div>
      {options.map((option) => (
        <div
          key={option.value}
          className={`border flex items-stretch gap-5 text-[15px] text-[rgba(43,42,42,1)] font-medium leading-[27px] justify-between mt-3 px-4 py-[11px] rounded-[10px] border-black border-solid max-md:mr-2.5 cursor-pointer`}
          onClick={() => handleOptionSelect(option.value)}
        >
          <div>{option.label}</div>
          <img
            src={selectedOption === option.value ? "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/38cf693ecf9733c7d3356cdbe1e97891cc4b769d?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/67b07e8582d9f32df4e9b01723074ff639d0d227?placeholderIfAbsent=true"}
            alt={selectedOption === option.value ? "Selected" : "Not Selected"}
            className="aspect-[1] object-contain w-4 shrink-0 my-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectTypeRadio;
