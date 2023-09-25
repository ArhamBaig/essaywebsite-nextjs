"use client";
import CountUp from "react-countup";
import { studying } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
const Statistics = () => {
  return (
    <div className="bg-orange-800 pt-20 pb-10">
      <div className="container mx-auto lg:flex-row flex-col justify-center items-center py-10">
        <h2 className=" text-gray-300 capitalize  pb-4">
          Let the Numbers talk.{" "}
        </h2>

        <div className="flex justify-between">
          <div className="grid grid-cols-2 items-center justify-center h-fit">
            <StatCounter
              name={"rating"}
              value={4.8}
              decimal={"."}
              decimalValue={1}
              suffix={"/5"}
            />
            <StatCounter name={"assignment"} value={43} suffix={"K+"} />
            <StatCounter name={"client"} value={9} suffix={"K+"} />
            <StatCounter name={"Writing Services"} value={40} suffix={"+"} />
            <StatCounter name={"Writing Services"} value={40} suffix={"+"} />
            <button className="bg-transparent ring-1 max-w-fit mx-auto ring-white text-white p-2 mt-2 px-5 hover:shadow-lg transition-all">
              See More {">"}
            </button>
          </div>
          <Image
            src={studying}
            width={600}
            height={400}
            alt="man studying"
            className="opacity-50 "
          />
        </div>
      </div>
    </div>
  );
};

const StatCounter = ({
  name,
  image,
  alt,
  value,
  decimal,
  decimalValue,
  suffix,
}) => {
  return (
    <div className="flex w-[200px] sm:w-[240px] md:w-[270px] items-center p-2 sm:p-3 md:p-6 text-white">
      <div className=" grid grid-cols-2 justify-center items-center pl-2 gap-14">
        <CountUp
          className="text-2xl sm:text-4xl md:text-5xl"
          end={value}
          decimal={decimal}
          decimals={decimalValue}
          suffix={suffix}
          delay={0.75}
          duration={5}
        />
        <div>
          <p className="text-base md:text-lg capitalize mt-2">{name}</p>
          <div className=" w-16 h-[1px] bg-gray-300 rounded-full my-2"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Statistics;
