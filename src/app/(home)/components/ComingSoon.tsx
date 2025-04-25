/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { FormEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { renderText } from "@/utils/misc";
import Image from "next/image";

const ComingSoonSection = () => {
  const { t } = useTranslation("home");

  const [email, setEmail] = useState("");

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.kreatoors.com/mailchimp/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      console.log(response);

      if (response.status === 200) {
        toast.success("Thank you for subscribing!");
        // setStatus("success");
        setEmail("");
      } else {
        // toast.error("Something went wrong!");
        setErrorMessage("Something went wrong!");
        setStatus("error");
      }
    } catch (error: any) {
      console.error("Subscription error:", error);
      setErrorMessage(error?.response?.data?.message);
      // toast.error(error?.response?.data?.message);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
    // className={`w-full ${isAboutUs ? "bg-cta-gradient" : "bg-white"} py-20`}
    >
      <div className="mx-auto">
        <div className="relative bg-primary-gradient p-2 md:p-8 md:p-12">
          <div className="relative mx-auto max-w-7xl">
            <div className="img1 md:absolute top-10 left-0 mb-2 md:mb-0">
              <Image src="/images/comingsoon.png" width={1432} height={759} className="w-[200px] md:w-[300px]" alt="Img1" />
            </div>
            <div className="img2 absolute top-10 right-0 hidden md:block">
              <Image src={"/images/comingsoon2.png"} height={1090} width={1505} className="w-[250px]" alt="Img1" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex md:gap-10">
            <div className="w-full p-2 md:px-4 flex flex-col justify-center text-center gap-4">
              <div className="max-w-xl mx-auto space-y-4">
                <h2 className="text-[25px] md:text-[28px] text-white tracking-wide leading-[35px] md:pt-12 text-center">
                  {renderText(t("coming-soon.heading"))}
                </h2>

                {/* <p className="text-white/90 text-base md:text-lg">
                  {renderText(t("comming-soon.subheading"))}
                </p> */}
              </div>

              <div className="w-full justify-center flex flex-col-reverse gap-6 lg:gap-10 items-center">
                <div className="phone-apps">
                  <Image src="/images/phoneAppsScreenshot.png" width={1211} height={731} alt="phone-apps-screenshots" />
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row  w-full md:min-w-[500px] justify-between md:w-2/4 mt-10 items-center gap-4 sm:mb-0 md:bg-[#9794D8] px-2 pl-4 py-2 rounded-full"
                >
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("coming-soon.waitlist")}
                    className="bg-[#9794D8] px-4 py-2 md:p-2 rouneded-lg w-full md:w-auto border-white md:border-0 md:bg-transparent flex flex-1 text-white placeholder-white outline-none border-0 rounded-full focus:ring-0 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white w-auto hover:bg-gray-200 text-blue-custom-700 px-6 py-2 rounded-full md:font-semibold transition-colors"
                  >
                    {loading ? renderText(t("Loading...")) : renderText(t("join"))}
                  </button>
                </form>
                {status === "success" && <p className="text-white">Thank you for subscribing!</p>}
                {status === "error" && <p className="text-white">{errorMessage}</p>}
              </div>
            </div>

            {/* <div className="md:w-72 hidden md:flex flex-col gap-6 pt-10">
              <img
                src={RightArrow}
                alt="Decorative arrow"
                className="w-40 opacity-60 animate-float-curved animate-draw-attention"
                style={{
                  transformOrigin: "center",
                }}
              />
              <div className="flex  transition-all duration-700 ease-out hover:scale-105  items-center gap-2 w-auto ml-20 font-semibold text-blue-custom-700 bg-white px-4 py-3 rounded-full">
                <span className="">{renderText(t("check"))}</span>
                <a
                  href="https://kreatoors.ai"
                  className="underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kreatoors.ai
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
