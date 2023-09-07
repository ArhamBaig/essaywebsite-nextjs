"use client";
import Image from "next/image";
import { heroimg, premium, moneyback, trusted , unilogos} from "../public/assets";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  const scrollToSection = (event) => {
    event.preventDefault();
    const section = document.getElementById("dragndroporder");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col">
      <div className="relative  w-full h-[700px] mx-auto shadow-lg bg-slate-100 shadow-slate-400 text-center flex flex-col justify-center object-contain">
        {/* Text Content */}
        <div className="z-10 sm:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl mt-20  text-left px-8 ">
          
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-slate-700">
            The Top-Rated and Best Essay Writing Service in UK to achieve A+
            <div className="gradient z-10"></div>
            grade<span className="text-orange-600">.</span>
          </h1>
          <div className="flex">
            <h2 className="md:text-4xl sm:text-3xl text-xl font-bold py-4 text-slate-700">
              <span className="text-slate-800">Best place to get your</span>
              <p className="text-orange-600">
                <Typewriter
                  words={[
                    " Essays",
                    " Reports",
                    " Dissertations",
                    " Assignments",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </h2>
          </div>

          <p className="md:text-xl text-lg font-bold text-gray-500 lg:max-w-lg xl:max-w-full ">
            Let Your Ideas Flourish, Our Specialists Bring Your Essays to Life!
          </p>
          <div className="flex justify-start p-5 w-full mobile:flex-row items-center">
            <div className="px-4">
              <Image
                src={moneyback}
                alt="Money Back Guarantee"
                height={60}
                width={60}
              />
            </div>
            <div className="px-4">
              <Image
                src={trusted}
                alt="Trusted service"
                height={60}
                width={60}
              />
            </div>
            
            <div className="px-4">
              <Image
                src={premium}
                alt="Premium quality service"
                height={60}
                width={60}
              />
            </div>
          </div>

          <div className="flex flex-col mobile:flex-row items-center">
            <button
              id="placeOrderButton"
              className="bg-orange-600 shadow-lg shadow-orange-400 mx-2 w-[200px] rounded-full font-medium my-2 mobile:my-6 py-3 text-white hover:bg-white transition-all hover:text-black border-orange-600 hover:ring-1 hover:ring-orange-600 hover:shadow-orange-500 hover:shadow-md"
              onClick={scrollToSection}
            >
              Place an order
            </button>

            <button
              className="bg-white ring-1 mx-2 ring-orange-600 shadow-md shadow-slate-500 rounded-full w-[200px] font-medium my-2 mobile:my-6 py-3 text-black
          hover:bg-orange-600 transition-all hover:shadow-md hover:shadow-slate-500 hover:text-white "
          onClick={() => {
            if (typeof Tawk_API !== "undefined") {
              Tawk_API.toggle();
            }
          }}
              
            >
              Get consultancy
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block md:absolute md:inset-y-0 md:right-14 md:w-[35%] md:mt-64">
          <Image
            className="object-cover lg:min-w-full"
            src={heroimg} // Replace with the actual image source
            alt="hero image"
            fill
            // className="object-cover"
          />
        </div>
      </div>
      <Image src={unilogos} width={1600} height={60} alt="All universities logos" className="mt-3  mx-auto" />
    </section>
  );
}
