import React from "react";
import { Droplet } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-red-500 p-2 rounded-lg">
        <Droplet className="w-6 h-6 text-white" fill="white" />
      </div>
      <h1 className="text-xl font-bold tracking-tight text-black ">
        FindMy<span className="text-red-500 font-[customFont] ">Blood</span>{" "}
      </h1>
    </div>
  );
};

export default Logo;
