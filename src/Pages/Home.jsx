import React from "react";
import Banner from "../Components/Banner";
import Trust from "../Components/Trust";
import CategorySection from "../Components/CategorySection";
import FeaturedCollection from "../Components/FeaturedCollection";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-[2000px] w-full">
          <Banner />
          <Trust />
          <CategorySection />
          <FeaturedCollection />
        </div>
      </div>
    </div>
  );
};

export default Home;
