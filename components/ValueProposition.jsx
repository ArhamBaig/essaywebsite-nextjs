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
  <div className="-mt-24 bg-white pt-40 pb-20 grid grid-cols-3  container mx-auto">
    <div className="flex flex-col items-center">
    <h2 className=" text-gray-600 text-sm text-left">Value Proposition</h2>
    <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6"></div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-10">Value Proposition</h2>
    <button className="bg-orange-600 text-white px-5 text-lg p-2">ORDER</button>
    </div>
    <div className="grid grid-cols-2 col-span-2 space-x-10">
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
        <div className="">
        <div className="flex justify-center">
          <div className="">
            <Image src={image} alt={alt} width={100} />
          </div>
        </div>
        <div className="my-4 text-center">
          <p className=" text-sm sm:text-base md:text-lg font-bold ">{name}</p>
          <p className="text-xs sm:text-sm md:text-base">{desc}</p>
        </div>
      </div>
    )
}

export default ValueProposition;
