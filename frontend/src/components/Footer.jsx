import { Droplet, Heart, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-white py-8">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //     <div className="flex justify-center mb-4">
    //       <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
    //     </div>
    //     <p className="text-gray-400 mb-2">
    //       © 2025 Blood Donor Initiative. Saving lives, one donation at a time.
    //     </p>
    //     <p className="text-gray-500 text-sm">
    //       Your privacy is important to us. All information is kept confidential.
    //     </p>
    //   </div>
    // </footer>
    <footer className="bg-gray-900 text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-500 p-2 rounded-lg">
                <Droplet className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl">FindMyBlood</span>
            </div>
            <p className="text-gray-400">
              Connecting blood donors with those in need, saving lives every
              day.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">How It Works</li>
              <li className="hover:text-white cursor-pointer">
                Donor Guidelines
              </li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Find Donors</li>
              <li className="hover:text-white cursor-pointer">
                Register as Donor
              </li>
              <li className="hover:text-white cursor-pointer">Request Blood</li>
              <li className="hover:text-white cursor-pointer">Blood Banks</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1-800-BLOOD</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>help@findmyblood.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Life Avenue</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 FindMyBlood. All rights reserved. Saving lives together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
