/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { renderText } from "@/utils/misc";

const ComingSoonSmallSection = () => {
  const { t } = useTranslation("home");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("api/newsletter", {
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
        toast.error("Something went wrong!");
        setErrorMessage("Something went wrong!");
        setStatus("error");
      }
    } catch (error: any) {
      toast.error("Something went wrong!");
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
      className={`w-full bg-cta-gradient md:py-20 px-4 md:px-8 rounded-t-[50px]`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-primary-gradient rounded-3xl p-8 md:p-12 flex md:gap-10">
          <div className="max-w-4xl mx-auto flex flex-col text-center justify-center w-full">
            <h2 className="text-2xl md:text-[34px] md:leading-[50px] font-medium text-white w-full">
              {renderText(t("coming-soon.heading"))}
            </h2>

            <p className="text-white/90 text-base md:text-lg my-8 max-w-xl mx-auto text-center">
              {renderText(t("coming-soon.subheading"))}
            </p>
            {status === "success" && (
              <p className="text-white">Thank you for subscribing!</p>
            )}
            {status === "error" && (
              <p className="text-red-300">{errorMessage}</p>
            )}
            <div className="mb-2 flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row  w-full md:min-w-[500px] justify-between mt-10 items-center gap-4 mb-4 sm:mb-0 md:bg-[#9794D8] px-2 pl-4 py-2 rounded-full"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("coming-soon.waitlist")}
                  className="bg-[#9794D8] px-4 py-2 md:p-2 w-full md:w-auto border-white md:border-0 md:bg-transparent flex flex-1 text-white placeholder-white outline-none border-0 rounded-full focus:ring-0 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white w-auto hover:bg-gray-200 text-blue-custom-700 px-6 py-2 rounded-full md:font-semibold transition-colors"
                >
                  {loading
                    ? renderText(t("Loading..."))
                    : renderText(t("join"))}
                </button>
              </form>
            </div>
            {/* {status === "success" && (
              <p className="text-white">Thank you for subscribing!</p>
            )}
            {status === "error" && (
              <p className="text-red-400">{errorMessage}</p>
            )} */}
          </div>
          {/* 
          <div className="md:w-72 hidden md:flex flex-col gap-6 pt-10">
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
  );
};

export default ComingSoonSmallSection;
