import React from "react";
import Phone from "../assets/Phone.png";
import CCard from "../assets/CCard.png";
import RCard from "../assets/RCard.png";
import SCard from "../assets/SCard.png";
import Akash from "../assets/Akash.png";
import Rahul from "../assets/Rahul.png";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="h-[62vh] lg:h-screen relative pt-[6rem] 2xl:pt-[12rem] bg-[#E0E3FD]">
      <div className="relative h-full rounded-3xl border border-[#EDEDEF] pt-10 ">
        <div className=" flex relative flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-1 md:gap-0">
            <h1 className="text-[#695FD9] text-[24px] md:text-[40px] 2xl:text-[70px] font-Manrope font-bold leading-none">
              Passport OCR SDK
            </h1>
            <h1 className="text-[#0D0D10] text-[24px] md:text-[40px] 2xl:text-[70px] font-bold font-Manrope leading-none">
              unmatched cost efficiency
            </h1>
          </div>
          <p className="flex  text-center font-Montserrat text-xs md:text-sm max-w-[250px] md:max-w-xl font-Montserrat">
            Verify identities quickly with just a smartphone and an electronic
            passport. Experience effortless and secure identity verification with
            our NFC-propelled Passport SDK.
          </p>
          <div className="absolute top-40 left-16 xl:top-60 xl:left-68">
            <img src={Akash} alt="" className="w-12 h-10 xl:w-15 xl:h-12" />
          </div>
          <div className="absolute top-14 right-8 xl:right-74 xl:top-37">
            <img src={Rahul} alt="" className="w-12 h-10 xl:w-15 xl:h-12" />
          </div>

          <Button className="text-sm md:text-base font-Montserrat px-8 py-4 !rounded-[40px] cursor-pointer">
            Book Demo
          </Button>
        </div>
        <div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img src={Phone} alt="" className="h-[20vh] w-[38vw] xl:w-[20vw] xl:h-[40vh]" />
              
              <div className="absolute top-20 -left-16 xl:-left-40">
                <img src={RCard} alt="" className="w-20 h-18 xl:w-48 xl:h-38" />
              </div>
              <div className="absolute top-13 -right-21 xl:-right-44">
                <img src={SCard} alt="" className="w-20 h-13 xl:w-40 xl:h-26" />
              </div>
              <div className="absolute top-32 xl:top-45.5 -right-16 xl:-right-20">
                <img src={CCard} alt="" className="w-18 h-6 xl:w-22 xl:h-9" />
              </div>
              <div className="absolute top-3 -left-26 xl:top-3 xl:-left-35">
                <img src={CCard} alt="" className="w-18 h-6 xl:w-22 xl:h-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
