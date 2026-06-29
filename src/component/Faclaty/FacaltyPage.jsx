import React from "react";
import { facultyStyles } from "../../assets/dummyStyles";
import sampleTeachers from "../../assets/dummyFaculty";
import { Mail, Star } from "lucide-react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const motion = {
  div: ({ children, initial, animate, transition, className }) => (
    <div className={className}>{children}</div>
  ),
};

const FacaltyPage = () => {
  return (
    <div className={facultyStyles.container}>
      <div className={facultyStyles.header}>
        <div className={facultyStyles.headerContent}>
          <h1 className={`${facultyStyles.title}`}>Meet Our Faculty</h1>
          <div className={facultyStyles.titleDivider}></div>
          <p className={facultyStyles.subtitle}>
            Learn from industry experts and academic pioneers dedicated to your
            success
          </p>
        </div>
      </div>
      {/* faculty grid */}
      <div className={facultyStyles.facultySection}>
        <div className={facultyStyles.facultyContainer}>
          <div className={facultyStyles.facultyGrid}>
            {sampleTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={facultyStyles.card}
              >
                <div className={facultyStyles.teacherCard}>
                  <div className={facultyStyles.imageContainer}>
                    <div className={facultyStyles.imageWrapper}>
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className={facultyStyles.image}
                      />
                    </div>

                    <div onLoadCapture={facultyStyles.experienceBadge}>
                      <div className={facultyStyles.experienceBadgeContent}>
                        {teacher.experience} Exp
                      </div>
                    </div>
                  </div>
                  {/* teacher info */}
                  <div className={facultyStyles.teacherInfo}>
                    <h3 className={facultyStyles.teacherName}>
                      {teacher.name}
                    </h3>
                    <p className={facultyStyles.teacherQualification}>
                      {teacher.qualification}
                    </p>
                    <p className={`${facultyStyles.teacherBio}`}>
                      {teacher.bio}
                    </p>
                  </div>
                  {/* rating */}
                  <div className={facultyStyles.ratingContainer}>
                    <div className={facultyStyles.starRating}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${facultyStyles.starIcon} ${
                            i < Math.round(teacher.initialRating)
                              ? facultyStyles.starButtonActive
                              : facultyStyles.starButtonInactive
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* social */}
                  <div className={facultyStyles.socialContainer} >
                    <a 
                    href={`https://mail.google.com/mail/?view=cm&to=${teacher.email}`}
                    target="_blank"
                    className={`${facultyStyles.socialIcon} ${facultyStyles.socialIconEmail}`}
                    title={`Email ${teacher.name}`}
                    >
                        <Mail className={facultyStyles.socialIconSvg}/>
                    </a>

                    <a href={teacher.linkedin}
                    target="_blank"
                    className={`${facultyStyles.socialIcon} ${facultyStyles.socialIconLinkedin}`}
                    >
                        <FiLinkedin className={facultyStyles.socialIconSvg} />
                    </a>
                    <a href={teacher.instagram}
                    target="_blank"
                    className={`${facultyStyles.socialIcon} ${facultyStyles.socialIconInstagram}`}
                    >
                        <FiInstagram className={facultyStyles.socialIconSvg} />
                    </a>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacaltyPage;
