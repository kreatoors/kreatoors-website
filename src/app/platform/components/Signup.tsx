/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { renderText } from "@/utils/misc";
// import { axiosInstance } from "@/app/utils/config";

const SignUpSection = () => {
  const { t } = useTranslation("platform");

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (loading) return;

    // Check if email is from an invalid domain
    const invalidDomains = [
      // "gmail.com",
      "yahoo.com",
      "icloud.com",
      "ymail.com",
      // "outlook.com",
      "hotmail.com",
      "aol.com",
      "protonmail.com",
      "zohomail.com",
      "yandex.com",
      "mail.com",
      "gmx.com",
      "tutanota.com",
      "zoho.com",
      "fastmail.com",
      "comcast.net",
      "att.net",
      "msn.com",
      "live.com",
      "hushmail.com",
    ];
    const emailDomain = email.split("@")[1];

    if (invalidDomains.includes(emailDomain)) {
      toast.error("Please use a professional email address.");
      return;
    }

    if (!email || !firstName || !lastName || !role) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    setStatus("");

    // try {
    //   const response = await axiosInstance.post(
    //     `/mailchimp/waitlist`,
    //     {
    //       email,
    //       firstName,
    //       lastName,
    //       role,
    //     },
    //   );
    //   console.log(response);

    //   if (response.status === 200) {
    //     toast.success("Thank you for subscribing!");
    //     setEmail("");
    //     setRole("");
    //     setFirstName("");
    //     setLastName("");
    //   } else {
    //     // handle error
    //     toast.error("An error occurred. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Subscription error:", error);
    //   toast.error(error?.response?.data?.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <section id="contact" className="bg-very-light-purple w-full mx-auto p-4 py-6 md:px-4 md:py-10">
        <div className="rounded-xl max-w-4xl mx-auto md:p-10 space-y-20">
          <h2 className="text-[25px] sm:text-[34px] lg:text-[42px] font-medium mx-auto text-center mb-8">
            {/* <div className="hidden md:block leading-[60px] ">
              {renderText(t("J.heading"))}
            </div> */}
            <div className=" leading-[60px] ">{renderText(t("J.heading2"))}</div>
            {/* <span className="playfair">{t("J.subtext")}</span> */}
          </h2>

          <form className="space-y-12">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <label htmlFor="fname" className="block text-sm text-black font-semibold mb-1">
                  {t("First Name")}
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder={t("First Name")}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white"
                  required
                />
              </div>
              <div className="w-1/2 px-2">
                <label htmlFor="lname" className="block text-sm text-black font-semibold mb-1">
                  {t("Last Name")}
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="lname"
                  name="lastName"
                  placeholder={t("Last Name")}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-black font-semibold mb-1">
                {t("G.Email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("G.Eplaceholder")}
                className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm text-black font-semibold mb-1">
                {t("G.Role")}
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Your Role</option>
                <option value="Individual Contributor">Individual Contributor</option>
                <option value="Manager">Manager</option>
                <option value="Senior Leader (Director/VP/C-Suite)">Senior Leader (Director/VP/C-Suite)</option>
                <option value="HR Professional">HR Professional</option>
                <option value="Marketing Professional">Marketing Professional</option>
                <option value="Communications Professional">Communications Professional</option>
                <option value="Freelancer/Consultant">Freelancer/Consultant</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <label htmlFor="agree" className="text-sm text-sub-gray-500 text-center w-full block">
              By submitting, you agree to our
              <a href="/terms-conditions" target="_blank">
                <span className="font-bold text-blue-custom-600 px-1">Terms and Conditions.</span>
              </a>
              <br />
              Read our
              <a href="/privacy" target="_blank">
                <span className="font-bold text-blue-custom-600 px-1">Privacy Policy</span>
              </a>
            </label>

            {/* Centered Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-purple-gradient hover:bg-blue-custom-700 text-white py-4 px-8 rounded-full hover:opacity-90 transition-opacity"
              >
                {loading ? renderText(t("Loading...")) : renderText(t("G.button"))}
              </button>
            </div>
          </form>
          <div className="text-center">
            {status === "success" && <p className="text-black">Thank you for subscribing!</p>}
            {status === "error" && <p className="text-red-400">{errorMessage}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpSection;
