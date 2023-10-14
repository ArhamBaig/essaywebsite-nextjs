import Image from "next/image";
import UsefulLink from "./UsefulLink";
import { logo ,whitelocation,whitephone,whiteemail} from "@/public/assets";
export const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center mt-10 px-2">
        <p className="text-xl text-center lg:text-left">Don&apos;t <span className="text-orange-600">think</span> too much, You may miss your <span className="text-orange-600">deadline</span></p>
        <p className="text-gray-300  mt-2 text-center lg:text-left">Get assistance on our Whatsapp where we will guide you</p>
        <a href="https://wa.me/+447378489100" target="_blank"><button className="bg-green-500 animate-bounce mt-4 p-2 text-black rounded-sm">Let&apos;s talk</button></a>
      </div>
      <div className="mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="logo  flex flex-col   text-white p-10">
          <div className="text-center flex flex-col justify-center items-center">
        <Image src={logo} alt="logo" width={150} height={150} />
         <h2 className="text-2xl sm:text-3xl font-bold"> BESTESSAYWRITER </h2>
         </div>
         <h2 className="text-xl text-left font-semibold mt-10">
            Feel free to reach us anywhere!
          </h2>
          <div className="flex items-center">
            <Image src={whitelocation} height={20} width={20} alt="our location"/>
            <p className="pl-2 text-left">
              551 Butcher Row, London E1W 3EP, United Kingdom
            </p>
          </div>
          <a href="tel:+447378489100">
            <div className="flex mt-2 items-center">
              <Image src={whitephone} height={20} width={20} alt="our contact number"/>
              <p className="pl-2 hover:text-orange-600 text-left">+44 7378 489100</p>
            </div>
          </a>
          <a href="mailto:Scriptershubltd@gmail.com">
            <div className="flex mt-2 items-center">
              <Image src={whiteemail} height={20} width={20} alt="our email"/>
              <p className="pl-2 hover:text-orange-600 text-left">
                sales@bestessaywriter.co.uk
              </p>
            </div>
          </a>
        </div>

        <div className="items-start xl:items-center flex flex-col text-white p-10">
          <div className="font-bold">Quick Links</div>
          <ul className="useful-list">
            <UsefulLink name="Home" href="/" />
            <UsefulLink name="Blogs" href="/blog" />
          
            <UsefulLink name="Reviews" href="/reviews" />
            <UsefulLink name="Contact" href="/contact" />
          </ul>
        </div>

        <div className="items-start xl:items-center flex flex-col text-white p-10">
        <div className="font-bold">All Essays</div>
          <ul className="useful-list">
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
   
          </ul>
        </div>
        <div className="items-start xl:items-center flex flex-col  text-white p-10">
        <div className="font-bold">Other Services</div>
          <ul className="useful-list">
          <UsefulLink name="Assignment Writing" href="/"/>
            <UsefulLink name="Cookery" href="/"/>
            <UsefulLink name="Property Law" href="/"/>
            <UsefulLink name="Constitutional Law" href="/"/>
            <UsefulLink name="Administrative Law" href="/"/>
            <UsefulLink name="Criminal Law" href="/"/>
            <UsefulLink name="Human Rights Law" href="/"/>
            <UsefulLink name="Civil Law" href="/"/>
            <UsefulLink name="Tort Law" href="/"/>
            <UsefulLink name="Management" href="/"/>
            <UsefulLink name="Managerial Economics" href="/"/>
            <UsefulLink name="Managerial Accounting" href="/"/>
            <UsefulLink name="Case Study Writing" href="/"/>
            <UsefulLink name="Coursework Writing" href="/"/>
            <UsefulLink name="Best Dissertation Writing" href="/"/>
   
         
          </ul>
        </div>
      </div>
    </footer>
  );
};
