import React from "react";

const CardWithButton = () => {
  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-lg p-6 overflow-hidden">
      {/* Card Content */}
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is some card content. It can be anything you want.
      </p>

      {/* Cutout Section */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full transform translate-x-1/2 translate-y-1/2"></div>

      {/* Open Link Button */}
      <a
        href="#"
        className="absolute -bottom-4 -right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
};

export default CardWithButton;