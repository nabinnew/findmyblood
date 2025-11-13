import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">1-800-DONATE-NOW</p>
            <p className="text-gray-500 text-sm mt-1">24/7 Emergency Hotline</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-block p-4 bg-pink-100 rounded-full mb-4">
              <Mail className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">support@blooddonor.org</p>
            <p className="text-gray-500 text-sm mt-1">
              Response within 24 hours
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Life Saver Avenue</p>
            <p className="text-gray-500 text-sm mt-1">Open Mon-Sat 8AM-8PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
