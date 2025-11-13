import React, { useState } from "react";
import { Heart, Phone, Mail, MapPin, Upload, Check } from "lucide-react";
import Footer from "../components/Footer";
import HeroSection from "../components/bloodDonor/HeroSection";
import WhyDonateSecton from "../components/bloodDonor/WhyDonateSecton";
import DonorForm from "../components/bloodDonor/DonorForm";

export default function BloodDonorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <HeroSection />
      {/* donor form  */}
      <DonorForm />
      {/* Why Donate Section */}
      <WhyDonateSecton />
    </div>
  );
}
