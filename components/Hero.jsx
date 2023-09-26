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
import { ToastContainer, toast } from "react-toastify";

export function Hero() {


  return (
    <div>
      <section className="flex flex-col lg:flex-row shadow-lg bg-slate-100 shadow-slate-400 w-full justify-center items-center xl:items-baseline xl:justify-between sm:px-12 md:px-16 lg:px-20 xl:px-28 z-40">
        <div className=" xl:h-[700px] mt-28">
          {/* Text Content */}
          <div className="z-10 sm:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl mt-20  text-left px-8 ">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-3xl  md:pt-6 ">
              Link your success with the ink of best essay writing service.
            </h1>
            <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6"></div>
            <h2 className="md:text-xl sm:text-lg text-base font-light text-gray-500 lg:max-w-lg xl:max-w-full ">
              Let Your Ideas Flourish, Our Specialists Bring Your Essays to
              Life! Let Your Ideas Flourish, Our Specialists Bring Your Essays to
              Life!
            </h2>

            <div className="flex flex-col mobile:flex-row items-center">
              <button
                id="placeOrderButton"
                className="bg-orange-600 w-[180px] sm:w-[200px] font-medium my-2 mobile:my-6 py-3 text-white  transition-all  active:scale-95"
                onClick={() => {
                  if (typeof Tawk_API !== "undefined") {
                    Tawk_API.toggle();
                  }
                }}
              >
                PLACE AN ORDER
              </button>
            </div>
            <div className="">
              <Image
                src={hero}
                width={1000}
                height={300}
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:h-fit mt-10 p-4  lg:mt-52  shadow-lg m-6  lg:w-[600px] bg-white">
          <h2 className=" text-gray-600 text-sm ">Our Top Services</h2>

          <TopServiceCard
            title={"Essay"}
            description={"essay essay essay essay essay essay essay essay essay essay essay"}
            image={essayico}
            alt={"essay icon"}
          />
          <TopServiceCard
            title={"Report"}
            description={"essay essay essay essay essay essay essay essay essay essay essay"}
            image={reportico}
            alt={"report icon"}
          />
          <TopServiceCard
            title={"Assignment"}
            description={"essay essay essay essay essay essay essay essay essay essay essay"}
            image={assignmentico}
            alt={"assignment icon"}
          />
          <TopServiceCard
            title={"Case Study"}
            description={"essay essay essay essay essay essay essay essay essay essay essay"}
            image={casestudyico}
            alt={"case study icon"}
          />
          <TopServiceCard
            title={"Disseration"}
            description={"essay essay essay essay essay essay essay essay essay essay essay"}
            image={dissertationico}
            alt={"dissertation icon"}
          />
          <button className="bg-white ring-1 ring-orange-600 text-orange-600 p-2 mt-2">See More {">"}</button>
        </div>
      </section>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

const TopServiceCard = ({ title, description, image, alt }) => {
  return (
    <div className="w-full flex min-h-[50px] p-2 my-2 group cursor-pointer px-10">
      <div className="mx-4 justify-center items-center flex">
        <Image src={image} width={64} height={64} alt={alt} className=""/>
      </div>
      <div className="">
        <h3 className="text-lg sm:text-xl">{title}</h3>
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
      <div className=" flex justify-center items-center">
        <Image
          src={rightarrow}
          width={12}
          height={12}
          alt="right arrow"
          className="group-hover:translate-x-3 transition-all"
        />
      </div>
    </div>
  );
};
