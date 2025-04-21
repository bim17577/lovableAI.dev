import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <div className="text-[rgba(43,42,42,1)] text-[15px] font-medium leading-[27px] mb-3">
        {title}
      </div>
      {children}
    </div>
  );
};

export default FormSection;
