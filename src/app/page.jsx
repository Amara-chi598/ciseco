import React from "react";
import SectionOne from "@/Components/HomeSections/SectionOne";
import SectionTwo from "@/Components/HomeSections/SectionTwo";
import SectionFour from "@/Components/HomeSections/SectionFour";
import SectionThree from "@/Components/HomeSections/SectionThree";
import SectionFive from "@/Components/HomeSections/SectionFive";

const Home = () => {
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  );
};

export default Home;
