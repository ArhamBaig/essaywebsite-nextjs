import React from "react";
import Link from "next/link";
import getBlogMetadata from "@/constants/getBlogMetadata";
import { blogData } from "@/constants";
import UsefulLink from "@/components/UsefulLink";

const getBlogContent = async (slug) => {
  const blogJson = blogData.find((blog) => blog.slug === slug);
  if (!blogJson) {
    return (
      <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-orange-400 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  } else {
    try {
      const { slug } = blogJson;
      const Mymodule = await import(`../../../blog/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      console.log(error);
      return (
        <div className="flex mt-52 flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-4xl font-semibold text-gray-800">
            Oops! Page not found
          </h1>
          <p className="mt-2 text-gray-600">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link href="/" className="mt-4 text-orange-400 hover:underline">
            Go back to home
          </Link>
        </div>
      );
    }
  }
};

const BlogPage = async (props) => {
  const slug = props.params.slug;
  const blogContent = await getBlogContent(slug);
  const blogJson = blogData.find((content) => content.slug === slug);
  if (!blogJson) {
    return (
      <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-orange-400 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="h-auto mt-12">
      <div className="mt-14 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div>
          
        </div>
        <div className="mx-auto w-full max-w-3xl p-2 sm:p-5 lg:p-8 lg:col-span-2">
          <div className="flex justify-between mb-4">
            <p className="text-orange-600">{blogJson.date}</p>
            <p className="text-green-600">{blogJson.read} min read</p>
            </div>
          <div>{blogContent}</div>
        </div>

      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const blogs = getBlogMetadata();
  const slug = props.params.slug;
  const blog = blogs.find((post) => post.slug === slug);
  if (blog) {
    return {
      slug,
      title: blog.title,
      description: blog.description,
      image: blog.image,
      date: blog.date,
      author: blog.author,
      openGraph: {
        title: blog.openGraph.title,
        description: blog.openGraph.description,
        images: blog.openGraph.images,
        url: blog.openGraph.url,
        locale: blog.openGraph.locale,
        type: blog.openGraph.type,
        site_name: blog.openGraph.site_name,
        publishedTime: blog.openGraph.publishedTime,
        authors: blog.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export default BlogPage;