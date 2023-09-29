"use client"
import Image from "next/image";
import { UKflag,DEflag,AUflag,globe } from "@/public/assets";
import { uniData } from "@/constants";
import Link from "next/link";
import { useState } from "react"; // Import useState to manage state

const UniversitiesPage = () => { 
  // State variables to keep track of selected countries and filtered universities
  const [selectedCountries, setSelectedCountries] = useState([]);
  
  const handleCheckboxChange = (country) => {
    if (country === "Other") {
      // Toggle the "Other" checkbox
      if (selectedCountries.includes("Other")) {
        setSelectedCountries(selectedCountries.filter((c) => c !== "Other"));
      } else {
        setSelectedCountries(["Other"]);
      }
    } else {
      // Handle checkboxes for specific countries
      if (selectedCountries.includes(country)) {
        setSelectedCountries(selectedCountries.filter((c) => c !== country));
      } else {
        setSelectedCountries([...selectedCountries, country]);
      }
    }
  };

  const filteredUniversities = uniData.filter((uni) => {
    if (selectedCountries.length === 0) return true;
    if (selectedCountries.includes("Other")) {
      // If "Other" is selected, show universities from all countries except Australia, UK, and Germany
      return !["Australia", "United Kingdom", "Germany"].includes(uni.country);
    } else {
      return selectedCountries.includes(uni.country);
    }
  });
  
  return (
    <>
      <div className="px-10 container mx-auto flex mt-28 pb-14 ">
        <div className="mb-2 mr-40">
          <h1 className="text-xl font-bold whitespace-nowrap">
            Filter By Country
          </h1>
          <p className="font-semibold mb-2 mt-4">Country</p>
          <div className="flex justify-between w-lg mb-2">
            <Image src={UKflag} width={20}/>
            <p className="">United Kingdom </p>
            <input
              type="checkbox"
              checked={selectedCountries.includes("United Kingdom")}
              onChange={() => handleCheckboxChange("United Kingdom")}
            />
          </div>
          <div className="flex justify-between mb-2">
          <Image src={DEflag} width={20}/>

            <p className="">Germany </p>
            <input
              type="checkbox"
              checked={selectedCountries.includes("Germany")}
              onChange={() => handleCheckboxChange("Germany")}
            />
          </div>
          <div className="flex justify-between mb-2">
          <Image src={AUflag} width={20}/>

            <p >Australia </p>
            <input
            
              type="checkbox"
              checked={selectedCountries.includes("Australia")}
              onChange={() => handleCheckboxChange("Australia")}
            />
          </div>
          <div className="flex justify-between mt-3 mb-2">
          <Image src={globe} width={20}/>

            <p className="">Other </p>
            <input
              type="checkbox"
              checked={selectedCountries.includes("Other")}
              onChange={() => handleCheckboxChange("Other")}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mb-5 gap-x-56 mt-5">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white w-60 rounded-lg hover:scale-105 mb-4 transition-all shadow-md p-3"
            >
              <Image
                src={uni.image}
                alt={uni.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <Image src={UKflag} width={20}/>
              <h3 className="text-md font-semibold mt-2">{uni.title}</h3>
              <p className="text-gray-600 line-clamp-3">{uni.description}</p>
              <Link
                href={`universities/${uni.slug}`}
                className="flex text-slate-900 hover:underline"
              >
                Read more
              </Link>
            

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UniversitiesPage;
