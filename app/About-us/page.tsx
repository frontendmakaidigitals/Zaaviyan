import React from "react";
import HeroSection from "./(About-us)/sections/Hero-Section";
import Text from "./(About-us)/sections/Text";
import ChooseUs from "./(About-us)/sections/ChooseUs";
import AboutUs from "./(About-us)/sections/AboutUs";
import Aim from "./(About-us)/sections/Aim";
const Page = () => {
  return (
    <>
      <HeroSection />
      <Text />
      <AboutUs />
      <Aim />
      <ChooseUs />
    </>
  );
};

export default Page;
