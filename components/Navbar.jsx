"use client";

import { useState } from "react";
import { logo, menu, close, arrowUp, arrowdown } from "../public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [liActive, setLiActive] = useState("");
  const [subLiActive, setSubLiActive] = useState("");
  const [sidebarLiActive, setSidebarLiActive] = useState("");
  const [sidebarSubLiActive, setSidebarSubLiActive] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleMouseClickLi = (link) => () => {
    // e.stopPropogation();
    if (link.title === "Services") {
      setSubLiActive("Essay");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }

    if (link.title === "Universities") {
      setSubLiActive("Essays");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }
  };
  const handleMouseClickLowerDiv = (link) => () => {
    setLiActive("");
  };
  return (
    <div className=" w-screen z-40 text-black fixed ">
      
      <div className="bg-gradient-to-r via-orange-600 from-white to-white w-screen h-[81px] z-50 ">
        <div className="flex justify-between items-center h-[80px] whitespace-nowrap sm:px-16 md:px-20 lg:px-24 xl:px-32 bg-white">
          <div className="flex">
            <Link href="/">
              {" "}
              <Image height={60} width={70} alt="Go to home" src={logo} />
            </Link>
            <ul className=" hidden lg:flex  gap-10 lg:gap-12  px-20 items-center ">
              {navLinks.map((link, index) => (
                <li
                  className="flex cursor-default relative "
                  key={index}
                  onClick={link.dropdown ?
                    handleMouseClickLi(link) : handleMouseClickLowerDiv("")}
                >
                  {link.href ? (
                    <Link href={link.href}>{link.title}</Link>
                  ) : (
                    link.title
                  )}
                  {link.dropdown && (
                    <Image
                      src={arrowdown}
                      height={20}
                      width={15}
                      className={`ml-2 transition-transform transform ${
                        liActive === link.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </li>
                
              ))}
            </ul>
            
          </div>
          <button
            className="xl:flex hidden bg-white text-black border-2 border-orange-600 hover:text-white hover:bg-orange-500 transition-all
           hover:font-semibold rounded-full h-10 p-5 items-center  animate-pulse"
            onClick={() => {
              if (typeof Tawk_API !== "undefined") {
                Tawk_API.toggle();
              }
            }}
          >
            Live Chat
          </button>
          <div className="lg:hidden flex mt-2 z-30 mr-16 ">
            <Image
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>
        </div>
          
       
      </div>

      <div
        // onClick={(prev) => setLiActive(prev)}
        className={`flex justify-between  h-[500px] transition-opacity duration-300 border-b-[1px] border-black bg-white w-screen ${
          liActive ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {navLinks.map((link) =>
          Array.isArray(link.dropdown) &&
          link.dropdown.length > 0 &&
          link.title === liActive ? (
            <>
            {/* <p className="pl-44 pt-10 text-orange-500 font-semibold ">{link.title}</p> */}
              
            <ul key={link.title} className="ml-32 mt-8">
              
              {link.dropdown.map((sublink, index) => (
                <li
                  key={index}
                  className="p-2 pr-10 flex justify-between border-r-2"
                  onMouseEnter={() => setSubLiActive(sublink.title)}
                >
                  {sublink.href ? (
                    <Link href={sublink.href}>{sublink.title}</Link>
                  ) : (
                    sublink.title
                  )}
                  {sublink.subdropdown && (
                    <Image
                      src={arrowdown}
                      width={10}
                      className={`transition-all -rotate-90 
                mr-5 
                ${subLiActive === sublink.title ? "translate-x-2" : ""}
                `}
                    />
                  )}
                </li>
              ))}
            </ul>
            
            </>
          ) : null
        )}
        <div className="absolute left-60 top-28 ml-20">
          <ul className="grid grid-cols-3 gap-x-3 content-list">
            {navLinks.map((link) =>
              Array.isArray(link.dropdown) &&
              link.dropdown.length > 0 &&
              link.title === liActive
                ? link.dropdown.map((sublink) =>
                    Array.isArray(sublink.subdropdown) &&
                    sublink.subdropdown.length > 0
                      ? sublink.subdropdown.map(
                          (subsublink, index) =>
                            sublink.title === subLiActive &&
                            sublink.subdropdown && (
                              <Link key={index} href={subsublink.href}>
                                <li onClick={handleMouseClickLowerDiv("")} className="p-2 hover:text-orange-500">
                                  {subsublink.title}
                                </li>
                              </Link>
                            )
                        )
                      : null
                  )
                : null
            )}
          </ul>
        </div>
      </div>
      <div
        onClick={handleMouseClickLowerDiv("")}
        className={`bg-black/50 flex h-screen transition-opacity duration-300  ${
          liActive ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {" "}
      </div>

      <div
        className={`${
          sidebarToggle ? "sidebar-visible" : "sidebar-hidden"
        } p-6 bg-white text-slate-900  right-0 top-0 h-full w-full fixed z-40 transition-all`}
      >
        {/* Close Button inside Sidebar */}
        <div className="relative flex justify-end pt-[52px] right-6">
          <Image
            src={close}
            alt="Close menu"
            width={28}
            height={28}
            className=" object-contain cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
        </div>
        <div className="justify-start items-start flex flex-col h-[84%] overflow-y-scroll overflow-hidden">
          <ul className="list-none mt-10 flex flex-col ">
            {navLinks.map((link, index) => (
              <li key={index} className={`py-2 cursor-pointer`}>
                {/* link.href goes here */}
                <Link
                  href="#"
                  className="flex"
                  onClick={() =>
                    setSidebarLiActive((prev) =>
                      prev === link.title ? "" : link.title
                    )
                  }
                >
                  {link.title}{" "}
                  {link.dropdown && (
                    <div className="ml-2 transition-all mt-2 h-[11px] w-[11px]">
                      <Image
                        className="transition-all"
                        alt="Arrow image for dropdown"
                        src={
                          sidebarLiActive === link.title ? arrowUp : arrowdown
                        }
                        height={15}
                        width={20}
                      />{" "}
                    </div>
                  )}
                </Link>
                {link.dropdown && sidebarLiActive === link.title && (
                  <ul className="list-none mt-4 flex flex-col ">
                    {link.dropdown.map((subLink, index) => (
                      <li key={index} className="py-1 ms-3 cursor-pointer">
                        
                        <Link
                          className="flex"
                          href="#"
                          onClick={() =>
                            setSidebarSubLiActive((prev) =>
                              prev === subLink.title ? "" : subLink.title
                            )
                          }
                        >
                          {subLink.title}{" "}
                          {subLink.subdropdown && (
                            <div className="ml-2 transition-all mt-2 h-[11px] w-[11px]">
                              <Image
                                className="transition-all"
                                alt="Arrow image for dropdown"
                                src={
                                  sidebarSubLiActive === subLink.title
                                    ? arrowUp
                                    : arrowdown
                                }
                                height={15}
                                width={20}
                              />{" "}
                            </div>
                          )}{" "}
                        </Link>
                        {subLink.subdropdown &&
                          sidebarSubLiActive === subLink.title && (
                            <ul className="list-none mt-4 flex flex-col ">
                              {subLink.subdropdown.map(
                                (nestedSubLink, index) => (
                                  <li key={index} className="py-1 ms-6">
                                    {nestedSubLink.title}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
