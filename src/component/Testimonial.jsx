import React, { useEffect, useRef } from "react";
import testimonials from "../assets/dummyTestimonial";
import { BadgeCheck, CalendarDays, MessageSquareQuote } from "lucide-react";
import { testimonialStyles } from "../assets/dummyStyles";

const Testimonial = () => {
  const cardsRef = useRef([]);
  //   চেক করে device-এ mouse/trackpad আছে কিনা।
  const isPointerDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(pointer:fine)").matches;
  // is have any mouse event , or  hover any acrd and which card
  const onMouseMove = (e, el, index) => {
    if (!el) return;
    if (!isPointerDevice()) return;

    // e = Mouse Event
    // el = Current Card Element
    // index = Card Number

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const px = (x - 0.5) * 2;
    const py = (y - 0.5) * 2;

    const rotateMax = 10;
    const translateMax = 8;

    const rx = -py * rotateMax;
    const ry = px * rotateMax;
    const tx = px * translateMax;
    const ty = py * translateMax;

    // Main card transform
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0)`;

    // Parallax effects for inner elements
    const avatar = el.querySelector(".avatar-container");
    const quote = el.querySelector(".quote-icon");
    const badge = el.querySelector(".course-badge");
    if (avatar) {
      avatar.style.transform = `translate3d(${tx * 0.3}px, ${
        ty * 0.3
      }px, 20px)`;
    }

    if (quote && window.innerWidth >= 640) {
      quote.style.transform = `translate3d(${tx * 0.5}px, ${
        ty * 0.5
      }px, 40px) rotate(${ry * 2}deg)`;
    }

    if (badge) {
      badge.style.transform = `translate3d(${tx * 0.2}px, ${ty * 0.2}px, 30px)`;
    }
  };

  //   leavee the mouse

  const onMouseLeave = (el) => {
    if (!el) return;
    if (!isPointerDevice()) return;

    el.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)`;
    el.style.transition = "transform 600ms cubic-bezier(.23,1,.32,1)";

    // Reset parallax elements
    const avatar = el.querySelector(".avatar-container");
    const quote = el.querySelector(".quote-icon");
    const badge = el.querySelector(".course-badge");

    [avatar, quote, badge].forEach((element) => {
      if (element) {
        element.style.transform = "translate3d(0,0,0)";
        element.style.transition = "transform 600ms cubic-bezier(.23,1,.32,1)";
      }
    });

    setTimeout(() => {
      if (el) el.style.transition = "";
      [avatar, quote, badge].forEach((element) => {
        if (element) element.style.transition = "";
      });
    }, 650);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, index) => {
          if (en.isIntersecting) {
            setTimeout(() => {
              en.target.classList.add("card-visible");
            }, index * 150);
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    cardsRef.current.forEach((c) => {
      if (c) obs.observe(c);
    });

    return () => obs.disconnect();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
      </svg>
    ));
  };

  return (
    <section className="py-2 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 ">
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80  border border-indigo-100 sm:mb-6 ">
          <div className="w-2 h-2 bg-gradient-to-br from-indigo-500  to-purple-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-indigo-700">
            Student Testimonials
          </span>
        </div>
        {/* title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[Montserrat] mb-3 sm:mb-6">
          <span className="bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Voice Of Success
          </span>
        </h2>
        {/* sub title */}
        <h3 className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover how our learners transformed their careers with hands-on
          projects and expert mentorship.
        </h3>
      </div>
      {/* testimonial sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-0">
        {testimonials.map((test, i) => (
          <div
            onMouseMove={(e) => onMouseMove(e, cardsRef.current[i], i)}
            onMouseLeave={() => onMouseLeave(cardsRef.current[i])}
            key={test.id}
            className="relative group"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-400/30 via-pink-400/20 to-purple-400/30 blur-xl opacity-60 transition-all duration-700 pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/85 to-indigo-50/30 backdrop-blur-sm border border-white/50 pointer-events-none" />

            <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 blur-xl animate-float-slow pointer-events-none hidden sm:block"></div>

            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200/40 to-blue-200/40 blur-xl animate-float pointer-events-none hidden sm:block"></div>

            <article
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative z-10 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 transform transition-all duration-300 card-init hover:shadow-2xl will-change-transform border border-white/60 overflow-hidden"
              style={{
                boxShadow:
                  "0 20px 60px rgba(16,24,40,0.08), 0 0 0 1px rgba(255,255,255,0.4)",
              }}
            >
              {/* courses content */}
              <div className="course-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

                <span className="text-sm font-medium text-indigo-700 truncate">
                  {test.course}
                </span>
              </div>

              <div className="quote-icon absolute top-4 right-4 text-indigo-200/60 transform transition-transform duration-500 hidden sm:block">
                <MessageSquareQuote className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div className="flex items-start mb-4 sm:mb-6 gap-4">
                <div className="avatar-container relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 transform transition-transform duration-500">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={test.avatar}
                      alt="avatars"
                      className="avatar-img w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 to-pink-400/20 blur-md -z-10 animate-pulse-slow"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 gap-2">
                    <div className="min-w-0">
                      <h3
                        className={
                          "font-[Poppins] font-bold text-gray-900 text-base sm:text-lg md:text-lg leading-tight truncate"
                        }
                      >
                        {test.name}
                      </h3>
                      <p className="text-sm sm:text-sm text-purple-600 font-medium truncate">
                        {test.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 whitespace-nowrap">
                        {renderStars(test.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* message */}
              <blockquote className="text-gray-700 leading-relaxed mb-4 sm:mb-6 relative z-10 text-sm sm:text-base">
                <span className="text-indigo-400 font-serif text-xl leading-none">
                  "
                </span>
                {test.message}
                <span className="text-indigo-400 font-serif text-xl leading-none">
                  "
                </span>
              </blockquote>
              {/* testimonial footer */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BadgeCheck className="w-4 h-4 text-lime-600" />
                  <span>Verified Student</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays className="w-4 h-4 text-indigo-400" />
                  <span>2026</span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
      <style jxs>{testimonialStyles.animations}</style>
    </section>
  );
};

export default Testimonial;
