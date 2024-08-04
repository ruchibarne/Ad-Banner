// pages/index.tsx
import React, { useState } from "react";
import { adBannersData } from "../public/data";
import BannerImageComp from "../components/BannerImageComp";

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState(adBannersData);

  // Function to handle updating the ad banner data
  const handleBannerUpdate = (updatedBanner: typeof BannerImageComp["banner"]) => {
    const updatedBanners = banners.map((banner) =>
      banner.title === updatedBanner.title ? updatedBanner : banner
    );
    setBanners(updatedBanners);
  };

  return (
    <main>
      <div className="container mx-auto px-4">
        {banners.map((banner) => (
          <BannerImageComp key={banner.title} banner={banner} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;