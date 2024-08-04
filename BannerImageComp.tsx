// components/BannerImageComp.tsx
import React, { useState } from "react";
import { adBannersData } from "../public/data";
import EditBannerTemplateBs from "./EditBannerTemplateBs"; // Import the bottom sheet component

interface BannerProps {
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
}

const BannerImageComp: React.FC<BannerProps> = ({ banner }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  // Function to handle updating the ad banner data (will be implemented later)
  const handleBannerUpdate = (updatedBanner: BannerProps["banner"]) => {
    // Update the adBannersData array with the updated banner
    // ... (Implementation will be in the `pages/index.tsx` file)
  };

  return (
    <div
      style={{
        backgroundColor: banner.background,
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{banner.title}</h2>
          <p className="text-gray-600">{banner.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {banner.cta}
          </button>
        </div>
        <button
          onClick={() => setShowEditModal(true)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
      </div>
      <img src={banner.image} alt={banner.title} className="w-full" />
      {/* Bottom Sheet for Edit */}
      <EditBannerTemplateBs
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        banner={banner}
        onUpdate={handleBannerUpdate}
      />
    </div>
  );
};

export default BannerImageComp;