import React, { useEffect, useState } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import {
  BookMarked,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Contact,
  Home,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth, useClerk, UserButton, useUser } from "@clerk/react";
import { useRef } from "react";

const navItems = [
  { name: "Home", icon: Home, to: "/" },
  { name: "Courses", icon: BookOpen, to: "/course" },
  { name: "About", icon: BookMarked, to: "/about" },
  { name: "Faculty", icon: Users, to: "/faculty" },
  { name: "Contact", icon: Contact, to: "/contact" },
];

const Navbar = () => {
  // cleark signup , signin , and get token
  const { openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  //  toggle for responsibe
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrolly, setLastScrolly] = useState(0);

  const menuRef = useRef(null);
  const isLoggedIn = isSignedIn && Boolean(localStorage.getItem("token"));

  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // collect token
  useEffect(() => {
    const collectToken = async () => {
      if (isSignedIn) {
        const token = await getToken();
        localStorage.setItem("token", token);
        console.log("Clerk login token", token);
      }
    };

    collectToken();
  }, [isSignedIn, getToken]);

  useEffect(() => {
    if (!isSignedIn) {
      localStorage.removeItem("token");
    }
  }, [isSignedIn]);

  // INSTANT token removal using Clerk logout event
  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem("token");
      console.log("Token removed instantly on Clerk logout event");
    };

    window.addEventListener("user:signed_out", handleLogout);
    return () => window.removeEventListener("user:signed_out", handleLogout);
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      setLastScrolly((prev) => {
        const scrollY = window.scrollY;

        setIsScrolled(scrollY > 20);

        if (scrollY > prev && scrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }

        return scrollY;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showNavbar ? "translate-y-0 opacity-100" : `-translate-y-full opacity-0`}  ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-2 border-b border-gray-100" : "bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-3 border-b border-blue-100"}`}
    >
      {/* container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* innerContainer */}
        <div className="flex items-center justify-between h-12">
          {/* logo and brand start */}
          <div className="flex items-center gap-3 select-none">
            {/* logo */}
            <img src={logo} alt="Logo img" className="w-12 h-12" />
            {/* brand name */}
            <p className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-700 to-cyan-600 font-serif leading-[0.95] ">
              EduCore
            </p>
          </div>
          {/* logo and brand end */}
          {/* Desktop nav start*/}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl">
            <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-sm border border-gray-200">
              {navItems?.map(({ name, icon: Icon, to }) => {
                return (
                  <NavLink
                    key={name}
                    to={to}
                    className={({ isActive }) =>
                      `group relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${isActive ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-md" : ""} `
                    }
                  >
                    <Icon className="text-gray-600 transition-colors duration-300 group-hover:text-blue-600 w-4 h-4" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                      {" "}
                      {name}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
          {/* Desktop nav end*/}
          {/* right side start */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {!isSignedIn ? (
              <button
                type="button"
                onClick={() => openSignUp({})}
                className={`hidden lg:flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold shadow-sm hover:shadow-md transform transition-all duration-300 group `}
              >
                <span>Create Account</span>
              </button>
            ) : (
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            {/* toggle */}
            <button
              ref={menuRef}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:shadow-md transition-all duration-300 `}
            >
              <ChevronUp
                className={`${isOpen ? "rotate-180" : "rotate-0"} transform transition-all duration-300`}
                size={20}
              />
            </button>
          </div>
          {/* right side end */}
        </div>
        {/* mobile menu navbar */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="space-y-2">
              {navItems?.map(({ name, icon: Icon, to }) => (
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${isActive ? "bg-blue-50" : ""}`
                  }
                  key={name}
                  to={to}
                  end={to === "/"}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={
                      "p-2 rounded bg-blue-50 transition-colors duration-300"
                    }
                  >
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-700">{name}</span>
                </NavLink>
              ))}
              {!isSignedIn ? (
                <button
                  onClick={() => {
                    openSignUp({});
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 mt-2 cursor-pointer`}
                >
                  <span>Create Account</span>
                </button>
              ) : (
                <div className="flex items-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
    </nav>
  );
};

export default Navbar;
