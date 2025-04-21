import React, { useState } from "react";

interface TextAreaProps {
  label: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder = "" }) => {
  const [text, setText] = useState<string>("");

  return (
    <div className="mb-8">
      <div className="text-[rgba(43,42,42,1)] text-[15px] font-medium leading-[27px] mb-3">
        {label}
      </div>
      <div className="border flex w-full shrink-0 h-[226px] rounded-[10px] border-black border-solid">
        <textarea
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full p-4 bg-transparent outline-none resize-none"
        />
      </div>
    </div>
  );
};

export default TextArea;
