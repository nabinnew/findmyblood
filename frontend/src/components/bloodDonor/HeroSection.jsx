import { Heart } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg animate-pulse">
              <Heart className="w-16 h-16 text-red-600" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Be a Life Saver
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-50 max-w-3xl mx-auto">
            Your blood donation can save up to three lives. Join our community
            of heroes today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-red-400 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold text-white bg-transparent">
                Quick Process
              </span>
            </div>
            <div className="bg-red-400 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold text-white bg-transparent">
                Safe & Secure
              </span>
            </div>
            <div className="bg-red-400 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold text-white bg-transparent">
                Make a Difference
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
