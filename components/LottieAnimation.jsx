"use client";
import Lottie from "lottie-react";
import animationData from "@/public/lottie-files/tawktoanimation.json";

const LottieAnimation = () => {
  return (
    <div className=" bottom-0 right-0 fixed ">
    <div className="absolute  right-0 bottom-14 lg:right-5 lg:bottom-5 w-28 h-28 ">
      <Lottie animationData={animationData} />
    </div>
  </div>
  );
};

export default LottieAnimation;
