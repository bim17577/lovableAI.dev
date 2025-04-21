import React, { useState } from "react";

interface DatePickerProps {
  label: string;
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder = "mm/dd/yyyy",
}) => {
  const [date, setDate] = useState<string>("");

  return (
    <div className="mb-8">
      <div className="text-[rgba(43,42,42,1)] text-[15px] font-medium leading-[27px] mb-2">
        {label}
      </div>
      <div className="border w-[349px] max-w-full text-[15px] text-[rgba(141,141,141,1)] font-medium whitespace-nowrap leading-[27px] ml-7 px-[45px] py-[11px] rounded-[10px] border-black border-solid max-md:ml-2.5 max-md:px-5">
        <input
          type="text"
          placeholder={placeholder}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </div>
    </div>
  );
};

export default DatePicker;
