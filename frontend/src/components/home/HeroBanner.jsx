import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="bg-linear-to-r from-red-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Save Lives, Donate Blood Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-50">
            Connect with blood donors instantly. Find the right blood type in
            your area within minutes.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/donor"
              className="bg-white text-red-500 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              Become a Donor
              <ChevronRight className="w-5 h-5" />
            </Link>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-red-500 transition-colors">
              Become a Donor
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
