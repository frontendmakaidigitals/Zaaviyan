import React from "react";
import HeroSection from "./(About-us)/sections/Hero-Section";
import Text from "./(About-us)/sections/Text";
import AboutUs from "./(About-us)/sections/AboutUs";
import Process from "./(About-us)/sections/Process";
import Benefits from "./(About-us)/sections/Benefits";
import Banner from "../App_Chunks/Components/Banner";
const Page = () => {
  return (
    <>
      <HeroSection />
      <Text />
      <AboutUs />
      <Process />
      <Benefits />
      <Banner />
    </>
  );
};

export default Page;
