import fs from "fs";
import { uniData } from "@/constants";

const getUniMetadata = () => {
  const folder = "university/";
  const files = fs.readdirSync(folder);
  const jsxPosts = files.filter((file) => file.endsWith(".jsx"));

  const uniMetadata = jsxPosts
    .map((htmlFile) => {
      const slug = htmlFile.replace(".jsx", "");
      const uni = uniData.find((uni) => uni.slug === slug);

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
        console.error(`Blog not found for jsx file: ${htmlFile}`);
        return null;
      }
    })
    .filter(Boolean);
  return uniMetadata;
};

export default getUniMetadata;
