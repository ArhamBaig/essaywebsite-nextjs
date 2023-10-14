"use client";
import Image from "next/image";
import { useState } from "react";
import { UKflag, DEflag, AUflag, globe } from "@/public/assets";
import { uniData } from "@/constants";
import Link from "next/link";

const UniversitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUniData = uniData.filter((uni) =>
    uni.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="px-5 container mx-auto flex flex-col pt-28 pb-14  ">
        <div className="z-10  my-14  ">
          <p className="text-center text-orange-600 text-lg  p-2">
            Universities we have worked with.
          </p>
          <h1 className="text-center md:text-5xl sm:text-4xl text-3xl  md:py-6 text-white">
            FIND YOURS<span className="text-orange-600">.</span>
          </h1>
          <p className="text-center text-gray-400">
            Don&apos;t worry if you can&apos;t find yours. These are just the
            popular ones.
          </p>
        </div>
        <div className="flex flex-col justify-end px-4 py-2  items-end">
          {/* Search Bar */}
          <p className="py-2 text-orange-500">Type your University Name to search...</p>
          <input
            type="text"
            placeholder="&#128270; Search by university name..."
            className="px-4 py-2 w-96 text-white focus:outline-none bg-slate-600 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4  justify-center items-center  px-2">
          {filteredUniData.map((uni, index) =>
            index === 0 ? (
              <Link key={index} href={`universities/${uni.slug}`}
              className="relative bg-slate-800 text-white grid lg:grid-cols-2 grid-cols-1 mb-4 rounded-lg transition-all shadow-md m-2 h-90% p-2 lg:col-span-4"
              >
              
                <Image
                  width={550}
                  height={450}
                  src={uni.image}
                  alt={uni.title}
                  className="w-full h-full rounded-s-lg bg-white p-3"
                />
                <div className=" px-2 lg:px-10 justify-between flex flex-col">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-lg mt-2">{uni.title}</h3>
                      <Image src={UKflag} width={20} alt="UK Flag" />
                    </div>
                    <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-2"></div>

                    <p className="text-gray-400 line-clamp-3">
                      {uni.description}
                    </p>
                  </div>
                  <div className="flex justify-end">
                  </div>
                </div>
              </Link>
            ) : (
              <Link key={index} href={`universities/${uni.slug}`}
              className="relative bg-slate-800  text-white rounded-md mb-4 transition-all p-3 m-2 shadow-lg"
              >
                
                  <Image
                    width={150}
                    height={150}
                    src={uni.uniImage}
                    alt={uni.title}
                    className="w-full h-52 object-cover rounded-t-lg"
                  />
                  <div className="flex justify-between">
                    <h3 className="text-lg mt-2">{uni.title}</h3>
                    <Image src={uni.flagImage} width={20} alt="UK Flag" />
                  </div>
                  <p className="text-gray-400 line-clamp-3">
                    {uni.description}
                  </p>
                  <div className="flex justify-end">
                    
                      
                    
                  </div>
               
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default UniversitiesPage;
