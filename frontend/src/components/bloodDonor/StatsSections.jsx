import React from "react";

const StatsSections = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
          <p className="text-gray-600 font-medium">Registered Donors</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="inline-block p-4 bg-pink-100 rounded-full mb-4">
            <Droplet className="w-8 h-8 text-pink-600" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">150,000+</h3>
          <p className="text-gray-600 font-medium">Lives Saved</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">24/7</h3>
          <p className="text-gray-600 font-medium">Emergency Support</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSections;
