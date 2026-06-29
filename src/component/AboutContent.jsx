// import React, { useEffect, useState } from "react";
// import { aboutUsAnimations, aboutUsStyles } from "../assets/dummyStyles";
// import aboutBanner from "../assets/AboutBannerImage.png";
// import { Star } from "lucide-react";
// import { counterTargets, missionVisionValues, statsMeta } from "../assets/dummyAbout";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const AboutContent = () => {

//     const [counterValues, setCounterValues] = useState({
//     students: 0,
//     courses: 0,
//     successRate: 0,
//     countries: 0,
//     certificates: 0,
//     support: 0,
//   });

//     // Animated counter effect using imported counterTargets
//   useEffect(() => {
//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;
//     const timers = [];

//     Object.keys(counterTargets).forEach((key) => {
//       let current = 0;
//       const target = counterTargets[key];
//       const increment = target / steps;

//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(timer);
//         }
//         setCounterValues((prev) => ({
//           ...prev,
//           [key]: Math.floor(current),
//         }));
//       }, stepDuration);

//       timers.push(timer);
//     });

//     return () => timers.forEach((t) => clearInterval(t));
//   }, []);

//     // Helper to format display number per stat key
//   const formatStatNumber = (key) => {
//     if (key === "support") return "24/7";
//     if (key === "successRate") return `${counterValues.successRate}%`;
//     const val = counterValues[key] ?? 0;
//     // certificates might be large -> show with commas and plus
//     if (key === "certificates") return `${val.toLocaleString()}+`;
//     return `${val.toLocaleString()}+`;
//   };

//   return (
//     <div className={aboutUsStyles.container}>
//       {/* HERO SECTION */}
//       <section className={aboutUsStyles.heroSection}>

//         {/* Background Layer */}
//         <div className={aboutUsStyles.heroBackground}>
//           <div
//             className={aboutUsStyles.heroImageContainer}
//             style={{
//               backgroundImage: `url(${aboutBanner})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             {/* Dark Overlay */}
//             <div className={aboutUsStyles.heroTint}></div>

//             {/* Vignette */}
//             <div
//               className={aboutUsStyles.heroVignette}
//               style={{
//                 background:
//                   "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.65) 100%)",
//               }}
//             />
//           </div>
//         </div>

//         {/* Content Layer */}
//         <div className={aboutUsStyles.heroContent}>

//           {/* Badge */}
//           <div className={aboutUsStyles.trustBadge}>
//             <Star className={aboutUsStyles.trustIcon} />
//             Trusted by 50,000+ students worldwide
//           </div>

//           {/* Title */}
//           <h1 className={aboutUsStyles.mainHeading}>
//             About LearnHub
//           </h1>

//           {/* Subtitle */}
//           <p className={aboutUsStyles.subHeading}>
//             Empowering millions to achieve dreams through
//             <span className={aboutUsStyles.inlineHighlight}>
//               accessible education
//             </span>
//           </p>

//           {/* Stats */}
//           <div className={aboutUsStyles.statsGrid}>
//             {statsMeta.slice(0, 4).map((stat, i) => (
//               <div
//                 key={i}
//                 className={aboutUsStyles.statCard}
//               >
//                <div className={aboutUsStyles.statNumber} >
//                 {formatStatNumber(stat.key)}
//                </div>
//                <div className={aboutUsStyles.statLabel} >{stat.label}</div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//       {/* {
//         missionVisionValues.map((section ,i)=>(
//           <section
//           key={i}
//           className={`${aboutUsStyles.sectionContainer} ${section.bgColor} ${i%2 ===1 ? "bg-whiteS":""}`}
//           >
//           <div className={aboutUsStyles.sectionGrid} >
//             <div className={`${aboutUsStyles.sectionContentGrid} ${i%2 ===1 ?"lg:grid-flow-dense":""} `} >
//               <div className={`${aboutUsStyles.sectionImageContainer} ${i%2===1?"lg:col-start-2":""}`} >
//                 <div className={aboutUsStyles.sectionImage} >
//                   <DotLottieReact src={section.dotLottie} loop autoplay/>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </section>
//         ))
//       } */}
//       {
//   missionVisionValues.map((section, i) => (
//     <section
//       key={i}
//       className={`${aboutUsStyles.sectionContainer} ${section.bgColor}`}
//     >
//       <div className={aboutUsStyles.sectionGrid}>

//         <div
//           className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
//             i % 2 === 1 ? "lg:grid-flow-dense" : ""
//           }`}
//         >

//           {/* Animation */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-md h-[300px] lg:h-[400px]">
//               <DotLottieReact
//                 src={section.dotLottie}
//                 loop
//                 autoplay
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-5">

//             <h2 className="text-4xl font-bold text-gray-900">
//               {section.title}
//             </h2>

//             <h3 className="text-xl text-gray-600 font-medium">
//               {section.subtitle}
//             </h3>

//             <p className="text-gray-700 leading-relaxed">
//               {section.description}
//             </p>

//             {/* Features */}
//             <div className="space-y-3">
//               {section.features.map((f, idx) => (
//                 <div key={idx} className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                   <p className="text-gray-700">{f}</p>
//                 </div>
//               ))}
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   ))
// }
//       <style jsx>{aboutUsAnimations}</style>
//     </div>
//   );
// };

// export default AboutContent;

import React, { useEffect, useState } from "react";
import { aboutUsStyles } from "../assets/dummyStyles";
import aboutBanner from "../assets/AboutBannerImage.png";
import { Star, CheckCircle, ShieldUser } from "lucide-react";
import {
  counterTargets,
  missionVisionValues,
  statsMeta,
  testimonials,
  values,
} from "../assets/dummyAbout";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutContent = () => {
  const [counterValues, setCounterValues] = useState({
    students: 0,
    courses: 0,
    successRate: 0,
    countries: 0,
    certificates: 0,
    support: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = [];

    Object.keys(counterTargets).forEach((key) => {
      let current = 0;
      const target = counterTargets[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounterValues((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepDuration);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  const formatStatNumber = (key) => {
    if (key === "support") return "24/7";
    if (key === "successRate") return `${counterValues.successRate}%`;
    const val = counterValues[key] ?? 0;
    if (key === "certificates") return `${val.toLocaleString()}+`;
    return `${val.toLocaleString()}+`;
  };

  return (
    <div className={aboutUsStyles.container}>
      {/* ── HERO SECTION ── */}
      <section className={aboutUsStyles.heroSection}>
        <div className={aboutUsStyles.heroBackground}>
          <div
            className={aboutUsStyles.heroImageContainer}
            style={{
              backgroundImage: `url(${aboutBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={aboutUsStyles.heroTint} />
            <div
              className={aboutUsStyles.heroVignette}
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.65) 100%)",
              }}
            />
          </div>
        </div>

        <div className={aboutUsStyles.heroContent}>
          <div className={aboutUsStyles.trustBadge}>
            <Star className={aboutUsStyles.trustIcon} />
            Trusted by 50,000+ students worldwide
          </div>

          <h1 className={aboutUsStyles.mainHeading}>About LearnHub</h1>

          <p className={aboutUsStyles.subHeading}>
            Empowering millions to achieve dreams through
            <span className={aboutUsStyles.inlineHighlight}>
              accessible education
            </span>
          </p>

          <div className={aboutUsStyles.statsGrid}>
            {statsMeta.slice(0, 4).map((stat, i) => (
              <div key={i} className={aboutUsStyles.statCard}>
                <div className={aboutUsStyles.statNumber}>
                  {formatStatNumber(stat.key)}
                </div>
                <div className={aboutUsStyles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES SECTIONS ── */}
      {missionVisionValues.map((section, i) => {
        const isEven = i % 2 === 0;

        return (
          <section
            key={i}
            className={`${aboutUsStyles.sectionContainer} ${section.bgColor}`}
          >
            <div className={aboutUsStyles.sectionGrid}>
              {/*
                Two-column grid.
                Even rows  → image LEFT,   text RIGHT
                Odd rows   → image RIGHT,  text LEFT  (achieved via order utilities)
              */}
              <div className={aboutUsStyles.sectionContentGrid}>
                {/* ── IMAGE COLUMN ── */}
                <div
                  className={`${aboutUsStyles.sectionImageContainer} ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className={aboutUsStyles.sectionImage}>
                    <DotLottieReact src={section.dotLottie} loop autoplay />
                  </div>
                </div>

                {/* ── TEXT COLUMN ── */}
                <div
                  className={`${aboutUsStyles.sectionContent} ${
                    !isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Badge */}
                  <div className={aboutUsStyles.sectionBadge}>
                    <section.icon
                      className={`w-5 h-5 mr-2 bg-gradient-to-r ${section.color} bg-clip-text`}
                      style={{ color: "transparent" }}
                    />
                    <span className={aboutUsStyles.sectionBadgeText}>
                      {section.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className={aboutUsStyles.sectionTitle}>
                    {section.title}
                  </h2>

                  {/* Description */}
                  <p className={aboutUsStyles.sectionDescription}>
                    {section.description}
                  </p>

                  {/* Feature list */}
                  <div className={aboutUsStyles.featuresContainer}>
                    {section.features.map((feature, fi) => (
                      <div key={fi} className={aboutUsStyles.featureItem}>
                        <div
                          className={`${aboutUsStyles.featureIcon} ${section.color}`}
                        >
                          <CheckCircle
                            className={aboutUsStyles.featureIconSvg}
                          />
                        </div>
                        <span className={aboutUsStyles.featureText}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Enhanced Values Principles Section */}
      <section className={aboutUsStyles.valuesSection}>
        <div className={aboutUsStyles.sectionGrid}>
          <div className={aboutUsStyles.valuesHeader}>
            <div className={aboutUsStyles.valuesBadge}>
              <ShieldUser className={aboutUsStyles.valuesBadgeIcon} />
              <span className={aboutUsStyles.valuesBadgeText}>
                Our Guiding Principles
              </span>
            </div>
            <h2 className={aboutUsStyles.valuesTitle}>
              Core Values That Define Us
            </h2>
            <p className={aboutUsStyles.valuesSubtitle}>
              The foundation of everything we do at LearnHub
            </p>
          </div>

          <div className={aboutUsStyles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={aboutUsStyles.valueCard}>
                <div
                  className={`${aboutUsStyles.valueGradient} ${value.color}`}
                ></div>

                <h3
                  className={aboutUsStyles.valueCardTitle}
                  title={value.title}
                >
                  {value.title}
                </h3>

                <p className={aboutUsStyles.valueCardDescription}>
                  {value.description}
                </p>

                <ul className={aboutUsStyles.valueFeatures}>
                  {value.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={aboutUsStyles.valueFeatureItem}
                    >
                      <div
                        className={`${aboutUsStyles.valueFeatureDot} ${value.color}`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div
                  className={`${aboutUsStyles.valueUnderline} ${value.color}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default AboutContent;
