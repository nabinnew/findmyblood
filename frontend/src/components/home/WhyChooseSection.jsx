import { Clock, MapPin, Shield, Users } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Access our platform anytime to find donors or request blood in emergencies",
    },
    {
      icon: Shield,
      title: "Verified Donors",
      description:
        "All donors are verified and screened for safety and reliability",
    },
    {
      icon: MapPin,
      title: "Location Based",
      description:
        "Find donors near you with our smart location-based search system",
    },
    {
      icon: Users,
      title: "Large Network",
      description:
        "Connect with thousands of registered donors across the country",
    },
  ];

  return (
    <div className="bg-gray-50 mt-16 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-800 mb-2">
            Why Choose FindMyBlood?
          </h2>
          <p className="text-gray-600 text-lg">
            Your trusted blood donation platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
