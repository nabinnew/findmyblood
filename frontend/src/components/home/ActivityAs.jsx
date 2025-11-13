import { Heart, User, UserSearch } from "lucide-react";

// Activity As Component
const   ActivityAs = () => {
  const activity = [
    {
      icon: UserSearch,
      name: "Find Donors",
      description: "Search for blood donors in your area",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
    },
    {
      icon: User,
      name: "Donate Blood",
      description: "Register as a donor and save lives",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
    },
    {
      icon: Heart,
      name: "Request Blood",
      description: "Post urgent blood requirements",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="px-4 py-4">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl text-gray-800 mb-2">
            How Can We Help You?
          </h2>
          <p className="text-gray-600 text-lg">
            Choose your activity to get started
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activity.map((curElem, index) => {
            const IconComponent = curElem.icon;
            return (
              <div
                key={index}
                className={`${curElem.bgColor} shadow-xl rounded-2xl px-6 py-10 w-full flex flex-col gap-4 items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  <IconComponent className="w-12 h-12 " />
                </div>
                <p className="text-white text-xl font-bold">{curElem.name}</p>
                <p className="text-white text-sm text-center opacity-90">
                  {curElem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityAs;
