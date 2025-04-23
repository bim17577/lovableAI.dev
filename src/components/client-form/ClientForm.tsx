import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FormSection from "./FormSection";
import ProjectTypeRadio from "./ProjectTypeRadio";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  companyName: "",
  industry: "",
  companyWebsite: "",
  email: "",
};

const ClientForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-[rgba(248,248,248,1)] relative overflow-hidden">
      <Navbar />

      {/* Logo above the blue banner */}
      <div className="flex w-full justify-center pt-14 pb-3">
        <img
          src="/lovable-uploads/5816b89c-e6bd-463a-b497-f843224f0a79.png"
          alt="Logo"
          className="h-28 max-w-full object-contain"
        />
      </div>

      {/* Banner Section */}
      <div className="z-0 w-full overflow-hidden mt-[0px] max-md:max-w-full">
        <div className="bg-[rgba(11,53,98,1)] w-full max-md:max-w-full max-md:px-5 
                        flex justify-center items-center 
                        text-[67px] text-[rgba(212,212,211,1)] font-extrabold leading-[0.3]
                        pl-[90px] pr-[70px] pt-[100px] pb-[85px] max-md:text-[40px] max-md:pt-[60px] max-md:pb-[60px]">
          Project Creation
        </div>
      </div>

      {/* Form Section */}
      <div className="z-0 flex w-full flex-col overflow-hidden items-center justify-center mt-[53px] px-20 py-11 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1128px] flex-col items-stretch max-md:max-w-full">
          <div className="text-[rgba(11,53,98,1)] text-3xl font-extrabold leading-[46px] text-center max-md:max-w-full">
            Share your project challenge by completing the questionnaire below,
            or feel free to contact us directly for a personalized discussion.
          </div>

          <div className="w-[891px] max-w-full mt-20 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col items-stretch max-md:mt-10">
                  <ProjectTypeRadio
                    title="Is this a company project or a personal project?"
                    options={[
                      { label: "Personal Project", value: "personal" },
                      { label: "Company Project", value: "company" },
                    ]}
                  />

                  <FormInput
                    label="Company Name"
                    icon="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/0c24e1a96b54c076d93cb4bd81bde963258ed403?placeholderIfAbsent=true"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />

                  <FormInput
                    label="Area of the project (Industry)"
                    icon="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/f97bd42c56d0b623f13e677164887cddc7d882b6?placeholderIfAbsent=true"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch text-[15px] text-[rgba(43,42,42,1)] font-medium leading-[27px] max-md:mt-10">
                  <ProjectTypeRadio
                    title="Is this a paid project or not?"
                    options={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                  />

                  <FormInput
                    label="Company Website"
                    icon="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/21d50e16fec1fe34c51ae66f921669a1389f1506?placeholderIfAbsent=true"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                  />

                  <FormInput
                    label="Email Address"
                    icon="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/0c24e1a96b54c076d93cb4bd81bde963258ed403?placeholderIfAbsent=true"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <TextArea label="Tell us a little bit about what you need" />

          <CheckboxGroup
            title="Which of these best describes what you are hoping to achieve working with us"
            options={[
              {
                label: "I want to build my software product",
                value: "build_product",
              },
              {
                label: "I want to increase engineering bandwidth",
                value: "increase_bandwidth",
              },
              {
                label: "I want to take my product to market",
                value: "market_product",
              },
              {
                label: "I need to generate more leads/customers",
                value: "generate_leads",
              },
            ]}
          />

          <DatePicker label="Schedule meeting based on your availability" />

          <div className="flex justify-center">
            <SubmitButton label="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <Footer />

      {/* Absolute positioned elements */}
      <div className="absolute z-0 flex min-h-5 w-5 h-5 left-[200px] bottom-[802px]" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/38cf693ecf9733c7d3356cdbe1e97891cc4b769d?placeholderIfAbsent=true"
        alt="Icon"
        className="aspect-[1] object-contain w-4 absolute z-0 h-4 right-[414px] top-[820px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/67b07e8582d9f32df4e9b01723074ff639d0d227?placeholderIfAbsent=true"
        alt="Icon"
        className="aspect-[1] object-contain w-4 absolute z-0 h-4 right-[414px] top-[880px]"
      />
    </div>
  );
};

export default ClientForm;
