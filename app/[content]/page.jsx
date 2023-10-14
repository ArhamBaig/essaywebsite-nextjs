import Link from "next/link";
import getContentMetadata from "@/constants/getContentMetadata";
import { contentData } from "@/constants";
import { Heroforcontent } from "@/components/Heroforcontent";

const getContent = async (slug) => {
  const contentJson = contentData.find((content) => content.slug === slug);
  if (!contentJson) {
    return (
      <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
        <h1 className="text-4xl font-semibold text-gray-300">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-gray-300">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-orange-300 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  } else {
    try {
      const { slug } = contentJson;
      const Mymodule = await import(`../../content/${slug}`);
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

const ContentPage = async (props) => {
  const slug = props.params.content;
  const content = await getContent(slug);
  const contentJson = contentData.find((content) => content.slug === slug);
 
  if (!contentJson) {
    return (
      <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
        <h1 className="text-4xl font-semibold text-gray-300">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-gray-300">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-orange-500 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <>
    <Heroforcontent heading1={contentJson.title} heading2={contentJson.description} />
    <div className="container mx-auto ">
    <div className="">

      <div className="mx-auto w-full max-w-4xl p-2 sm:p-5 lg:p-8 px-3 ">
        <div>{content}</div>
      </div>
     
      </div>
    </div>
    </>
  );
};

export const generateStaticParams = async () => {
  const contents = getContentMetadata();
  return contents.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const posts = getContentMetadata();
  const slug = props.params.content;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.openGraph.title,
        description: post.openGraph.description,
        images: post.openGraph.images,
        url: post.openGraph.url,
        locale: post.openGraph.locale,
        type: post.openGraph.type,
        site_name:post.openGraph.site_name,
        publishedTime: post.openGraph.publishedTime,
        authors: post.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default ContentPage;
