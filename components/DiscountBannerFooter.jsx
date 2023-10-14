"use client"
import { logowhite } from "@/public/assets"
import Image from "next/image"
import { useState, useEffect } from 'react';
 
const DiscountBannerFooter = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(15); // Start from 15 minutes
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(); // Start from the current time
    target.setMinutes(target.getMinutes() + 15); // Set the target time to 15 minutes from now
    target.setSeconds(target.getSeconds() + 40)
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        // Timer reached 0, you can clear the interval here if needed
        clearInterval(interval);
        // Optionally, set the state to 0 when the timer ends
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-r from-orange-800 via-orange-700  to-orange-800 lg:mx-auto lg:max-w-5xl xl:max-w-6xl mt-20 relative mx-3">
   
    <div className="grid grid-cols-1 lg:grid-cols-12  lg:py-10">
      <div className="w-full col-span-2 flex justify-center items-center">
      <Image src={logowhite} width={150} height={200} alt="white logo"/>
      </div>
      <div className="text-white p-2 px-5 pr-10 col-span-7 text-center lg:text-left flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-2">Dive into the Ocean of Knowledge</h2>
          <p>Start Your Journey Today with Essay Writing UK. Get a <span className="text-black font-bold">15% discount</span> on our Writing Services. Hurry up, you get the chance to avail this limited-time offer.</p>
      </div>
      <div className="w-full col-span-2 justify-center items-center flex flex-col">
        <div className="text-slate-800  rounded-full p-2 text-2xl relative w-56">
        <h3 className="text-black p-2 font-bold text-lg text-left w-full">Hurry ...</h3>

          <div className="flex z-10 text-center">
            <div className="bg-black/50 rounded-lg w-full h-15 p-2">
              <p className="text-xs text-gray-300 ">Hours</p>
            <span className="text-white">{hours}</span>
            </div>
            <div className="bg-black/50 rounded-lg  w-full h-15 ml-2 mr-2 p-2">
            <p className="text-xs text-gray-300 ">Minutes</p>

            <span className="text-white">{minutes}</span>
            </div>
            <div className="bg-black/50 rounded-lg  w-full h-15 p-2">
            <p className="text-xs text-gray-300">Seconds</p>

            <span className="text-white">
              {seconds}
            </span>

            </div>
            
          </div>
          <p className="text-black font-bold text-lg p-2 text-right">... remaining</p>

        </div>
      </div>
    </div>
  </div>
  )
}

export default DiscountBannerFooter