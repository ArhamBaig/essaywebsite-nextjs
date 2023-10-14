"use client";
import Lottie from "lottie-react";
import animationData from "@/public/lottie-files/herolottiefile.json";
import Image from "next/image";
import { contentData } from "@/constants";
import Link from "next/link";
import { logowhite } from "@/public/assets";

const allServicesPage = () => {
  return (
    <>
      <div className="px-10 container mx-auto  mt-28 pb-14 ">
        <div className="flex flex-col justify-center items-center pb-10">
        <Lottie
        animationData={animationData}
        className="h-32 w-32"
        loop={true}
      />
          <h1 className="text-4xl text-orange-500">Our Main Services</h1>
          <p className="text-gray-300 text-lg mt-2">Have a look at all the services we offer!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl lg:grid-cols-3 gap-6">
          {contentData.map((link, index) => (
            <Link key={index} href={link.slug}>
            <div
              
              className="duration-300 transition-all p-5 shadow-lg rounded-lg  bg-slate-800 hover:shadow-lg hover:shadow-orange-100 to-orange-800   text-white  flex justify-between"
            >
              <Image src={logowhite} width={100} alt="BEW logo" className="object-cover " />
              <div className="flex ml-5 flex-col">
            
                <p className="font-bold ">{link.serviceName}</p>
                <p className="  text-sm text-gray-300 line-clamp-2">
                  {link.description}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default allServicesPage;
