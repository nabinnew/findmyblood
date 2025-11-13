import { useState } from "react";
import { Search, Droplet, MapPin, AlertCircle, Loader2 } from "lucide-react";

export default function BloodDonorSearch() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState("10");
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const getCurrentLocation = () => {
    setLocationLoading(true);
    setError("");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
          setLocationLoading(false);
          setError("");
        },
        (error) => {
          setError("Unable to get your location. Please enter manually.");
          setLocationLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLocationLoading(false);
    }
  };

  const handleSearch = async () => {
    console.log(bloodGroup, latitude, longitude, radius);
    if (!bloodGroup) {
      setError("Please select a blood group");
      return;
    }

    if (!latitude || !longitude) {
      setError("Please provide location coordinates or use current location");
      return;
    }

    setLoading(true);
    setError("");
    setDonors([]);
    setSearched(false);

    try {
      const encodedBloodGroup = encodeURIComponent(bloodGroup);
      const apiUrl = `http://127.0.0.1:8000/api/donors/search?blood_group=${encodedBloodGroup}&location=${latitude},${longitude}&radius=${radius}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success && result.data) {
        setDonors(result.data);
      } else {
        setDonors([]);
      }
      setSearched(true);
    } catch (err) {
      setError(err.message || "Failed to fetch donors. Please try again.");
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Find Blood Donor
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blood Group <span className="text-red-500">*</span>
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Location <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={locationLoading}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm disabled:text-gray-400"
                >
                  {locationLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Getting location...
                    </>
                  ) : (
                    <>
                      <MapPin className="w-4 h-4" />
                      Use My Location
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Latitude
                  </label>
                  <input
                    type="text"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="e.g., 27.71067"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Longitude
                  </label>
                  <input
                    type="text"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="e.g., 84.4031"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Radius (km)
              </label>
              <div className="flex items-center gap-12">
                <input
                  type="range"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  min="1"
                  max="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  style={{
                    background: `linear-gradient(to right, #ec4899 ${radius}%, #e5e7eb ${radius}%)`,
                  }}
                />
                <p>{radius}</p>
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={loading || locationLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Search Donors
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {searched && donors.length === 0 && !error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <Droplet className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              No Donors Found
            </h3>
            <p className="text-gray-600">
              No donors with blood group {bloodGroup} found within {radius} km
              of your location.
            </p>
          </div>
        )}

        {donors.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Found {donors.length} Donor{donors.length !== 1 ? "s" : ""}
              </h2>
              <div className="bg-red-100 px-3 py-1 rounded-full">
                <span className="text-red-700 font-semibold">{bloodGroup}</span>
              </div>
            </div>

            <div className="space-y-4">
              {donors.map((donor, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-red-300 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
                          {donor.blood_group}
                        </div>
                        <span className="text-gray-500 text-sm">
                          {donor.distance.toFixed(2)} km away
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 text-sm font-medium">
                            Contact:
                          </span>
                          <a
                            href={`tel:${donor.contact}`}
                            className="text-red-600 font-semibold hover:underline"
                          >
                            {donor.contact}
                          </a>
                        </div>

                        {donor.municipality && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">
                              {donor.municipality}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Droplet className="w-8 h-8 text-red-600  shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
