import React from "react";
import Navbar from "../components/Navbar";

import BloodGroup from "../components/home/BloodGroup";
import OurContribution from "../components/home/OurContribution";
import ActivityAs from "../components/home/ActivityAs";
import HeroBanner from "../components/home/HeroBanner";
import WhyChooseSection from "../components/home/WhyChooseSection";
import UrgentRequests from "../components/home/UrgentRequests";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <HeroBanner />
      <ActivityAs />
      <BloodGroup />
      <OurContribution />
      <WhyChooseSection />
      <UrgentRequests />

    </div>
  );
};

export default HomePage;
