import { Hero } from "@/components/Hero";
import Statistics from '@/components/Statistics';
import Testimonials from "@/components/Testimonials";
import UniversitiesServed from "@/components/UniversitiesServed";
import DiscountBanner from "@/components/DiscountBanner";
import ValueProposition from "@/components/ValueProposition";
import PurchaseCycle from "@/components/PurchaseCycle";
import DiscountBannerFooter from "@/components/DiscountBannerFooter";
import Content from "@/components/Content";
export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
        <UniversitiesServed />
        <Statistics />
        <DiscountBanner />
        <ValueProposition />
       <PurchaseCycle />
       <Content/>
       <Testimonials />
    </div>
  );
}
