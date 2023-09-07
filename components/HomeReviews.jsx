"use client"
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import {
  reviewpfp1,
  reviewpfp2,
  reviewpfp3,
  reviewpfp4,
  reviewpfp5,
  reviewpfp6,
  reviewpfp7,
} from "@/public/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeReviews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="container max-w-6xl justify-center mx-auto p-5">
      <h2 className=" text-xl md:text-2xl lg:text-3xl text-center font-bold mb-4">
        <span className=" shadow-md text-orange border-r-4 border-b-2 border-orange-600 p-2 ">
          Best Essay Writer{" "}
          <span className="text-orange-600">Testimonials</span>
        </span>
      </h2>

      <Slider {...settings}>
        <Homereviewcard
          review={
            "I was in a tight spot with a looming deadline, and this essay writing website saved me! Their writers delivered a high-quality essay in no time."
          }
          value={5}
          image={reviewpfp1}
        />
        <Homereviewcard
          review={
            "The essay I received from this website was well-researched and flawlessly written. It exceeded my expectations, and I got an excellent grade."
          }
          value={5}
          image={reviewpfp2}
        />
        <Homereviewcard
          review={
            "The writers here are experts in their fields. They understood my topic and delivered an essay that was both informative and engaging."
          }
          value={4}
          image={reviewpfp3}
        />
        <Homereviewcard
          review={
            "The customer support team is outstanding. They are responsive and always ready to assist with any questions or concerns."
          }
          value={5}
          image={reviewpfp4}
        />
        <Homereviewcard
          review={
            "I appreciate the privacy and confidentiality this website offers. My personal information and the content of my essay were kept completely secure."
          }
          value={4}
          image={reviewpfp5}
        />
        <Homereviewcard
          review={
            "Affordable prices and great discounts make this service accessible to students on a budget. I got great value for my money."
          }
          value={5}
          image={reviewpfp6}
        />
        <Homereviewcard
          review={
            "The writers here are experts in their fields. They understood my topic and delivered an essay that was both informative and engaging."
          }
          value={5}
          image={reviewpfp7}
        />
      </Slider>
      <div className="mt-16 flex justify-center items-center">
        <Link href="/reviews">
          {" "}
          <button className="items-center bg-orange-600 text-white ring-2 ring-orange-600 hover:ring-orange-600 hover:bg-white transition-all hover:text-black rounded-xl h-fit p-3 ">
            See all reviews ➔{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

const Homereviewcard = ({ review, value, image }) => {
  return (
    <div className="flex flex-col w-60 h-72 shadow-md items-center justify-between rounded-xl p-4 space-betwee">
      <Image
        src={image}
        width={100}
        height={100}
        alt="review pfp image"
        className="rounded-3xl"
      />
      <p className="text-gray-800 mb-2 line-clamp-4 text-sm">❝{review}❞</p>
      <Box>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
};

export default HomeReviews;
