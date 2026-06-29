// import React, { useState } from "react";
// import { contactStyles } from "../../assets/dummyStyles";
// import {DotLottieReact} from "@lottiefiles/dotlottie-react"
// import {
//   Mailbox,
//   MessageCircleDashed,
//   MessageSquare,
//   Phone,
//   SendHorizonal,
//   User,
// } from "lucide-react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   console.log(formData)

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") setPhoneError("");
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validatePhone = (phone) => /^\d{10}$/.test(phone);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validatePhone(formData.phone)) {
//       setPhoneError("Please eter a valid 10-digits mobile number");
//     }
//     setIsSubmitting(true);
//     const whatsappMessage =
//       `Name: ${formData.name}%0A` +
//       `Email: ${formData.email}%0A` +
//       `Phone: ${formData.phone}%0A` +
//       `Subject: ${formData.subject}%0A` +
//       `Message: ${formData.message}`;

//     const whatsappUrl = `https://wa.me/01605199098?text=${whatsappMessage}`;
//     window.open(whatsappUrl, "_blank");

//     setTimeout(() => {
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//       setIsSubmitting(false);
//       setPhoneError("");
//     }, 2000);
//   };

//   const isFormValid =
//     formData.name &&
//     formData.email &&
//     validatePhone(formData.phone) &&
//     formData.subject &&
//     formData.message;

//   return (
//     <div className={contactStyles.container}>
//       <div className={contactStyles.mainContainer}>
//         {/* title */}
//         <div className={contactStyles.header}>
//           <h1 className={contactStyles.title}>Contact Us</h1>
//         </div>

//         <div className={contactStyles.mainContainer}>
//           <div className={contactStyles.formContainer}>
//             <div className={contactStyles.formGlow1}></div>
//             <div className={contactStyles.formGlow3}></div>
//             <div className={contactStyles.formGlow3}></div>

//             <div className={contactStyles.form}>
//               <form onSubmit={handleSubmit} className={contactStyles.formElements}>
//                 {/* name + email */}
//                 <div className={contactStyles.formGrid}>
//                   <div className={contactStyles.formGroup}>
//                     <label className={contactStyles.label}>
//                       <User
//                         className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon} `}
//                       />
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className={`${contactStyles.input} ${contactStyles.colors.purple.focus} ${contactStyles} ${contactStyles.colors.purple.hover} `}
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   <div className={contactStyles.formGroup}>
//                     <label className={contactStyles.label}>
//                       <Mailbox
//                         className={`${contactStyles.labelIcon} ${contactStyles.colors.blue.icon} `}
//                       />
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className={`${contactStyles.input} ${contactStyles.colors.blue.focus} ${contactStyles} ${contactStyles.colors.blue.hover} `}
//                       placeholder="Enter your Email"
//                     />
//                   </div>
//                 </div>

//                 {/*phone start */}
//                 {/* Phone */}
//                 <div className={contactStyles.formGroup}>
//                   <label className={contactStyles.label}>
//                     <Phone
//                       className={`${contactStyles.labelIcon} ${contactStyles.colors.green.icon}`}
//                     />
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     inputMode="numeric"
//                     maxLength={10}
//                     className={`${contactStyles.input} ${
//                       contactStyles.colors.green.focus
//                     } ${contactStyles.colors.green.hover} ${
//                       phoneError ? contactStyles.inputError : ""
//                     }`}
//                     placeholder="Enter your phone number"
//                   />
//                   {phoneError && (
//                     <p className={contactStyles.errorText}>{phoneError}</p>
//                   )}
//                 </div>

//                 {/* Subject */}
//                 <div className={contactStyles.formGroup}>
//                   <label className={contactStyles.label}>
//                     <MessageSquare
//                       className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon}`}
//                     />
//                     Subject *
//                   </label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className={`${contactStyles.select} ${contactStyles.colors.purple.focus}`}
//                   >
//                     <option value="">Select a subject</option>
//                     <option value="General Inquiry">General Inquiry</option>
//                     <option value="Project Collaboration">
//                       Project Collaboration
//                     </option>
//                     <option value="Support">Support</option>
//                     <option value="Feedback">Feedback</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 {/*phone end */}

//                 {/* message */}
//                 <div className={contactStyles.formGroup}>
//                   <label className={contactStyles.label}>
//                     <MessageCircleDashed
//                       className={`${contactStyles.labelIcon} ${contactStyles.colors.blue.icon}`}
//                     />
//                     Message
//                   </label>
//                   <textarea
//                     name={"message"}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={"5"}
//                     placeholder="Tell us about your project or inquriy..."
//                     className={`${contactStyles.textarea} hover:border-blue-500`}
//                   ></textarea>
//                 </div>
//                 {/* submit btn */}
//                 <button
//                   type="submit"
//                   disabled={!isFormValid || isSubmitting}
//                   className={`${contactStyles.submitButton} ${
//                     isFormValid && !isSubmitting
//                       ? contactStyles.submitButtonEnabled
//                       : contactStyles.submitButtonDisabled
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className={contactStyles.spinner}>Sending...</div>
//                     </>
//                   ) : (
//                     <>
//                       <div className={"flex justify-center items-center gap-2"}>
//                         <SendHorizonal className={contactStyles.submitIcon} />
//                         Send Message
//                       </div>
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//           {/* Animation Section */}
//           <div className={contactStyles.animationContainer}>
//             <div className={contactStyles.animationWrapper}>
//               <DotLottieReact
//                 src="https://lottie.host/c6cc5a62-2258-49a2-95b3-a15465b7cfc4/rJwd4lUDke.lottie"
//                 loop
//                 autoplay
//                 style={{
                 
//                   filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { contactStyles } from "../../assets/dummyStyles";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Mailbox,
  MessageCircle,
  MessageCircleDashed,
  MessageSquare,
  Phone,
  SendHorizonal,
  User,
} from "lucide-react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data)

    const whatsappMessage =
      `Name: ${data.name}%0A` +
      `Email: ${data.email}%0A` +
      `Phone: ${data.phone}%0A` +
      `Subject: ${data.subject}%0A` +
      `Message: ${data.message}`;

    const whatsappUrl = `https://wa.me/8801605199098?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className={contactStyles.container}>
      <div className={contactStyles.mainContainer}>
        {/* Title */}
        <div className={contactStyles.header}>
          <h1 className={contactStyles.title}>Contact Us</h1>
        </div>

        <div className={contactStyles.mainSection}>
          <div className={contactStyles.formContainer}>
            <div className={contactStyles.formGlow1}></div>
            <div className={contactStyles.formGlow3}></div>
            <div className={contactStyles.formGlow3}></div>

            <div className={contactStyles.form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={contactStyles.formElements}
              >
                {/* Name + Email */}
                <div className={contactStyles.formGrid}>
                  {/* Full Name */}
                  <div className={contactStyles.formGroup}>
                    <label className={contactStyles.label}>
                      <User
                        className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon}`}
                      />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`${contactStyles.input} ${contactStyles.colors.purple.focus} ${contactStyles.colors.purple.hover} ${
                        errors.name ? contactStyles.inputError : ""
                      }`}
                      {...register("name", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.name && (
                      <p className={contactStyles.errorText}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className={contactStyles.formGroup}>
                    <label className={contactStyles.label}>
                      <Mailbox
                        className={`${contactStyles.labelIcon} ${contactStyles.colors.blue.icon}`}
                      />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className={`${contactStyles.input} ${contactStyles.colors.blue.focus} ${contactStyles.colors.blue.hover} ${
                        errors.email ? contactStyles.inputError : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={contactStyles.errorText}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className={contactStyles.formGroup}>
                  <label className={contactStyles.label}>
                    <Phone
                      className={`${contactStyles.labelIcon} ${contactStyles.colors.green.icon}`}
                    />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    inputMode="numeric"
                    maxLength={11}
                    className={`${contactStyles.input} ${contactStyles.colors.green.focus} ${contactStyles.colors.green.hover} ${
                      errors.phone ? contactStyles.inputError : ""
                    }`}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{11}$/,
                        message: "Please enter a valid 11-digit mobile number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className={contactStyles.errorText}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className={contactStyles.formGroup}>
                  <label className={contactStyles.label}>
                    <MessageSquare
                      className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon}`}
                    />
                    Subject *
                  </label>
                  <select
                    className={`${contactStyles.select} ${contactStyles.colors.purple.focus} ${
                      errors.subject ? contactStyles.inputError : ""
                    }`}
                    {...register("subject", {
                      required: "Please select a subject",
                    })}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">
                      Project Collaboration
                    </option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className={contactStyles.errorText}>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className={contactStyles.formGroup}>
                  <label className={contactStyles.label}>
                    <MessageCircleDashed
                      className={`${contactStyles.labelIcon} ${contactStyles.colors.blue.icon}`}
                    />
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className={`${contactStyles.textarea} hover:border-blue-500 ${
                      errors.message ? contactStyles.inputError : ""
                    }`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className={contactStyles.errorText}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`${contactStyles.submitButton} ${
                    isValid && !isSubmitting
                      ? contactStyles.submitButtonEnabled
                      : contactStyles.submitButtonDisabled
                  }`}
                >
                  {isSubmitting ? (
                    <div className={contactStyles.spinner}>Sending...</div>
                  ) : (
                    <div className="flex justify-center items-center gap-2">
                      <SendHorizonal className={contactStyles.submitIcon} />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Animation Section */}
          <div className={contactStyles.animationContainer}>
            <div className={contactStyles.animationWrapper}>
              <DotLottieReact
                src="https://lottie.host/c6cc5a62-2258-49a2-95b3-a15465b7cfc4/rJwd4lUDke.lottie"
                loop
                autoplay
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
                }}
              />
            </div>
          </div>
        </div>
        {/* footer info */}
        <div className={contactStyles.footer} >
          <div className={contactStyles.footerBadge} >
            <MessageCircle className={contactStyles.footerIcon}/>
            <span className={contactStyles.footerText} >
              All message are sent directly to whatsApp for immediat response
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
