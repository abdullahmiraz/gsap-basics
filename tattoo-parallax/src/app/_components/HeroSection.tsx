"use client";

import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = React.useRef(null);
  const textRef = React.useRef(null);

  const leafRef = React.useRef(null);
  const girlImgRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "53% 50%",

        markers: true,
        scrub: true,
      },
    });

    tl.to(
      textRef.current,
      {
        y: -300,
      },
      "a"
    )
      .to(
        leafRef.current,
        {
          scale: 1.2,
        },
        "a"
      )
      .to(
        girlImgRef.current,
        {
          y: -100,
          scale: 1.3,
        },
        "a"
      )
      .to(
        containerRef.current,
        {
          y: 300,
        },
        "a"
      );
  });

  return (
    <div
      ref={containerRef}
      className="h-screen bg-[#282828] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-[12rem] z-20 font-extralight tracking-tight absolute top-[5rem] text-center"
      >
        WONDERKING TATTOO
      </h1>

      <Image
        ref={leafRef}
        src={"/image/plant.png"}
        alt="plant image"
        width={1200}
        height={500}
        className="w-[1500px] absolute  bottom-0 z-10"
      />

      <div className="bg-[#858480] w-[586px] h-[674px] rounded-t-full absolute bottom-0  z-10 " />
      <Image
        ref={girlImgRef}
        src={"/image/girlImg.png"}
        alt="tattoo girl image"
        width={500}
        height={600}
        className="absolute -bottom-8 z-30 "
      />
    </div>
  );
};
