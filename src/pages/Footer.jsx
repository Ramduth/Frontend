import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Innovate from "../assets/Innovate.png";

function Footer() {
  return (
    <div className=" relative flex flex-col gap-16 md:gap-30">
      <div className="flex flex-col gap-6 md:flex-row justify-between px-4 md:px-14 py-8">
        <div className="flex flex-col gap-2 w-full lg:w-[540px]">
          <div>
            <img src={Logo} alt="" cclassName="h-4 w-10 object-cover" />
          </div>
          <p className="text-sm lg:text-lg font-Manrope">
            Simplify your document verification process with our Passport SDK.
            Schedule a free demo to see how it works and integrates effortlessly
            into your system.
          </p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <Link className="font-Manrope text-sm 2xl:text-lg font-semibold text-[#3E3E42]">Home</Link>
          <Link className="font-Manrope text-sm 2xl:text-lg font-semibold text-[#3E3E42]">FAQs</Link>
          <Link className="font-Manrope text-sm 2xl:text-lg font-semibold text-[#3E3E42]">Industries</Link>
          <Link className="font-Manrope text-sm 2xl:text-lg font-semibold text-[#3E3E42]">blog</Link>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 text-sm 2xl:text-lg">
          <h1 className="font-semibold text-[#3E3E42]">Contact Info</h1>
          <h1 className="text-[#3E3E42] font-Manrope underline cursor-pointer">connect@pixl.ai</h1>
        </div>
      </div>
      <div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img src={Innovate} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
