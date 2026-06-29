import React from "react";
import { aboutUsStyles } from "../assets/dummyStyles";
import { teamMembers, testimonials } from "../assets/dummyAbout";
import { MessageCircleCode, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AboutTeam = () => {
  return (
    <>
      <section className={aboutUsStyles.teamSection}>
        <div className={aboutUsStyles.sectionGrid}>
          <div className={aboutUsStyles.teamHeader}>
            <h2 className={aboutUsStyles.teamTitle}>Meet Our Leadership</h2>
            <p className={aboutUsStyles.teamSubtitle}>
              Passionate educators, innovators, and visionaries dedicated to
              your success
            </p>
          </div>
          <div className={aboutUsStyles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={aboutUsStyles.teamMember}>
                <div className={aboutUsStyles.teamImageContainer}>
                  <div className={aboutUsStyles.teamImage}>
                    <img
                      src={member.image}
                      className={`w-full h-full object-cover rounded-full`}
                      alt="team memeber imag"
                    />
                  </div>
                </div>
                <h3 className={aboutUsStyles.teamName}>{member.name}</h3>
                <div className={aboutUsStyles.teamRole}>{member.role}</div>
                <p className={aboutUsStyles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={aboutUsStyles.testimonialsSection}>
        <div className={aboutUsStyles.sectionGrid}>
          <div className={aboutUsStyles.testimonialsHeader}>
            <h2 className={aboutUsStyles.testimonialsTitle}>
              What Our Students Say
            </h2>
            <p className={aboutUsStyles.testimonialsSubtitle}>
              Real stories from real learners who transformed their careers
            </p>
          </div>
          <div className={aboutUsStyles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={aboutUsStyles.testimonialCard}>
                <div className={aboutUsStyles.testimonialStars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={aboutUsStyles.testimonialStar} />
                  ))}
                </div>
                <p className={aboutUsStyles.testimonialText}>
                  "{testimonial.text}"
                </p>
                <div className={aboutUsStyles.testimonialAuthor}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={aboutUsStyles.testimonialAvatar}
                  />
                  <div>
                    <div className={aboutUsStyles.testimonialAuthorName}>
                      {testimonial.name}
                    </div>
                    <div className={aboutUsStyles.testimonialAuthorRole}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta section */}
      <section className={aboutUsStyles.ctaSection}>
        <div className={aboutUsStyles.ctaOrb1}></div>
        <div className={aboutUsStyles.ctaOrb2}></div>
        <div className={aboutUsStyles.ctaContent}>
          <h2 className={aboutUsStyles.ctaTitle}>
            Ready to Transform Your Future?
          </h2>
          <p className={aboutUsStyles.ctaDescription}>
            Join millions of learners who have transformed their lives with
            LearnHub. Start your journey today with a 7-day free trial.
          </p>

          {/* btn  */}
          <div className="max-w-sm mx-auto">
            <Link
              to="/contact"
              className="group relative flex justify-center items-center gap-5 w-[300px] py-4 sm:py-6 rounded-2xl border-2 border-white overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              {/* Content */}
              <MessageCircleCode
                size={24}
                className="relative z-10 text-white"
              />
              <span className="relative z-10 text-xl sm:text-2xl text-white">
                Talk to Advisor
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
