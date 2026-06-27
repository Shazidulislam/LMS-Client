import React from "react";
import {
  contactIconGradients,
  footerBackgroundStyles,
  footerStyles,
  iconColors,
} from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  // Twitter,
  // Instagram,
  // Linkedin,
  Mail,

  // MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HandHelping,
  HeartHandshake,
  Phone,
  MapPin,
} from "lucide-react";
import { contactInfo, quickLinks, socialIcons, supportLinks } from "../assets/dummyFooter";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";


const iconMap = {
  // Twitter,
  CiTwitter, 
  // Instagram,
  FaInstagram,
  // Linkedin,
  FiLinkedin,
  Mail,
  HeartHandshake,
  // Phone,
  // MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HandHelping,
};

const Footer = () => {
  console.log(quickLinks);
  return (
    <footer className={footerStyles.footer}>
      <div className={footerBackgroundStyles.backgroundContainer}>
        <div className={footerBackgroundStyles.floatingOrb1}></div>
        <div className={footerBackgroundStyles.floatingOrb2}></div>
        <div className={footerBackgroundStyles.floatingOrb3}></div>
        <div className={footerBackgroundStyles.floatingOrb4}></div>

        {/* subtle grid overlay, reduce opacity on small screens */}
        <div className={footerBackgroundStyles.gridOverlay}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          <div className={footerStyles.brandSection}>
            <div className={footerStyles.brandTransform}>
              <div className={footerStyles.brandContainer}>
                <div className={footerStyles.brandGradient}></div>

                <div className={"relative font-serif flex items-center gap-3 "}>
                  <img src={logo} alt="logo" className="w-12 h-12" />
                  <h3 className={footerStyles.brandTitle}>EduCore</h3>
                </div>
              </div>
              <p className={footerStyles.brandDescription}>
                Transform your learning journey with interactive courses and
                cutting-edge educational technology designed for modern
                learners.
              </p>
            </div>
          </div>
          {/* quick links */}
          <div>
            <h4 className={`${footerStyles.sectionHeader} ${iconColors.cyan}`}>
              <ArrowRight className={footerStyles.sectionIcon} />
              Quick Links
            </h4>
            {/* icon lisk */}
            <ul className={footerStyles.linksList}>
              {quickLinks.map((link, i) => {
                const Icon = iconMap[link.iconKey] || ArrowRight;
                return (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className={`${footerStyles.linkItem} ${iconColors.cyan}`}
                      style={{
                        transitionDelay: `${i * 80}ms`,
                      }}
                    >
                      <Icon
                        className={`${footerStyles.linkIcon} ${iconColors.cyan}`}
                      />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Supports liks */}
          <div>
            <h4
              className={`${footerStyles.sectionHeader} ${iconColors.purple}`}
            >
              <HandHelping className={footerStyles.sectionIcon} />
              Support Links
            </h4>
            {/* icon lisk */}
            <ul className={footerStyles.linksList}>
              {supportLinks.map((link, i) => {
                const Icon = iconMap[link.iconKey] || HandHelping;
                return (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className={`${footerStyles.linkItem} ${iconColors.purple}`}
                      style={{
                        transitionDelay: `${i * 80}ms`,
                      }}
                    >
                      <Icon
                        className={`${footerStyles.linkIcon} ${iconColors.cyan}`}
                      />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* contact section */}
          <div>
            <h4
              className={`${footerStyles.sectionHeader} ${iconColors.emerald}`}
            >
              <Phone className={footerStyles.sectionIcon}></Phone>
              Contact Us
            </h4>

            <div className={footerStyles.contactSpace}>
              <div className={footerStyles.contactItem}>
                <div
                  className={`${footerStyles.contactIconContainer} ${contactIconGradients.address}`}
                >
                  <MapPin
                    className={`${footerStyles.contactIcon} ${iconColors.cyan600}`}
                  ></MapPin>
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>
                    {contactInfo.addressLine1}
                  </p>
                  <p className={`${footerStyles.contactTextSecondary} pt-2`}>
                    {contactInfo.city}
                  </p>
                </div>
              </div>

              <div className={footerStyles.contactItem}>
                <div
                  className={`${footerStyles.contactIconContainer} ${contactIconGradients.phone}`}
                >
                  <Phone
                    className={`${footerStyles.contactIcon} ${iconColors.purple600}`}
                  ></Phone>
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>
                    {contactInfo.phone}
                  </p>
                  <p className={`${footerStyles.contactTextSecondary} pt-2`}>
                    {contactInfo.phoneHours}
                  </p>
                </div>
              </div>

              <div className={footerStyles.contactItem}>
                <div
                  className={`${footerStyles.contactIconContainer} ${contactIconGradients.email}`}
                >
                  <Mail
                    className={`${footerStyles.contactIcon} ${iconColors.emerald600}`}
                  ></Mail>
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* social */}
        <div className={footerStyles.socialSection}>
          <div className={footerStyles.socialContainer}>
            <div className={footerStyles.socialIconsContainer}>
              {socialIcons.map((social, index) => {
                const IconComponent = iconMap[social.iconKey] || Twitter;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className={footerStyles.socialIconLink}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* subtle hover overlay only matters on pointer devices */}
                    <div
                      className={`${footerStyles.socialIconContainer} ${social.bgColor}`}
                    >
                      <div className={footerStyles.socialIconInner}>
                        <IconComponent className={footerStyles.socialIcon} />
                      </div>

                      {/* small tooltip on hover for pointer devices; hidden on touch by default */}
                      <div className={footerStyles.socialTooltip}>
                        {social.name}
                        <div className={footerStyles.socialTooltipArrow} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
