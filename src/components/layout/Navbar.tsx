import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="z-0 flex w-full items-stretch gap-[40px_84px] overflow-hidden text-xl font-semibold leading-none flex-wrap pl-20 max-md:max-w-full max-md:pl-5">
      <div className="flex items-stretch gap-10 text-[rgba(119,117,117,1)] grow shrink basis-auto my-auto max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/ef5cdcaaf2ddf753ab827aa8c2617ff992136b3d?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1.33] object-contain w-[93px] shrink-0"
        />
        <div className="text-black whitespace-nowrap mt-9">
          <div>Home</div>
          <div className="shrink-0 h-0.5 mt-[18px]" />
        </div>
        <div className="my-auto">About Us</div>
        <div className="mt-9">Projects</div>
        <div className="basis-auto mt-9">Leader Board</div>
        <div className="my-auto">Contact</div>
      </div>
      <div className="relative min-h-[84px] gap-3.5 text-black grow shrink basis-auto pl-20 pr-[26px] py-3.5 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/f574aeca83e4c53cd20b4421ac216f17cabd142d?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative bg-white px-[33px] py-[19px] rounded-[10px] max-md:px-5">
          Sign In
        </div>
        <div className="relative bg-white px-[35px] py-[19px] rounded-[10px] max-md:px-5">
          Log In
        </div>
      </div>
    </div>
  );
};

export default Navbar;
