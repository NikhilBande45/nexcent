import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Feature from "@/components/Feature";
import Design from "@/components/Design";
import Count from "@/components/Count";
import Customers from "@/components/Customers";
import Advantage from "@/components/Advantage";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="dark:bg-[#1C1C1C]" >
        <div className="bg-[#F5F7FA] dark:bg-[#1C1C1C]">
          <Nav />
          <Hero/>
        </div>
        <Clients/>
        <Community/>
        <Feature/>
        <Count/>
        <Design/>
        <Customers/>
        <Advantage/>
        <Demo/>
        <Footer/>
      </div>
      
    </>
  );
}
