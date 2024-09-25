"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  const vid1 = useRef(null);
  const vid2 = useRef(null);
  const vid3 = useRef(null);
  const vid4 = useRef(null);
  const vid5 = useRef(null);
  const vid6 = useRef(null);
  return (
    <main
      id="main"
      className="topPageMain h-[100vh] relative overflow-hidden border-0 border-red-500"
    >
      <div className="clouds " style={{ height: "100vh", width: "100vw" }}>
        {/* Cloud 1 - Slow Speed */}
        <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud1.png"
            style={{ "--i": 1 }}
            width={2100}
            height={100}
            alt="Cloud 1"
          />
          {/* Cloud 2 - Fast Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud2.png"
            style={{ "--i": 2 }}
            width={2100}
            height={100}
            alt="Cloud 2"
          />
          {/* Cloud 3 - Medium Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud3.png"
            style={{ "--i": 3 }}
            width={2100}
            height={100}
            alt="Cloud 3"
          />
          {/* Cloud 4 - Reverse Slow */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud4.png"
            style={{ "--i": 4 }}
            width={2100}
            height={100}
            alt="Cloud 4"
          />
          {/* Cloud 5 - Slow Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud5.png"
            style={{ "--i": 5 }}
            width={2100}
            height={100}
            alt="Cloud 5"
          />
      </div>

      <div className="z-[20] border-0 border-blue-500">
        <video
          muted
          loop
          ref={vid1}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid2}
          src="/nature_vid2.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid3}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid4}
          src="/nature_vid2.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid5}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid6}
          src="/nature_vid2.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
      </div>

      <div className="z-[40] absolute top-0 grid place-items-center w-[100%] h-[100%] border-0 border-yellow-300">
        <section className="lg:flex grid place-items-center items-center w-[100%] border-0 border-cyan-300">
          <div className="flex justify-between w-[95%] sm:w-[70%] lg:w-[50%] xl:w-[30%]  lg:ml-10 xl:ml-44 mb-24 lg:mb-0 border-0 border-green-500">
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid1.current.style.opacity = 1;
                vid1.current.play();
              }}
              onMouseLeave={() => {
                vid1.current.style.opacity = 0;
                vid1.current.pause();
              }}
            >
              <span className="en-vertical-text">SHOP INFO</span> 御厨榮蔵
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid2.current.style.opacity = 1;
                vid2.current.play();
              }}
              onMouseLeave={() => {
                vid2.current.style.opacity = 0;
                vid2.current.pause();
              }}
            >
              <span className="en-vertical-text">NEWS</span> お知らせ
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid3.current.style.opacity = 1;
                vid3.current.play();
              }}
              onMouseLeave={() => {
                vid3.current.style.opacity = 0;
                vid3.current.pause();
              }}
            >
              <span className="en-vertical-text">ENJOY</span>{" "}
              お酒を楽しく美味しく
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid4.current.style.opacity = 1;
                vid4.current.play();
              }}
              onMouseLeave={() => {
                vid4.current.style.opacity = 0;
                vid4.current.pause();
              }}
            >
              <Link href={"/ProductsPage"} passHref>
                <span className="en-vertical-text">PRODUCTS</span>{" "}
                わたしたちのお酒
              </Link>
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid5.current.style.opacity = 1;
                vid5.current.play();
              }}
              onMouseLeave={() => {
                vid5.current.style.opacity = 0;
                vid5.current.pause();
              }}
            >
              <Link href={"/LocationPage"} passHref>
                <span className="en-vertical-text">LOCATION</span> 郷土
              </Link>
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid6.current.style.opacity = 1;
                vid6.current.play();
              }}
              onMouseLeave={() => {
                vid6.current.style.opacity = 0;
                vid6.current.pause();
              }}
            >
              <Link href={"/StoryPage"} passHref>
                <span className="en-vertical-text">STORY</span> ものがたり
              </Link>
            </p>
          </div>

          <div className="w-[70%] md:w-fit lg:ml-auto lg:mr-10 xl:mr-60 border-0 border-white">
            <Image src={"/LOGO_WH.png"} width={350} height={100} alt="logo" />
          </div>
        </section>
      </div>

      <div className="absolute left-[50%] bottom-2">
        <p className="en-vertical-text-scroll scroll-text text-black">scroll</p>
        <Image
          className="scroll-img"
          src={"/SCROLL_DROP_ELEMENT.png"}
          width={20}
          height={100}
          alt="logo"
        />
      </div>
    </main>
  );
};

export default LandingPage;
