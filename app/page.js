import { Hero } from "@/components/Hero";
import { Guarantee } from "@/components/Guarantee";
import Statistics from '@/components/Statistics';
import { Dragndrop } from "@/components/Dragndrop";
import Homecontent from "@/components/Homecontent";
import Homecontent2 from "@/components/Homecontent2";
import HomeReviews from "@/components/HomeReviews";
import Professors from "@/components/Professors";
import Accordion from "@/components/Accordion";
import UniversitiesServed from "@/components/UniversitiesServed";
import DiscountBanner from "@/components/DiscountBanner";
import ValueProposition from "@/components/ValueProposition";
import PurchaseCycle from "@/components/PurchaseCycle";
export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
     
        <UniversitiesServed />
        <Statistics />
        <DiscountBanner />
        <ValueProposition />
       <PurchaseCycle />
      

  

      
    </div>
  );
}
