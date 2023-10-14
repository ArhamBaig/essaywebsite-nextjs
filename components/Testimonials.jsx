"use client"
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import {
  reviewpfp1,
  reviewpfp2,
  reviewpfp3,

} from "@/public/assets";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className=" bg-white flex flex-col items-center justify-center pt-1 p-5">
     <h2 className="text-black capitalize text-center ">
        Testimonials
      </h2>
      <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6 flex items-center justify-center"></div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-2">
        <TestimonialCard
          review={
            "I was in a tight spot with a looming deadline, and this essay writing website saved me! Their writers delivered a high-quality essay in no time."
          }
          value={5}
          image={reviewpfp1}
        />
        <TestimonialCard
          review={
            "The essay I received from this website was well-researched and flawlessly written. It exceeded my expectations, and I got an excellent grade."
          }
          value={5}
          image={reviewpfp2}
        />
        <TestimonialCard
          review={
            "The writers here are experts in their fields. They understood my topic and delivered an essay that was both informative and engaging."
          }
          value={5}
          image={reviewpfp3}
        />
</div>
      <div className="mt-16 flex justify-center items-center">
        <Link href="/reviews">
          {" "}
          <button className="items-center bg-orange-600 text-white ring-2 ring-orange-600 hover:ring-orange-600 hover:bg-white transition-all hover:text-black  h-fit p-3 ">
            See all reviews ➔{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

const TestimonialCard = ({ review, value, image }) => {
  return (
    <div className="flex flex-col max-w-[240px] my-1 h-72 items-center justify-between border-[1px] shadow-inner p-4 ">
      <Image
        src={image}
        width={100}
        height={100}
        alt="review pfp image"
        className="rounded-3xl"
      />
      <p className="text-gray-800 mb-2 line-clamp-4 text-xs sm:text-sm">❝{review}❞</p>
      <Box>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
};

export default Testimonials;
