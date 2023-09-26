"use client"
import { bannerimg } from "@/public/assets"
import Image from "next/image"
import Countdown from 'react-countdown';
const DiscountBanner = () => {
  return (
    <div className="bg-slate-800 mx-auto max-w-6xl -mt-24 relative">
        <div className="grid grid-cols-3 justify-center items-center">
            <h3 className="">LOGO</h3>
            <div className="">
                <p>text text text text text text text text text text text text text text text text text text text </p>
            </div>
            <div className="flex justify-center items-center">
                <Image src={bannerimg} height={200} width={300} alt="avail discount" className="opacity-70"/>
            </div>
        </div>
        <div className="absolute top-0 left-0 w-28 bg-yellow-400">
        <Countdown date={Date.now() + 10000000} className="text-black text-lg"/>
        </div>
    </div>
  )
}

export default DiscountBanner;