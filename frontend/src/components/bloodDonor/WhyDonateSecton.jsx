import React from "react";

const WhyDonateSecton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Donate Blood?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Blood donation is a simple act that can have a profound impact on
          someone's life. Here's why your contribution matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Save Lives Every Day
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Every two seconds, someone needs blood. From accident victims to
            cancer patients, your donation can be the difference between life
            and death. A single donation can save up to three lives, making you
            a hero to multiple families.
          </p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 border-2 border-pink-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Health Benefits for You
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Donating blood regularly can reduce the risk of heart disease,
            improve cardiovascular health, and help maintain healthy iron
            levels. You'll also receive a free health screening with every
            donation.
          </p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 border-2 border-pink-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Critical Shortage
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Blood cannot be manufactured and has a limited shelf life. Hospitals
            constantly need fresh supplies, especially for emergency surgeries,
            trauma care, and chronic disease treatment. Your donation helps
            maintain this vital supply.
          </p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join a Community
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Become part of a compassionate community of donors who regularly
            contribute to saving lives. You'll receive updates on how your
            donations are making a difference and be invited to special donor
            appreciation events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateSecton;
