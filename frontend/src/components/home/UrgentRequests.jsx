import { ChevronRight } from "lucide-react";

const UrgentRequests = () => {
  const requests = [
    {
      bloodType: "O-",
      location: "City Hospital",
      time: "2 hours ago",
      urgent: true,
    },
    {
      bloodType: "AB+",
      location: "Metro Medical Center",
      time: "5 hours ago",
      urgent: true,
    },
    {
      bloodType: "B+",
      location: "Community Hospital",
      time: "1 day ago",
      urgent: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl text-gray-800 mb-2">
          Urgent Blood Requests
        </h2>
        <p className="text-gray-600 text-lg">
          Help save lives by responding to these requests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {requests.map((request, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-400 transition-colors"
          >
            {request.urgent && (
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                URGENT
              </span>
            )}
            <div className="mt-4 flex items-center gap-4">
              <div className="bg-red-500 text-white font-bold text-3xl w-16 h-16 rounded-full flex items-center justify-center">
                {request.bloodType}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  {request.location}
                </p>
                <p className="text-gray-500 text-sm">{request.time}</p>
              </div>
            </div>
            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors">
              Respond Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="text-red-500 font-semibold hover:text-red-600 flex items-center gap-2 mx-auto">
          View All Requests
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default UrgentRequests;
