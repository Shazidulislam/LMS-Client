import { Star } from "lucide-react";
import React from "react";

const HomeCourses = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-pink-50 min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center ">
          <h1 className="font-[Montserrat] font-bold tracking-wider text-3xl sm:text-4xl md:text-4xl mb-0 text-center bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg flex items-center justify-center gap-3">
            <Star className="w-7 h-7 md:w-8 md:h-8 animate-spin-slow text-indigo-400" />
            Explore Top Courses
            <Star className="w-7 h-7 md:w-8 md:h-8 animate-spin-slow text-indigo-400" />
          </h1>
        </div>

          {/* co */}

      </div>
    </div>
  );
};

export default HomeCourses;
