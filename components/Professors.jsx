import Image from "next/image";
import {
  professor1,
  professor2,
  professor3,
  professor4,
} from "@/public/assets";


const Professors = () => {
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col">
      <div className="justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-4 mb-4 p-1">
          <span className="border-b-4 border-orange-600 border-r-2 shadow-lg p-2">
            Our Academic <span className="text-orange-600"> Experts</span>
          </span>
        </h2>
        <div className="my-10 flex flex-wrap justify-center gap-10">
          <ProfessorCard name="Dylan Hugo" image={professor1} description="Dylan Hugo is a distinguished professor of Mathematics known for his groundbreaking research in the field of pure and applied mathematics. He has a deep passion for teaching and mentoring students, helping them excel in complex mathematical concepts." />
          <ProfessorCard name="Tetiana Reuben" image={professor2} description="Tetiana Reuben is a renowned professor of Physics with expertise in various areas of theoretical and experimental physics. Her contributions to the world of physics have expanded our understanding of the fundamental laws governing the universe." />
          <ProfessorCard name="Oakley Dean" image={professor3} description="Oakley Dean is a prominent professor of Chemistry recognized for pioneering research in chemical synthesis and molecular design. His work has led to significant advancements in the development of new materials and pharmaceuticals." />
          <ProfessorCard name="Kimberley Toby" image={professor4} description="Kimberley Toby is an esteemed professor of Biology who specializes in various biological disciplines, including genetics, ecology, and microbiology. Her dedication to research and education has inspired countless students to pursue careers in the life sciences." />
        </div>
      </div>
    </div>
  );
};

const ProfessorCard = ({ name, image, description }) => {
  return (
    <div className="relative w-40 sm:w-64 flex flex-col rounded-md shadow-lg group hover:scale-105 transition-all">
      <Image src={image} width={350} height={350} alt={name} className="transition-all" />
      <h3 className=" cursor-default absolute bottom-2 right-3 bg-secondary p-1 px-6 bg-orange-600 whitespace-nowrap text-xs sm:text-sm md:text-md">
        {name}
      </h3>
      <p className=" cursor-default absolute bg-gray-700 text-white -bottom-4 sm:-bottom-5 right-3 p-1 px-3 text-xs sm:text-sm md:text-md">
        PhD Expert
      </p>
      {/* Hidden description element */}
      <div className="absolute hidden sm:block bg-slate-800/70 backdrop-blur-lg border-b -[1px] border-orange-600 top-0 left-0 w-[100%] h-[0%] group-hover:h-[80%]  cursor-default  text-white p-4  sm:text-md  transition-all opacity-0 group-hover:opacity-100 ">
        <p className="overflow-hidden text-xs sm:text-sm">{description}</p>


 
      </div>
    </div>
  );
};

export default Professors;
