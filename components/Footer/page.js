import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
      <div className="sm:w-[80vw] lg:ml-[10%] mt-[20%] md:mt-[10%] mb-[60%] md:mb-[15%] flex flex-basis flex-col md:flex-row bg-white border-t border-gray-500 justify-between items-start gap-2">
        {/* Left Logo Section */}
        <div className="flex basis-1/3 mt-14 md:mt-20 ml-[5.5%] w-[90%] py-2 md:ml-[0] justify-center"> 
        <Image
          className=" md:w-[100%] md:h-[100%] md:-mr-12"
          src="/TOP_PAGE_FV_FOR_OPEN.png"
          width={300}
          height={100}
          alt="Cloud 3"
        />
        </div>

        <div className=" relative flex basis-1/3 mt-12 justify-center ml-[5.5%] w-[90%] py-2 md:ml-[0]">
          <p className="vertical-text text-[11px] md:text-sm mr-3 ml-1 md:ml-3 mt-6 text-stone-400">
            見飽きることはありません︒
          </p>
          <p className="vertical-text text-[11px] md:text-sm mr-3 mt-6 text-stone-400">
            毎日眺めていても
          </p>
          <p className="vertical-text text-[11px] md:text-sm mr-3 mt-6 text-stone-400">
            東側から望む富士の稜線はたおやかで︑
          </p>
          <p className="vertical-text text-[11px] md:text-sm mr-3 mt-6 text-stone-400">
            富士山をつねに見上げる御殿場︒
          </p>
          <p className="vertical-text text-[11px] md:text-sm mr-5 mt-6 text-stone-400">
            酒造りを
          </p>

          <p className="vertical-text text-black mr-6 mt-2 md:mr-9  text-sm md:text-xl font-semibold ">
            <span className="en-vertical-text">ABOUT US</span>
          </p>

          <p className="vertical-text text-[11px] md:text-sm -ml-3 md:-ml-2 mr-5 md:mr-4 mt-6 text-stone-400">
            酒造りを
          </p>
          <span className="en-vertical-text text-[11px] md:text-sm -ml-3 mr-5 md:mr-3 mt-6 text-stone-400">
            ONLINE STORE
          </span>
          <p className="vertical-text text-[11px] md:text-sm -ml-3 mr-3 md:-ml-2 md:-mr-16 mt-6 text-stone-400">
            毎日眺めていても
          </p>

        </div>


        <div className="flex basis-1/3 mt-12 md:mt-14 justify-center ml-[11.5%] w-[90%] py-2 md:ml-[0] md:mr-4">
          <p className="vertical-text text-black mr-6 md:mr-8 text-sm md:text-xl -ml-10 font-semibold ">
            <span className="en-vertical-text">SHOP INFO</span> 御厨榮蔵
          </p>
          <p className="vertical-text text-black mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
            <span className="en-vertical-text">NEWS</span> お知らせ
          </p>
          <p className="vertical-text text-black mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
            <span className="en-vertical-text">ENJOY</span> お酒を楽しく美味しく
          </p>
          <p className="vertical-text text-black mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
            <span className="en-vertical-text">PRODUCTS</span> わたしたちのお酒
          </p>
          <p className="vertical-text text-black mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
            <span className="en-vertical-text">LOCATION</span> 郷土
          </p>
          <p className="vertical-text text-black mr-0 md:mr-0 text-sm md:text-xl font-semibold ">
            <span className="en-vertical-text">STORY</span> ものがたり
          </p>
        </div>

        {/* Right Section (Social Icons or Additional Info) */}
        <div className=" absolute basis-1/3  flex flex-row gap-8 ml-[18%] mt-[280%] md:mt-[22%] md:ml-[32.5%]">
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaInstagram />
          </p>
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaXTwitter />
          </p>
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaFacebook />
          </p>
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaYoutube />
          </p>
        </div>
      </div>
  
  );
};

export default Footer;
