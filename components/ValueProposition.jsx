import React from "react";
import {
  supportico,
  clockico,
  formatico,
  plagico,
  privacyico,
  qualityico,
} from "@/public/assets";
import Image from "next/image";


const ValueProposition = () => {
  return (
  <div className="-mt-24 bg-white pt-40 pb-20 grid grid-col-1 lg:grid-cols-3  lg:container lg:mx-auto">
    <div className="flex flex-col items-center mb-10 lg:mb-2">
      <h2 className=" text-gray-600  text-sm text-center lg:text-left">Value Proposition</h2>
      <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6"></div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-10">Value Proposition</h2>
      <button className="bg-orange-600 text-white px-5 text-lg p-2">ORDER</button>
    </div>
    
    <div className="grid grid-cols-2 lg:col-span-2 gap-2 p-2">
        <ValueCard  alt="no plagiarism" name="100% original and unique work." image={privacyico} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
        <ValueCard  alt="no plagiarism" name="100% original and unique work." image={supportico} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
        <ValueCard  alt="no plagiarism" name="100% original and unique work." image={clockico} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
        <ValueCard  alt="no plagiarism" name="100% original and unique work." image={formatico} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
        <ValueCard  alt="no plagiarism" name="100% original and unique work." image={plagico} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
        <ValueCard  alt="no plagiarism" name="100% original and unique work." image={qualityico} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
    </div>
  </div>
  )
};


const ValueCard = ({image,alt,name,desc}) => {
    return(
        <div className="cursor-default ">
          <div className="flex justify-center items-center">
           
              <Image src={image} alt={alt} width={100} height={100} className="w-[70px] lg:w-[100px]"/>
            
          </div>
          <div className="my-4 text-center">
            <p className="text-sm sm:text-base md:text-lg my-2 ">{name}</p>
            <p className="text-xs sm:text-sm md:text-base">{desc}</p>
          </div>
      </div>
    )
}

export default ValueProposition;
