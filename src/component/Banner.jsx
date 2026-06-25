import React, { useState } from "react";
import { bannerStyles } from "../assets/dummyStyles";
import {
  features,
  floatingIcons1,
  floatingIcons2,
} from "../assets/dummyBanner";
import { CircleCheckBig, Sparkle, X } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/Bannerimage.jpg";
import video from "../assets/BannerVideo.mp4";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  console.log(showVideo);
  return (
    <div className="relative md:pt-25 xl:pt-25 pt-21 sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] px-4 sm:px-6 md:px-8 lg:px-12 py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient-bg rounded-3xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 font_cursive">
        <div className="hidden md:flex col-span-1   flex-col justify-center items-center  md:gap-[350px] lg:gap-[400px]">
          {floatingIcons1?.map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.alt || ""}
              className={`w-8 h-8 lg:w-12 lg:h-12 ${
                i % 2 === 0 ? "animate-float-up" : "animate-float-down"
              }`}
            />
          ))}
        </div>
        <div className="col-span-12 md:col-span-10 items-center justify-center">
          <div className="p-4 sm:p-10 bg-white rounded-lg shadow-md flex flex-col sm:flex-row  ">
            {/* left side */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-400 rounded-full font_cursive text-sm font-medium animate-fade-in font-cursive">
                <Sparkle size={20} />
                New Features Available
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cursive font-heading uppercase tracking-wider font_cursive  leading-tight space-y-2 pt-3">
                <span className="block text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-text-gradient">
                  Build Amazing
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-text-gradient animation-delay-300">
                  Digital Products
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-body italic font-[pacifico] font-semibold text-gray-700 leading-relaxed mt-2 sm:mt-4">
                Create beautiful, responsive web applications with our powerful
                tools and components. Start building your next project today.
              </p>

              {/* feture */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 ">
                {features?.map((feture, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <span className={` text-sm text-${feture.color}-500`}>
                        <CircleCheckBig size={16} />
                      </span>
                    </div>
                    <span className="text-gray-700 font-cursive text-sm sm:text-base">
                      {feture.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* get startedand viwe demo buutons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3">
                <Link
                  to={"/course"}
                  className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-200 transition-all duration-300 transform font-cursive text-sm sm:text-base text-center"
                >
                  Get Started
                </Link>
                <button
                  onClick={() => {
                    setShowVideo(true);
                  }}
                  className="px-6 py-3 sm:px-8 sm:py-3 bg-white cursor-pointer text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform font-cursive text-sm sm:text-base text-cente"
                >
                  {" "}
                  Viwe Demo
                </button>
              </div>
            </div>

            {/* right side */}
            <div className="flex-1 flex items-center justify-center mt-8 sm:mt-0">
              {/* banner img */}
              <img
                src={bannerImg}
                alt="banner img"
                className="w-full max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-sm h-auto rounded-2xl shadow-2xl border border-white/70 animate-float-diagonal"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex col-span-1   flex-col  justify-center items-center  md:gap-[350px] lg:gap-[400px]">
          {floatingIcons2?.map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.alt || ""}
              className={`w-8 h-8 lg:w-12 lg:h-12  ${
                i % 2 === 0 ? "animate-float-up" : "animate-float-down"
              }`}
            />
          ))}
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[90%] max-w-3xl aspect-video rounded-2xl overflow-hidden">
            <video src={video} controls autoPlay className="w-full h-full" />

            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 bg-white rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
