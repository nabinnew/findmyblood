import React from "react";
import Logo from "./Logo";
import { ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-7xl  mx-auto ">
      <div className="px-4 py-4 flex items-center justify-between">
        <Logo />

        <div className="relative hidden xs:block">
          <Search
            className="absolute top-1/2 -translate-y-[50%] left-1  text-white "
            size={28}
          />
          <Link
            to="/search"
            className="bg-red-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            Search Blood
          </Link>
        </div>
      </div>
    </div>

    // <div className="bg-white shadow-sm sticky top-0 z-50">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="px-4 py-4 flex items-center justify-between">
    //       <Logo />
    //       <div className="relative hidden xs:block">
    //         <Search className="absolute top-1/2 -translate-y-[50%] left-3 text-gray-400 w-5 h-5" />
    //         <input
    //           type="text"
    //           placeholder="Search Blood Donors..."
    //           className="border-2 border-gray-200 focus:border-red-400 outline-0 px-10 py-2.5 rounded-xl transition-colors w-64"
    //         />
    //       </div>
    //       <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors hidden sm:block">
    //         Sign In
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
