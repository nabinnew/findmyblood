// Blood Group Component
const BloodGroup = () => {
  const bloodGroup = [
    { name: "A+", color: "from-red-400 to-red-500" },
    { name: "A-", color: "from-pink-400 to-pink-500" },
    { name: "B+", color: "from-red-500 to-red-600" },
    { name: "B-", color: "from-pink-500 to-pink-600" },
    { name: "AB+", color: "from-red-400 to-pink-500" },
    { name: "AB-", color: "from-pink-400 to-red-500" },
    { name: "O+", color: "from-red-600 to-red-700" },
    { name: "O-", color: "from-pink-600 to-pink-700" },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="px-4 py-4">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl text-gray-800 mb-2">
            Available Blood Groups
          </h2>
          <p className="text-gray-600 text-lg">Find donors by blood type</p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {bloodGroup.map((curElem, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${curElem.color} rounded-2xl p-8 shadow-lg w-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="font-bold text-white text-5xl md:text-6xl relative z-10">
                {curElem.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodGroup;
