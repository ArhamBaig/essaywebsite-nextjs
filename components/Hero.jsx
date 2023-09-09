"use client";
import Image from "next/image";
import {
  premium,
  moneyback,
  trusted,
} from "../public/assets";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer, toast } from "react-toastify";

export function Hero() {
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Sending Request ...", { autoClose: false });

    try {
      const response = await fetch("/api/heroform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: topic,
          email: email,
          phoneNumber: phoneNumber,
          wordCount: wordCount,
          deadline: deadline,
        }),
      });
      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setQuery("");
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const scrollToSection = (event) => {
    event.preventDefault();
    const section = document.getElementById("dragndroporder");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <section className="flex flex-col lg:flex-row shadow-lg bg-slate-100 shadow-slate-400 w-full justify-center items-center xl:items-baseline xl:justify-between sm:px-16 md:px-20 lg:px-24 xl:px-32 z-40">
      <div className=" xl:h-[700px] mt-32">
        {/* Text Content */}
        <div className="z-10 sm:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl mt-20  text-left px-8 ">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-slate-700">
            The Top-Rated and Best Essay Writing Service in UK to achieve A+
            grade<span className="text-orange-600">.</span>
          </h1>
          <div className="flex">
            <h2 className="md:text-4xl sm:text-3xl text-xl font-bold py-4 text-slate-700">
              <span className="text-slate-800">Best place to get your</span>
              <p className="text-orange-600">
                <Typewriter
                  words={[
                    " Essays",
                    " Reports",
                    " Dissertations",
                    " Assignments",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </h2>
          </div>

          <p className="md:text-xl text-lg font-bold text-gray-500 lg:max-w-lg xl:max-w-full ">
            Let Your Ideas Flourish, Our Specialists Bring Your Essays to Life!
          </p>
          <div className="flex justify-start mb-4 mt-4  w-full mobile:flex-row items-center">
            <div className="sm:px-4 px-1">
              <Image
                src={moneyback}
                alt="Money Back Guarantee"
                height={150}
                width={110}
              />
            </div>
            <div className="sm:px-4 px-1">
              <Image
                src={trusted}
                alt="Trusted service"
                height={230}
                width={110}
              />
            </div>

            <div className="sm:px-4 px-1">
              <Image
                src={premium}
                alt="Premium quality service"
                height={230}
                width={110}
              />
            </div>
          </div>

          <div className="flex flex-col mobile:flex-row items-center">
            <button
              id="placeOrderButton"
              className="bg-orange-600 shadow-lg shadow-orange-400 mx-2 w-[180px] sm:w-[200px] rounded-full font-medium my-2 mobile:my-6 py-3 text-white hover:bg-white transition-all hover:text-black border-orange-600 hover:ring-1 hover:ring-orange-600 hover:shadow-orange-500 hover:shadow-md"
              onClick={scrollToSection}
            >
              Place an order
            </button>

            <button
              className="bg-white ring-1 mx-2 ring-orange-600 shadow-md shadow-slate-500 rounded-full w-[180px] sm:w-[200px] font-medium my-2 mobile:my-6 py-3 text-black
          hover:bg-orange-600 transition-all hover:shadow-md hover:shadow-slate-500 hover:text-white"
              onClick={() => {
                if (typeof Tawk_API !== "undefined") {
                  Tawk_API.toggle();
                }
              }}
            >
              Get consultancy
            </button>
          </div>
        </div>
      </div>
      <div className=" sm:h-fit mt-10 p-4  lg:mt-52  shadow-lg m-6  lg:w-[600px] ">
        <h2 className="text-2xl font-semibold text-orange-600 ">
          Get Quote For Your Assignment
        </h2>
        <form onSubmit={handleSubmit} method="post" class=" ">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">
              Assignment Topic:
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              onChange={(e) => setTopic(e.target.value)}
              required
              class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">
              Assignment Word Count:
            </label>
            <input
              type="number"
              id="wordcount"
              name="wordcount"
              required
              onChange={(e) => setWordCount(e.target.value)}
              class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">
              Deadline:
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              required
              onChange={(e) => setDeadline(e.target.value)}
              class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            class="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 active:scale-95 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
          <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </div>
  );
}
