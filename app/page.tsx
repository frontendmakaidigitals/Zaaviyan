import HeroSection from "./(Home-page)/sections/HeroSection";
import Banner from "./App_Chunks/Components/Banner";
import Industries from "./(Home-page)/sections/Industries";
import CoreValue from "./(Home-page)/sections/CoreValue2";
import WorkProcess from "./(Home-page)/sections/WorkProcess";
import About from "./(Home-page)/sections/About";
import Services from "./(Home-page)/sections/Services2";
import Form from "./(Home-page)/sections/Form";
export default function Home() {
  return (
   <div className="">
    <HeroSection />
    <About />
    <Services />
    <CoreValue />
    <Industries />
    <WorkProcess />
    <Form />
    <Banner />
   </div>
  );
}
