import Link from "next/link";
import getUniMetadata from "@/constants/getUniMetadata";
import { uniData } from "@/constants";
import UsefulLink from "@/components/UsefulLink";
import { Heroforcontent } from "@/components/Heroforcontent";

const getUniContent = async (slug) => {
  const uniJson = uniData.find((uni) => uni.slug === slug);
  if (!uniJson) {
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
      const { slug } = uniJson;
      const Mymodule = await import(`../../../blog/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      console.log(error);
      return (
        <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
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

const UniPage = async (props) => {
  const slug = props.params.slug;
  const uniContent = await getUniContent(slug);
  const uniJson = uniData.find((uni)=>uni.slug === slug);
  if(!uniJson){
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
  }
  return (
    <>
    <Heroforcontent heading1={uniJson.title} heading2={uniJson.author}/>
    <div className="h-auto mt-12">
      <div className="mt-14 grid grid-cols-3 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-32">
 
        <div className="mx-auto w-full max-w-4xl  p-2 sm:p-5 lg:p-8 rounded-lg col-span-3 lg:col-span-2">
        
          
          <div>{uniContent}</div>
        </div>
        <div className="hidden lg:block px-10">
          <h2 className="text-3xl text-gray-300 font-semibold mb-4 whitespace-nowrap">
            All Essays
          </h2>
          <ul className="space-y-2 content-list mb-20">
            <UsefulLink name="Custom Essay Help" href="/" />
            <UsefulLink name="Admission Essay Help" href="/" />
            <UsefulLink name="Exploratory Essay Help" href="/" />
            <UsefulLink name="Law Essay Help" href="/" />
            <UsefulLink name="Deductive Essay Help" href="/" />
            <UsefulLink name="Scholarship Essays Help" href="/" />
            <UsefulLink name="Argumentive Essay Help" href="/" />
            <UsefulLink name="Urgent Essay Help" href="/" />
            <UsefulLink name="Student Essay Writing" href="/" />
            <UsefulLink name="Plagiarism Free Essays" href="/" />
            <UsefulLink name="Essay Help Online" href="/" />
            <UsefulLink name="Essay Homework Help" href="/" />
            <UsefulLink name="Need Help Writing Essay" href="/" />
            <UsefulLink name="Cheap Essay Writer" href="/" />
            <UsefulLink name="Perfect Essay Help" href="/" />
            <UsefulLink name="MBA Essay Writing Service" href="/" />
            <UsefulLink name="Professional Essay Writer" href="/" />
            <UsefulLink name="Cheap Essay Writing Services" href="/" />
            <UsefulLink name="Essay Writers Online" href="/" />
          </ul>
          <h2 className="text-3xl text-gray-300 font-semibold mb-4 whitespace-nowrap">
            Other Services
          </h2>
          <ul className="space-y-2 content-list">
            <UsefulLink name="Assignment Writing" href="/" />
            <UsefulLink name="Cookery" href="/" />
            <UsefulLink name="Property Law" href="/" />
            <UsefulLink name="Constitutional Law" href="/" />
            <UsefulLink name="Administrative Law" href="/" />
            <UsefulLink name="Criminal Law" href="/" />
            <UsefulLink name="Human Rights Law" href="/" />
            <UsefulLink name="Civil Law" href="/" />
            <UsefulLink name="Tort Law" href="/" />
            <UsefulLink name="Management" href="/" />
            <UsefulLink name="Managerial Economics" href="/" />
            <UsefulLink name="Managerial Accounting" href="/" />
            <UsefulLink name="Case Study Writing" href="/" />
            <UsefulLink name="Coursework Writing" href="/" />
            <UsefulLink name="Best Dissertation Writing" href="/" />
            <UsefulLink name="Best Report Writing" href="/" />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};
export const generateStaticParams = async () => {
  const uni = getUniMetadata();
  return uni.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const uniMetaData = getUniMetadata();
  const slug = props.params.slug;
  const uni = uniMetaData.find((post) => post.slug === slug);
  if (uni) {
    return {
      slug,
      title: uni.title,
      description: uni.description,
      image: uni.image,
      date: uni.date,
      author: uni.author,
      openGraph: {
        title: uni.openGraph.title,
        description: uni.openGraph.description,
        images: uni.openGraph.images,
        url: uni.openGraph.url,
        locale: uni.openGraph.locale,
        type: uni.openGraph.type,
        site_name: uni.openGraph.site_name,
        publishedTime: uni.openGraph.publishedTime,
        authors: uni.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export default UniPage;
