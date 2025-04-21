import React from "react";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-[rgba(11,53,98,1)] text-[23px] text-white font-semibold whitespace-nowrap leading-none mt-[60px] pt-[17px] pb-[27px] px-[70px] rounded-[10px] max-md:max-w-full max-md:mt-10 max-md:px-5 cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
