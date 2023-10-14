"use client";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/constants";
import Lottie from "lottie-react";
import animationData from "@/public/lottie-files/herolottiefile.json";

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on the search term
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-24 justify-center items-center flex flex-col h-auto mx-auto  p-5">
      <Lottie animationData={animationData} className="h-32 w-32" loop={true} />
      <h1 className="text-3xl text-orange-500   mb-6">
        Our Latest Blog Posts
      </h1>
      <div className="mb-6 flex  justify-end">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border bg-slate-800 text-white rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            <div className="bg-slate-800 hover:shadow-lg hover:shadow-gray-300 transition-all shadow-md rounded-md p-6">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />

              <h2 className="sm:text-xl hover:text-orange-500 text-gray-300 cursor-pointer font-semibold mb-2 text-lg">
                {blog.title}
              </h2>

              <p className="text-gray-400 mb-2 line-clamp-4 text-xs sm:text-base">
                {blog.description}
              </p>
              <p className="text-orange-400 text-sm">
                By {blog.author} - {blog.date}
              </p>
              {/* <Link
              className="text-grey-300 hover:text-orange-600 font-semibold mt-4 inline-block"
              href={`/blog/${blog.slug}`}
            >
              Read More
            </Link> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
