"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
const Location = () => {
  const fadeInLocation = useRef(null);

  useEffect(() => {
    const target = fadeInLocation.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".locationHead").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 9
            }s`;
          });
        } else {
          document.querySelectorAll(".locationHead").forEach((item, index) => {
            item.style.animation = "none";
          });
        }
      });
    });

    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div className="mt-6">
      <div className="relative overflow-hidden">
        <div className="w-[150%] lg:w-[100%] relative -translate-x-[15%] lg:translate-x-0">
          <Image
            // className=""
            src="/UNDERWATER_ILLUSTRATION_SET.png"
            width={3000}
            height={300}
            alt="nature video"
          />
        </div>

        <div ref={fadeInLocation} className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image
            className="locationHead opacity-0 w-[2rem] sm:w-[4rem] lg:w-[6rem]"
            src="/LOGO_2_BK.png"
            width={100}
            height={300}
            alt="nature video"
          />
          <div className="text-lg sm:text-3xl lg:text-5xl mt-3">
            <p className="locationHead opacity-0 en-vertical-text">L</p>
            <p className="locationHead opacity-0 en-vertical-text">O</p>
            <p className="locationHead opacity-0 en-vertical-text">C</p>
            <p className="locationHead opacity-0 en-vertical-text">A</p>
            <p className="locationHead opacity-0 en-vertical-text">T</p>
            <p className="locationHead opacity-0 en-vertical-text">I</p>
            <p className="locationHead opacity-0 en-vertical-text">O</p>
            <p className="locationHead opacity-0 en-vertical-text">N</p>
          </div>
        </div>
      </div>

      <div className=" relative grid place-items-center">
        <Image
          className="w-[90%] lg:w-[80%]"
          src="/LOCATION_IMG_DUMMY.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
          ものがたり
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          見飽きることはありません︒
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          毎日眺めていても
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          東側から望む富士の稜線はたおやかで︑
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-4">
          富士山をつねに見上げる御殿場︒
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">酒造りを</p>
        {/* </p> */}
      </div>

      <section className="grid place-items-center lg:flex w-[90%] lg:w-[80%] xl:w-[70%] relative left-1/2 -translate-x-1/2 items-center lg:justify-between">
        <div className="">
          <div className="textImage relative">
            <Image
              className="w-[30rem] mt-6"
              src="/LOCATION_IMG_2_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              ---- Shuzo
            </p>
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              READ MORE
              <Image
                className="inline-block relative left-[10%] mt-3"
                src="/READMORE_DROP.png"
                width={15}
                height={50}
                alt="nature video"
              />
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              見飽きることはありません︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              毎日眺めていても
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              東側から望む富士の稜線はたおやかで︑
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-4">
              富士山をつねに見上げる御殿場︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">酒造りを</p>
          </div>
        </div>

        <div>
          <div className="textImage relative">
            <Image
              className="w-[30rem] mt-6"
              src="/LOCATION_IMG_3_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              ---- Team Gotemba
            </p>
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              READ MORE
              <Image
                className="inline-block relative left-[10%] mt-3"
                src="/READMORE_DROP.png"
                width={15}
                height={50}
                alt="nature video"
              />
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              見飽きることはありません︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              毎日眺めていても
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              東側から望む富士の稜線はたおやかで︑
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-4">
              富士山をつねに見上げる御殿場︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">酒造りを</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
