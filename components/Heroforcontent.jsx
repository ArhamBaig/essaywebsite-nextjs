"use client";
import Lottie from "lottie-react";
import animationData from "@/public/lottie-files/herolottiefile.json";

import Image from "next/image";
import {
  hero,
  essayico,
  dissertationico,
  assignmentico,
  casestudyico,
  reportico,
  rightarrow,
  
} from "../public/assets";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export function Heroforcontent({heading1,heading2}) {
  function scroll30Percent() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const targetScroll = windowHeight * 0.8;
  
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  }
  return (

    <div>
      <section className="flex flex-col lg:flex-row shadow-lg bg-gradient-to-b from-slate-900 from-70% to-slate-600 w-full justify-center items-center sm:px-2 md:px-6 lg:px-0 xl:px-28 z-10">
        <div className="relative lg:h-[700px] mt-24">
          {/* Text Content */}
          <div className=" z-10 sm:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl  flex flex-col items-center justify-center lg:text-left lg:justify-start lg:items-start px-8 ">
            <h1 className="xl:text-5xl text-white lg:text-4xl md:text-3xl text-2xl md:pt-6 text-center lg:text-left">
              {heading1}
            </h1>
            <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6"></div>
            <h2 className="md:text-xl italic sm:text-lg text-base text-gray-300  font-light max-w-sm lg:max-w-sm xl:max-w-3xl text-center lg:text-left ">
            {heading2}
            
            </h2>
           
            <div onClick={scroll30Percent} className="cursor-pointer relative mt-20 z-20">
            <Lottie
        animationData={animationData}
        className="z-4 0 absolute h-32 w-32 right-7 -top-20 lg:right-0"
        loop={true}
      />
              <button
                
                className="bg-orange-600 font-bold w-[180px] sm:w-[200px]  my-6 py-3 text-white transition-all "
               
              >
                Take me to content!
              </button>
            </div>
            <div className="lg:absolute lg:bottom-0  lg:left-44">
              <Image
                src={hero}
                width={700}
                height={400}
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-col hidden justify-center items-center sm:h-fit mt-10 p-4  shadow-lg m-6  lg:w-[600px] b bg-gradient-to-r  from-orange-500/70  to-orange-600/70  rounded-lg">
          <h2 className=" text-gray-100 text-sm ">Our Top Services</h2>

          <TopServiceCard
            title={"Essay"}
            description={"Intro, body, and conclusion, with proper formatting and referencing."}
            image={essayico}
            alt={"essay icon"}
          />
          <TopServiceCard
            title={"Report"}
            description={"The most professional 9-step structure, from the introduction to the decision."}
            image={reportico}
            alt={"report icon"}
          />
          <TopServiceCard
            title={"Assignment"}
            description={"The most reliable standards set by the educational leaders."}
            image={assignmentico}
            alt={"assignment icon"}
          />
          <TopServiceCard
            title={"Case Study"}
            description={"The best solutions for any case study of any topic."}
            image={casestudyico}
            alt={"case study icon"}
          />
          <TopServiceCard
            title={"Disseration"}
            description={"5 chapters’ breakdown – introduction, literature review, methodology, analysis, and conclusion."}
            image={dissertationico}
            alt={"dissertation icon"}
          />
          <Link href='/allservices'><button className="bg-transparent text-white ring-1 ring-white p-2 mt-6">See All {">"}</button></Link>
        </div>
      </section>
    </div>
  );
}
const TopServiceCard = ({ title, description, image, alt }) => {
  return (
    <div className=" h-20 p-2 my-2 group relative cursor-pointer px-1 grid grid-cols-10 w-full max-w-4xl">
      <div className=" flex items-center col-span-1">
        <Image src={image} width={50} height={50} alt={alt}/>
      </div>
      <div className="col-span-8 flex flex-col w-full justify-start items-start ml-2">
        <h3 className="text-lg text-white sm:text-xl">{title}</h3>
        <p className="text-xs text-white sm:text-sm line-clamp-3">{description}</p>
      </div>
      <div className=" flex col-span-1 justify-center items-center">
        <Image
          src={rightarrow}
          width={12}
          height={12}
          alt="right arrow"
          className="group-hover:translate-x-3 transition-all object-"
        />
      </div>
    </div>
  );
};
