import Box  from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {
  supportico,
  clockico,
  formatico,
  plagico,
  privacyico,
  qualityico,
  trustpilotlogo,
  sitejabberlogo,
  gmblogo
} from "@/public/assets";
import Image from "next/image";

const ValueProposition = () => {
  return (
  <div className="-mt-44 bg-white pt-52 pb-20 grid grid-col-1 lg:grid-cols-3   ">
    <div className="flex flex-col items-center mb-10 lg:mb-2">
      <h2 className=" text-gray-600  text-sm text-center lg:text-left">What Makes Us Stand Out</h2>
      <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6"></div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-10">Our Promises</h2>
      <button className="bg-orange-600 text-white px-5 text-lg p-2">ORDER</button>
      <div className="mt-7 justify-center flex flex-col items-center ">
      <p className="text-sm text-gray-400 p-2">Checkout our client reviews</p>
     
      <div className="flex mt-3 rounded-lg shadow-lg p-5 hover:shadow-orange-300 transition-all items-center">
      <Image src={sitejabberlogo} height={70} width={50} alt="sitejabber logo"/>
      <div className="flex flex-col justify-center items-center">
      <p className="ml-3 font-bold text-2xl">Sitejabber</p>

      <Box>
        <Rating value={5} name="sitejabberrating" className="ml-3" readOnly/>
        
      </Box>
      </div>
      </div>
      
      <div className="flex mt-3 rounded-lg hover:shadow-green-300  shadow-lg p-5 items-center">
      <Image src={trustpilotlogo}  height={20} width={50} alt="trustpilot logo"/>
      <div className="flex flex-col justify-center items-center">
      <p className="font-bold ml-3 text-2xl">Trustpilot</p>
      <Box>
        <Rating value={5} name="sitejabberrating" className="ml-3" readOnly/>
        
      </Box>
      </div>
      </div>
      
      <div className="flex mt-3 rounded-lg shadow-lg p-5 hover:shadow-blue-300  items-center">
      <Image src={gmblogo}  height={40} width={50} alt="google my business logo"/>
      <div className="flex flex-col justify-center items-center">
      <p className="ml-3 text-xl"><span className="text-blue-400">G</span><span className="text-red-600">o</span><span className="text-yellow-400">o</span><span className="text-blue-400">g</span><span className="text-green-600">l</span><span className="text-red-600">e</span> <br></br><span className="font-bold text-gray-600">My Business</span></p>
      <Box>
        <Rating value={5} name="sitejabberrating" className="ml-3" readOnly/>
        
      </Box>
      </div>

      </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 lg:col-span-2 gap-2 p-2 px-5">
        <ValueCard  alt="no plagiarism" name="Ensured Privacy" image={privacyico} desc="Our Essay Help UK experts guarantee your privacy, ensuring your peace of mind." />
        <ValueCard  alt="no plagiarism" name="Get free assistance in your academics" image={supportico} desc="Take a deep dive into the wellspring of understanding with our free-of-cost academic assistance at any time." />
        <ValueCard  alt="no plagiarism" name="On time delivery" image={clockico} desc="We promise immediate delivery before the deadline without excuses. Consequently, your academic work will be on time every time." />
        <ValueCard  alt="no plagiarism" name="Instructions-driven content" image={formatico} desc="From instruction to creation, we cater to all the instructions you will give us while hiring our services." />
        <ValueCard  alt="no plagiarism" name="Original and unique content" image={plagico} desc="Experience the magic of original and unique content with our creative and expert content wizards." />
        <ValueCard  alt="no plagiarism" name="Get student-friendly prices" image={qualityico} desc="Invest in your future without breaking the bank, Cheap Essay Writing UK understands student budgets. We bring you generous discounts." />
    </div>
  </div>
  )
};


const ValueCard = ({image,alt,name,desc}) => {
    return(
        <div className="cursor-default ">
          <div className="flex justify-center items-center">
           
              <Image src={image} alt={alt} width={100} height={100} className="w-[70px] lg:w-[100px]"/>
            
          </div>
          <div className="my-4 text-center">
            <p className="text-sm sm:text-base md:text-lg my-2 ">{name}</p>
            <p className="text-xs sm:text-sm md:text-base">{desc}</p>
          </div>
      </div>
    )
}

export default ValueProposition;
