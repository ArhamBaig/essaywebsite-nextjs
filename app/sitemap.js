import { contentData } from "@/constants";
import { blogData } from "@/constants";
import { uniData } from "@/constants";
const EXTERNAL_DATA_URL = "https://www.bestessaywriter.co.uk";

export default async function sitemap() {
  const blogs = blogData.map((content)=>({
    url: `${EXTERNAL_DATA_URL}/blogs/${content.slug}`,
    lastModified: content.isoDate
  }))
  const content = contentData.map((content)=>({
    url: `${EXTERNAL_DATA_URL}/${content.slug}`,
    lastModified: new Date().toISOString()
  }))
  const uni = uniData.map((uni)=>({
    url: `${EXTERNAL_DATA_URL}/${uni.slug}`,
    lastModified: new Date().toISOString()
  }))
  const routes = ["","/reviews","/blogs","/contact"].map((route)=>({
    url: `${EXTERNAL_DATA_URL}${route}`,  
    lastModified: new Date().toISOString()
  }))

  return [...routes, ...blogs, ...content, ...uni]
}


