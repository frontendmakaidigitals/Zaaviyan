import HeroSection from "./(Home-page)/sections/HeroSection";
import Banner from "./App_Chunks/Components/Banner";
import Industries from "./(Home-page)/sections/Industries";
import CoreValue from "./(Home-page)/sections/CoreValue";
import WorkProcess from "./(Home-page)/sections/WorkProcess";
import About from "./(Home-page)/sections/About";
export default function Home() {
  return (
   <div className="">
    <HeroSection />
    <About />
    <CoreValue />
    <Industries />
    <WorkProcess />
    <Banner />
   </div>
  );
}
