"use client";

import { useState, useRef } from "react";
import {
  logo,
  menu,
  close,
  facebook,
  flickr,
  instagram,
  linkedin,
  pinterest,
  whatsapp2,
  tumblr,
  twitter,
  mail,
  arrowUp,
  arrowdown
} from "../public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const timeoutRef = useRef(null);
  const [liActive, setLiActive] = useState("");
  const [subLiActive, setSubLiActive] = useState("");
 const [sidebarLiActive, setSidebarLiActive] = useState("") 
const [sidebarSubLiActive, setSidebarSubLiActive] = useState("")
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleMouseEnterLi = (link) => () => {
    // Use a function to return the event handler
    if (link.dropdown) {
      setSubLiActive("Essay");
      setLiActive(link.title);
      clearTimeout(timeoutRef.current);
    }
  };
  const handleMouseLeaveLi = () => {
    timeoutRef.current = setTimeout(() => {
      setLiActive("");
    }, 700);
  };
  return (
    <div className=" w-screen z-40 text-black fixed ">
      <div className="bg-white/80 w-screen px-3 sm:px-8 md:px-14 lg:px-20 fixed backdrop-blur-lg   z-50  flex justify-between items-center h-10">
        <a href="mailto:Scriptershubltd@gmail.com" >
          <div className="flex cursor-pointer   font-semibold  rounded-full">
            <Image
              className="mr-2 p-[3px] hover:-translate-y-1 transition-all cursor-pointer"
              src={mail}
              height={20}
              width={30}
              alt="bestessaywriter email"
            />
            <p className="hidden md:block">sales@bestessaywriter.co.uk </p>
          </div>
        </a>
        <p className="font-semibold hidden xl:block">
          Get upto <span className="text-orange-600">50% off</span> on your 1st
          assignment
        </p>
        <div className="flex font-semibold rounded-lg  items-center">
          <a href="https://twitter.com/BestEssayWrit13" target="_blank">
            <Image
              className="p-[6px] hover:-translate-y-1 transition-all cursor-pointer"
              src={twitter}
              height={20}
              width={40}
              alt="bestessaywriter twitter profile"
            />
          </a>
          <a href="https://www.facebook.com/bestessaywriter.co.uk" target="_blank">
            <Image
              className="p-[6px] hover:-translate-y-1 transition-all cursor-pointer"
              src={facebook}
              height={20}
              width={40}
              alt="bestessaywriter facebook profile"
            />
          </a>
          <a href="https://www.pinterest.co.uk/best_essay_writer" target="_blank">
            {" "}
            <Image
              className="p-[4px] hover:-translate-y-1 transition-all cursor-pointer"
              src={pinterest}
              height={20}
              width={40}
              alt="bestessaywriter pinterest profile"
            />
          </a>
          <a href="https://www.instagram.com/bestessaywriter.co.uk" target="_blank">
            {" "}
            <Image
              className="p-[5px] hover:-translate-y-1 transition-all cursor-pointer"
              src={instagram}
              height={20}
              width={40}
              alt="bestessaywriter instagram profile"
            />
          </a>
          <a href="https://www.linkedin.com/company/best-essay-writer" target="_blank">
            <Image
              className="p-[5px] hover:-translate-y-1 transition-all cursor-pointer"
              src={linkedin}
              height={20}
              width={40}
              alt="bestessaywriter linkedin profile"
            />
          </a>
          <a href="https://www.tumblr.com/blog/view/bestessaywriter" target="_blank">
            <Image
              className="p-[7px] hover:-translate-y-1 transition-all cursor-pointer"
              src={tumblr}
              height={20}
              width={40}
              alt="bestessaywriter tumblr profile"
            />
          </a>
          <a href="https://www.flickr.com/photos/helpbestessaywritercouk" target="_blank">
            <Image
              className="p-[3px] hover:-translate-y-1 transition-all cursor-pointer"
              src={flickr}
              height={20}
              width={40}
              alt="bestessaywriter flickr profile"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B447378489100&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="p-[7px] hover:-translate-y-1 transition-all cursor-pointer"
              src={whatsapp2}
              height={20}
              width={40}
              alt="bestessaywriter whatsapp"
            />
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r via-orange-600 from-white to-white w-screen h-[120px] z-50 ">
        <div className="flex justify-between items-center h-[119px] whitespace-nowrap xl:px-52 lg:px-40 md:px-20 bg-white mt-10 ">
          <div className="flex">
            <Link href="/">
              {" "}
              <Image height={100} width={150} alt="Go to home" src={logo} />
            </Link>
            <ul className=" hidden lg:flex  gap-10 lg:gap-12  px-20 items-center ">
              {navLinks.map((link, index) => (
                <li
                  className="flex cursor-default relative "
                  key={index}
                  onMouseEnter={handleMouseEnterLi(link)}
                  onMouseLeave={handleMouseLeaveLi}
                >
                  {link.href ? (
                            <Link href={link.href}>{link.title}</Link>
                          ) : (
                            link.title
                          )}
                  {liActive === link.title && (
                    <ul className="absolute -left-52 top-[72px] h-[410px] w-52 bg-white transition-all ease-in-out duration-300">
                      {link.dropdown.map((sublink, index) => (
                        <li
                          key={index}
                          className="hover:bg-orange-600 cursor-default border-b-[1px]  border-orange-600 transition-all p-2 "
                          onMouseEnter={() => setSubLiActive(sublink.title)}
                        >
                          {sublink.href ? (
                            <Link href={sublink.href}>{sublink.title}</Link>
                          ) : (
                            sublink.title
                          )}
                          {subLiActive === sublink.title &&
                            sublink.subdropdown && (
                              <ul className=" absolute left-52 top-0 h-[410px] w-[660px] lg:w-[700px] xl:w-[1200px] bg-white backdrop-blur-md grid grid-cols-3 grid-rows-[repeat(12,minmax(0,1fr))]">
                                {sublink.subdropdown.map(
                                  (subsublink, index) => (
                                    <Link key={index} href={subsublink.href}>
                                      <li
                                        key={index}
                                        className="p-2 hover:text-orange-600 transition-all cursor-pointer"
                                        onClick={() => setLiActive("")}
                                      >
                                        {subsublink.title}
                                      </li>
                                    </Link>
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
          <button className="xl:flex hidden bg-white text-black border-2 border-orange-600 hover:text-white hover:bg-orange-500 transition-all
           hover:font-semibold rounded-full h-10 p-5 items-center  animate-pulse"
           onClick={() => {
            if (typeof Tawk_API !== "undefined") {
              Tawk_API.toggle();
            }
          }}
           >Live Chat</button>
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
            <li
              key={index}
              className={`py-2 cursor-pointer`}
            >
            {/* link.href goes here */}
              <Link href="#" className="flex" onClick={() => setSidebarLiActive((prev)=>prev === link.title ? "" : link.title)}>
                  {link.title}  {link.dropdown && (
                    <div className="ml-2 transition-all mt-2 h-[11px] w-[11px]">
                      <Image className="transition-all" src={sidebarLiActive === link.title ?  arrowUp : arrowdown} height={15} width={20}/> </div>
                  )} 
              </Link>
              {link.dropdown && sidebarLiActive === link.title && (
                <ul className="list-none mt-4 flex flex-col ">
                  {link.dropdown.map((subLink, index) => (
                    <li
                      key={index}
                      className="py-1 ms-3 cursor-pointer"
                      
                    >
                      {/* link.href goes here */}
                      <Link className="flex" href="#" onClick={() => setSidebarSubLiActive((prev)=>prev === subLink.title ? "" : subLink.title)}>
                        {subLink.title}  {subLink.subdropdown && (
                    <div className="ml-2 transition-all mt-2 h-[11px] w-[11px]">
                      <Image className="transition-all" src={sidebarSubLiActive === subLink.title ?  arrowUp : arrowdown} height={15} width={20}/> </div>
                  )}  </Link>
                      {subLink.subdropdown && sidebarSubLiActive === subLink.title && (
                        <ul className="list-none mt-4 flex flex-col ">
                          {subLink.subdropdown.map((nestedSubLink, index) => (
                            <li key={index} className="py-1 ms-6">
                              {nestedSubLink.title}
                            </li>
                          ))}
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
