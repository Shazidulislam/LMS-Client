import { ArrowRight, Star, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import courses from "../assets/dummyData";
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

const HomeCourses = () => {
  const visibleCourses = courses.slice(0, 8);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // get userratings from localstorage
  const [userRatings, setUserRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCoursRatings");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  //
  const [hoverRatings, setHoverRatings] = useState({});
  // save userratings in localstorage
  useEffect(() => {
    try {
      localStorage.setItem("userCoursRatings", JSON.stringify(userRatings));
    } catch {}
  }, [userRatings]);

  // without token not access in courses
  const showLoginToast = () => {
    toast.error("Please login to access this course", {
      position: "top-right",
      transition: Slide,
      autoClose: 3000,
      theme: "dark",
    });
  };

  // access courses id page with token
  const handleCourseClick = (id) => {
    if (!token) {
      return showLoginToast();
    }
    navigate(`/course/${id}`);
  };

  // without token not acces courses/id page
  const handleBrowseClick = () => {
    console.log(token, "from handleBrowseClick");
    if (!token) {
      toast.error("Please login to access this course", {
        position: "top-right",
        transition: Slide,
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }
    navigate("/course");
  };

  //
  const handleSetRating = (e, courseId, rating) => {
    e.stopPropagation();
    setUserRatings((prev) => ({ ...prev, [courseId]: rating }));
  };

  // set starts(5stars]])
  const renderInteractiveStars = (course) => {
    const userRating = userRatings[course.id] || 0;
    const hover = hoverRatings[course.id] || 0;
    const displayRating = hover || userRating;

    return (
      <div className={"flex flex-row items-center space-x-1"}>
        <div className={"flex"} onClick={(e) => e.stopPropagation()}>
          {Array.from({ length: 5 }).map((_, i) => {
            const idx = i + 1;
            const filled = idx <= displayRating;

            return (
              <button
                key={i}
                onClick={(e) => handleSetRating(e, course.id, idx)}
                onMouseEnter={() =>
                  setHoverRatings((s) => ({ ...s, [course.id]: idx }))
                }
                onMouseLeave={() =>
                  setHoverRatings((s) => ({ ...s, [course.id]: 0 }))
                }
                className={`transition-all duration-200 transform hover:scale-125 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
                  filled ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
                style={{ background: "transparent" }}
              >
                <Star
                  size={16}
                  fill={filled ? "currentColor" : "none"}
                  stroke="currentColor"
                  className={"w-5 h-5"}
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  console.log(visibleCourses);

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

        {/* course  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 p-5 sm:p-10 md:p-0">
          {visibleCourses?.map((courses) => {
            const isFree = !!courses.isFree || !courses.price;
            console.log(isFree);
               
            return (
              <div onClick={()=>handleCourseClick(courses.id)} key={courses.id} className="cursor-pointer">
                <div className="relative rounded-t-md  overflow-hidden">
                  <img
                    src={courses.image}
                    alt={courses.name}
                    className={
                      "w-full object-cover transition-transform duration-300 group-hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.18)] h-48 lg:w- sm:h-48 md:h-40 lg:h-48"
                    }
                    loading="lazy"
                  />
                </div>
                {/* courses info */}
                <div className="mt-4 px-4 bg-white/70 backdrop-blur-md rounded-b-lg -translate-y-3 sm:-translate-y-5 shadow-lg space-y-2 py-3">
                  <h3 className="font-[Montserrat] font-bold tracking-wider text-base sm:text-lg text-indigo-600 flex items-center truncate">
                    {courses.name}
                  </h3>

                  <div className="font-[Poppins]   flex items-center text-gray-500 text-sm ">
                    <User size={16} className="mr-1 text-pink-400" />
                    <span className="italic text-purple-600 truncate">
                      {courses.teacher}
                    </span>
                  </div>

                  <div className="flex items-center mt-1">
                    {renderInteractiveStars(courses)}
                  </div>

                  <div className="flex items-center mt-2 space-x-2">
                    {isFree ? (
                      <span className="text-lg sm:text-xl font-bold text-green-700 drop-shadow">
                        Free
                      </span>
                    ) : (
                      <>
                        <span className="text-lg sm:text-xl font-bold text-green-700 drop-shadow">
                          ${courses.price?.sale ?? "-"}
                        </span>
                        {courses.price?.original && (
                          <span className="line-through text-green-600 font-medium">
                            ${courses.price?.original}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* cta btn */}

        <div className="flex justify-center mt-12">
          <div className="relative inline-block group">
            {/* Glow Border */}
            <span
              className="absolute -inset-1 rounded-3xl pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(236,72,153,0.9), rgba(99,102,241,0.9), rgba(139,92,246,0.9), rgba(236,72,153,0.9))",
                filter: "blur(5px)",
                opacity: 0.8,
                zIndex: 0,
              }}
            />

            {/* Button */}
            <button
              onClick={handleBrowseClick}
              className="relative z-10 inline-flex items-center gap-4 px-12 py-4 text-xl font-bold rounded-3xl text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              }}
            >
              <span className="relative flex items-center gap-3">
                <span>Discover Courses</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
