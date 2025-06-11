"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
const location = "/images/location.png";
// import linkedIn from "/images/linkedIn.png";
// import instagram from "/images/skill-icons_instagram.png";
const linkedIn = "/images/linkedin2.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const { t } = useTranslation("contact-us");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if all required fields are filled (except jobTitle)
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    validateEmail(formData.email) &&
    formData.companyName.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    try {
      const response = await fetch("api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (response.status === 200) {
        toast.success("Thank you for contacting us!");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          jobTitle: "",
          message: "",
        });
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const docRef = await addDoc(collection(db, "ContactUs"), {
  //       fullName: formData.fullName,
  //       email: formData.email,
  //       companyName: formData.companyName,
  //       jobTitle: formData.jobTitle,
  //       message: formData.message,
  //       createdAt: serverTimestamp(),
  //     });

  //     console.log("New document written with ID: ", docRef.id);

  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       companyName: "",
  //       jobTitle: "",
  //       message: "",
  //     });

  //     alert("Form submitted successfully!");
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     alert("An error occurred while submitting the form. Please try again.");
  //   }
  // };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-blue-custom-400 pt-[120px] md:pt-44">
      <div className="mx-auto ">
        <div className="text-center md:mb-12 rounded-b-[50px] md:py-10">
          <h1 className="text-[24px] md:text-4xl mb-4">
            <span className="font-playfair">{t("getInTouch")}</span>{" "}
            {t("withUs")}
          </h1>
          <p className="text-sm md:text-lg text-sub-gray">
            {t("justFewClicksAway")}
          </p>
        </div>
        <div className="bg-white py-6 md:py-16 px-2 md:px-5">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-blue-custom-400 px-3 md:px-7 py-3 md:py-7 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-4 mb-2">
                  <div>
                    <input
                      name="fullName"
                      placeholder={t("enterfullname")}
                      className="w-full p-3 rounded-lg focus:border-transparent bg-white"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder={t("enteremail")}
                      className="w-full p-3 rounded-lg focus:border-transparent bg-white"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      name="companyName"
                      type="text"
                      placeholder={t("entercompanyname")}
                      className="w-full p-3 rounded-lg focus:border-transparent bg-white"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      name="jobTitle"
                      type="text"
                      placeholder={t("jobtitle")}
                      className="w-full p-3 rounded-lg focus:border-transparent bg-white"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder={t("entermessage")}
                      className="w-full p-3 rounded-lg focus:border-transparent bg-white min-h-[150px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className={`w-full md:w-1/4 bg-primary-gradient text-white py-3 rounded-full transition-color duration-500 ${
                        !isFormValid || loading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-105"
                      }`}
                      disabled={!isFormValid || loading}
                    >
                      {loading ? t("Loading...") : t("submit")}
                    </button>
                  </div>

                  <label
                    htmlFor="agree"
                    className="text-sm text-sub-gray-500 text-center w-full block"
                  >
                    By submitting, you agree to our
                    <Link
                      href="/terms-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-bold text-blue-custom-600 px-1">
                        Terms and Conditions.
                      </span>
                    </Link>
                    <br />
                    Read our
                    <Link
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-bold text-blue-custom-600 px-1">
                        Privacy Policy
                      </span>
                    </Link>
                  </label>
                </form>
              </div>
            </div>

            <div>
              <div className="space-y-4 px-4 md:px-auto">
                <div className="flex  items-center space-x-3 py-3">
                  <div className=" bg-primary-gradient p-2 rounded-full h-10 w-10">
                    <Image
                      height={50}
                      width={50}
                      alt="uk flag"
                      src={location}
                      className=" h-6 w-5 mx-auto"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg ">United Kingdom</h3>
                  </div>
                </div>

                <p className="text-sub-gray-500">
                  128 City Road London ECIV 2NX, United Kingdom
                </p>
                <div className=" py-3  border-t   border-x-stone-500">
                  <p className="font-semibold mb-3">{t("followUs")}:</p>

                  <div className="flex space-x-4">
                    <a
                      target="_blank"
                      href=" https://www.linkedin.com/company/kreatoors/posts/?feedView=all"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors p-4 bg-blue-custom-400 rounded-full"
                      // className="text-pink-500 hover:text-pink-600"
                    >
                      <Image
                        height={50}
                        width={50}
                        alt="linkedin"
                        src={linkedIn}
                        className=" h-6 w-6 mx-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
