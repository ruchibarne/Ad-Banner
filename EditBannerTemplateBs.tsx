// components/EditBannerTemplateBs.tsx
import React, { useState } from "react";

interface EditBannerProps {
  show: boolean;
  onClose: () => void;
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onUpdate: (banner: EditBannerProps["banner"]) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  show,
  onClose,
  banner,
  onUpdate,
}) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);

  const handleSubmit = () => {
    const updatedBanner = {
      title,
      description,
      cta,
      image,
      background,
    };

    onUpdate(updatedBanner); // Update the banner data
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="bg-white rounded shadow-lg p-6"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Similar input fields for description, cta, image, background */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;