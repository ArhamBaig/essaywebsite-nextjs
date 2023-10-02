"use client";
import { useState } from "react";
const Content = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto mt-20 mb-20 flex flex-col justify-center items-center">
              <h2 className="text-black capitalize text-justify ">
       Some Heading
      </h2>
      <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6 flex items-center justify-center"></div>
      <div className="grid grid-cols-2 max-w-5xl ">
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        
        {showMore ? (
          <>
            <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-4 my-3">
          <h2 className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
            Lorem ipsum dolor, sit amet{" "}
          </h2>
          <p className="text-justify md:text-left text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptates architecto aut tempora eligendi expedita
            quisquam, consequatur fugit excepturi unde eos illo illum maiores
            qui nostrum. Assumenda autem sunt ex!
          </p>
        </div>
        
          </>
        ) : (
          <button
            className="bg-slate-800 text-white p-2 col-span-2  mx-auto mt-10"
            onClick={() => setShowMore(true)}
          >
            READ MORE
          </button>
        )}
        {showMore && (
          <button
            className="bg-slate-800 text-white p-2 col-span-2  mx-auto mt-10"
            onClick={() => setShowMore(false)}
          >
            Read Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
