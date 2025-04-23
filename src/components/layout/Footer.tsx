
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    position: "Student",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer form submitted:", formData);
    // Here you would implement actual form submission logic
    alert("Thanks for contacting us! We'll get back to you soon.");
  };

  return (
    <footer className="bg-[#22242A] z-0 flex w-full flex-col pl-[33px] pr-20 pt-4 pb-[25px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1259px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-4/5 max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[56%] max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col text-base text-white font-normal max-md:max-w-full max-md:mt-8">
                    <Link to="/">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/dc07445d3c52628daac0388e64059a86c62fe0bc?placeholderIfAbsent=true"
                        alt="Logo"
                        className="aspect-[1.33] object-contain w-[149px] z-10 max-w-full"
                      />
                    </Link>
                    <div className="text-lg self-stretch mt-[-27px] max-md:max-w-full">
                      <br />
                      <br />
                      Connecting students and mentors to foster innovation and
                      growth in a collaborative ecosystem.
                    </div>
                    
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-stretch gap-[13px] whitespace-nowrap mt-[53px] max-md:mt-10 hover:underline">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/ea87738fde7e1cc5dc517dab880e88b89ecd15ba?placeholderIfAbsent=true"
                        alt="Location"
                        className="aspect-[1] object-contain w-6 shrink-0"
                      />
                      <div className="mt-1">Anywhere</div>
                    </a>
                    
                    <a href="mailto:contact@example.com" className="flex items-stretch gap-[11px] whitespace-nowrap text-center mt-[38px] hover:underline">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/3dad1ad31189dcede02395e59fc0c37b861f1bbe?placeholderIfAbsent=true"
                        alt="Email"
                        className="aspect-[1] object-contain w-6 shrink-0"
                      />
                      <div className="my-auto">contact@example.com</div>
                    </a>
                  </div>
                </div>
                <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
                  <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch mt-14 max-md:mt-10">
                    <div className="text-white text-[26px] font-bold">
                      Question us
                    </div>
                    <div className="flex items-stretch gap-5 justify-between mt-[34px]">
                      <div className="text-white text-base font-normal">
                        First Name
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Enter your name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-transparent text-sm text-[#9A9EA5] font-light outline-none"
                        />
                        <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                      </div>
                    </div>
                    <div className="flex items-stretch gap-5 justify-between mt-6">
                      <div className="text-white text-base font-normal">
                        Company
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-transparent text-sm text-[#9A9EA5] font-light outline-none"
                        />
                        <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                      </div>
                    </div>
                    <div className="flex w-full items-stretch gap-5 whitespace-nowrap justify-between mt-6 max-md:mr-1">
                      <div className="flex items-stretch gap-[40px_73px]">
                        <div className="text-white text-base font-normal">
                          Position
                        </div>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={(e) => setFormData(prev => ({...prev, position: e.target.value}))}
                          className="bg-transparent text-[#9A9EA5] text-sm font-light outline-none cursor-pointer"
                        >
                          <option value="Student">Student</option>
                          <option value="Teacher">Teacher</option>
                          <option value="Professional">Professional</option>
                        </select>
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/7807db37d9784c1afbdaa68e26cc764be2380854?placeholderIfAbsent=true"
                        alt="Dropdown"
                        className="aspect-[2] object-contain w-2.5 shrink-0 my-auto cursor-pointer"
                      />
                    </div>
                    <div className="border bg-[#696C73] w-[206px] shrink-0 h-px border-[rgba(105,108,115,1)] border-solid" />
                    <div className="flex items-stretch gap-5 justify-between mt-6">
                      <div className="text-white text-base font-normal">
                        Phone
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+94 000 000 000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-transparent text-sm text-[#9A9EA5] font-light outline-none"
                        />
                        <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                      </div>
                    </div>
                    <div className="flex items-stretch gap-5 justify-between mt-6">
                      <div className="text-white text-base font-normal">
                        Email
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-transparent text-sm text-[#9A9EA5] font-light outline-none"
                        />
                        <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow items-stretch gap-5 justify-between mt-14 max-md:mt-10">
              <div className="flex flex-col text-[22px] text-white font-normal">
                <div className="text-[26px] font-bold self-stretch">
                  Company
                </div>
                <Link to="/about" className="mt-[45px] max-md:mt-10 hover:text-[#9A9EA5] transition-colors">About Us</Link>
                <Link to="/careers" className="mt-5 hover:text-[#9A9EA5] transition-colors">Careers</Link>
                <Link to="/faq" className="mt-[19px] hover:text-[#9A9EA5] transition-colors">FAQs</Link>
                <Link to="/team" className="mt-5 hover:text-[#9A9EA5] transition-colors">Teams</Link>
                <Link to="/contact" className="self-stretch mt-[19px] max-md:mr-0.5 hover:text-[#9A9EA5] transition-colors">Contact Us</Link>
              </div>
              <div className="mt-20 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[0.47] object-contain w-2"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[0.47] object-contain w-2 mt-[29px]"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[0.47] object-contain w-2 mt-7"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[0.47] object-contain w-2 mt-[29px]"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[0.47] object-contain w-2 mt-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[1258px] gap-5 flex-wrap justify-between mt-1 max-md:max-w-full">
        <a href="tel:+94000000000" className="flex items-stretch gap-[13px] text-base text-white font-normal hover:underline">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/04632f070495d434a52af13be0535ff08ad27ffc?placeholderIfAbsent=true"
            alt="Phone"
            className="aspect-[1] object-contain w-6 shrink-0"
          />
          <div>+94 000 000 0000 </div>
        </a>
        <Button 
          onClick={handleSubmit}
          className="self-stretch bg-white border min-h-[50px] text-base text-black font-normal text-center mt-[22px] px-[26px] py-4 rounded-[10px] border-black border-solid hover:bg-gray-100 transition-colors max-md:px-5"
        >
          Get started
        </Button>
        <div className="flex gap-[23px] mt-[41px] max-md:mt-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/9cf0c008fcf7a340a1525f3f62f15c2ea1b9060f?placeholderIfAbsent=true"
              alt="Facebook"
              className="aspect-[0.57] object-contain w-[13px] shrink-0"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/fa361803a357ee8311a2a0d585e90b1a53f0404f?placeholderIfAbsent=true"
              alt="Twitter"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/0b6ea147bc3caa29702c260cf0b37f191c69bea8?placeholderIfAbsent=true"
              alt="Instagram"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/4cdca8e23f1feedaf00f8d926949bd40ac891a3b?placeholderIfAbsent=true"
              alt="LinkedIn"
              className="aspect-[1] object-contain w-[22px] shrink-0"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/a643fffdbaf3422bf5f8900f3a748a52599d68a8?placeholderIfAbsent=true"
              alt="YouTube"
              className="aspect-[1.04] object-contain w-[23px] shrink-0"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
