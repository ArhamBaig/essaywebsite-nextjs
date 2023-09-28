"use client";
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

export function Hero() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row shadow-lg bg-slate-100 shadow-slate-400 w-full justify-center items-center xl:items-baseline xl:justify-between sm:px-2 md:px-6 lg:px-0 xl:px-28 z-40">
        <div className="relative lg:h-[700px] mt-28">
          {/* Text Content */}
          <div className=" z-10 sm:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl mt-20 flex flex-col items-center justify-center lg:text-left lg:justify-start lg:items-start px-8 ">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  md:pt-6 text-center lg:text-left">
              Link your success with the ink of best essay writing service.
            </h1>
            <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6"></div>
            <h2 className="md:text-xl sm:text-lg text-base font-light text-gray-500 lg:max-w-lg xl:max-w-full text-center lg:text-left ">
              We bring the best proper suit of solutions for any academic problem, letting you achieve your grades goal. While maintaining your trust and privacy.
            </h2>

            <div className="flex">
              <button
                id="placeOrderButton"
                className="bg-orange-600 w-[180px] sm:w-[200px] font-medium my-6 py-3 text-white transition-all active:scale-95 z-10"
                onClick={() => {
                  if (typeof Tawk_API !== "undefined") {
                    Tawk_API.toggle();
                  }
                }}
              >
                PLACE AN ORDER
              </button>
            </div>
            <div className="lg:absolute lg:bottom-0 lg:left-0 opacity-50">
              <Image
                src={hero}
                width={700}
                height={400}
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:h-fit mt-10 p-4  lg:mt-52  shadow-lg m-6  lg:w-[600px] bg-white">
          <h2 className=" text-gray-600 text-sm ">Our Top Services</h2>

          <TopServiceCard
            title={"Essay"}
            description={"get the best essay service through our academic professional Essay Writing UK."}
            image={essayico}
            alt={"essay icon"}
          />
          <TopServiceCard
            title={"Report"}
            description={"we bring the best quality of report on your service."}
            image={reportico}
            alt={"report icon"}
          />
          <TopServiceCard
            title={"Assignment"}
            description={"your required need for complex or simple assignments will be catered here."}
            image={assignmentico}
            alt={"assignment icon"}
          />
          <TopServiceCard
            title={"Case Study"}
            description={"let us serve you the best solutions of any case study of any topic."}
            image={casestudyico}
            alt={"case study icon"}
          />
          <TopServiceCard
            title={"Disseration"}
            description={"Trust our professionals to provide complete dissertation service through a strong research game."}
            image={dissertationico}
            alt={"dissertation icon"}
          />
          <button className="bg-white ring-1 ring-orange-600 text-orange-600 p-2 mt-6">See More {">"}</button>
        </div>
      </section>

    </div>
  );
}

const TopServiceCard = ({ title, description, image, alt }) => {
  return (
    <div className=" h-20 p-2 my-2 group cursor-pointer px-1 grid grid-cols-10 w-full max-w-4xl">
      <div className=" flex items-center col-span-1">
        <Image src={image} width={50} height={50} alt={alt}/>
      </div>
      <div className="col-span-8 flex flex-col w-full justify-start items-start ml-2">
        <h3 className="text-lg sm:text-xl">{title}</h3>
        <p className="text-xs sm:text-sm line-clamp-3">{description}</p>
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
