import {
  AlertCircle,
  Award,
  Droplet,
  Heart,
  MapPin,
  Users,
} from "lucide-react";
const OurContribution = () => {
  const contribution = [
    {
      name: "Blood Donors",
      number: "1K+",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      icon: Users,
    },
    {
      name: "Lives Saved",
      number: "3K+",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      icon: Heart,
    },
    {
      name: "Active Requests",
      number: "200",
      bgColor: "bg-gradient-to-br from-violet-100 to-violet-200",
      icon: AlertCircle,
    },
    {
      name: "Daily Donations",
      number: "50+",
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
      icon: Droplet,
    },
    {
      name: "Partner Hospitals",
      number: "25+",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      icon: MapPin,
    },
    {
      name: "Success Rate",
      number: "95%",
      bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      icon: Award,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="px-4 py-4">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl text-gray-800 mb-2">Our Impact</h2>
          <p className="text-gray-600 text-lg">
            Making a difference in the community
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contribution.map((curElem, index) => {
            const IconComponent = curElem.icon;
            return (
              <div
                key={index}
                className={`${curElem.bgColor} rounded-2xl px-6 py-10 w-full flex flex-col gap-4 items-center justify-center transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl`}
              >
                <IconComponent className="w-10 h-10 text-gray-700" />
                <h3 className="font-bold text-gray-800 text-5xl">
                  {curElem.number}
                </h3>
                <p className="text-gray-700 font-semibold text-lg">
                  {curElem.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurContribution;
