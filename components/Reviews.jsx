"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import { Rating } from "@mui/material";
import { reviews } from "@/constants/reviews";

const Reviews = () => {
  
    const [visibleReviews, setVisibleReviews] = useState(6); 
  
    const handleLoadMore = () => {
      setVisibleReviews(visibleReviews + 6);
    };
  
    return (
      <div>
        <div className="w-full mx-auto ">
          {/* Text Content */}
          <div className="z-10  mt-32 ">
            <div className="text-center text-orange-600 text-lg  p-2">
              What our clients say about us
            </div>
  
            <h1 className="text-center md:text-5xl sm:text-4xl text-3xl  md:py-6 text-gray-300">
              BESTESSAYWRITER REVIEWS<span className="text-orange-600">.</span>
            </h1>
          </div>
          {/* Left side content */}
        </div>
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center mx-3">
  
            <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto items-center my-4 gap-x-10">
              {reviews.slice(0, visibleReviews).map((review) => (
                <div key={review.userid}>
                  <Reviewcard
                    userid={review.userid}
                    review={review.review}
                    value={review.value}
                    date={review.date}
                  />
                </div>
              ))}
              </div>
              {visibleReviews < reviews.length && (
                <button
                  onClick={handleLoadMore}
                  className="my-6 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Load More
                </button>
              )}
            
          </div>
        </div>
      </div>
    );
  };
  const Reviewcard = ({ userid, review, value, date }) => {
    return (
      <div className="mt-8 md:w-[340px] lg:w-[400px] xl:w-[500px] p-5  rounded-lg bg-gradient-to-br from-slate-900 hover:shadow-lg hover:shadow-white transition-all  to-orange-800 from-80%  shadow-lg">
        <div className="flex flex-col mobile:flex-row mobile:items-start"> {/* Remove justifyContent */}
  
          <div className="flex-grow ms-5 mt-2 md:mt-0"> {/* Add margin-top to adjust alignment */}
            <h1 className="text-gray-300 text-lg font-semibold">USER_ID: {userid}</h1>
            <p className="text-gray-300 mt-2 line-clamp-4 text-sm lg:text-base">{review}</p> {/* Adjust text color and margin */}
          </div>
          <div className="flex flex-col justify-center items-end"> {/* Center the Rating and date */}
            <Box>
              <Rating name="read-only" value={value} readOnly />
            </Box>
            <p className="mt-2 text-slate-500 text-sm ">{date}</p>
          </div>
        </div>
      </div>
    );
  };

export default Reviews