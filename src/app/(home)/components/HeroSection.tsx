"use client";
import React from "react";
// import Button from "../../common/Button";
// import { useNavigate } from "react-router-dom";

import StyleWrapper from "./ImageAnimation";
import { renderText } from "@/utils/misc";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Hero() {
  // const navigate = useNavigate();
  const { t } = useTranslation("home");

  const handleButtonClick = () => {
    const section = document.getElementById("strategic-solutions");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      <section className="py-16 pt-24 md:pt-44 px-4 bg-blue-to-white-gradient ">
        <div className="container mx-auto text-center py-10 ">
          <h2 className="text-4xl md:text-5xl max-w-[390px] md:max-w-2xl mb-4 md:mb-6 mx-auto md:leading-[65px] leading-[57px]">
            {renderText(t("hero.heading"))}
          </h2>

          <p className="text-[15px] md:text-xl text-tsecondary mb-5 md:mb-8 max-w-4xl md:mt-7 mx-auto leading-6 md:leading-8">
            {renderText(t("hero.subheading"))}
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-5 justify-center items-center">
            <Link href={"/platform"} className="min-w-[250px] md:w-auto hover:scale-95 flex items-center gap-x-2 relative">
              <div className="relative z-10 flex items-center gap-x-1 md:gap-x-2  text-white font-medium rounded-full px-6 py-4 bg-primary-gradient">
                <Image src={"/images/ai.svg"} color="white" height={25} width={25} alt="ai" className="w-[18px] h-[17px]" />
                <span className="whitespace-nowrap pr-1 md:pr-0 capitalize font-medium">{renderText(t("hero.primary-button"))}</span>
              </div>
              {/* <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-[#D4D3F9] to-[#F5F2FB] to-100% -m-1.5"></div> */}
            </Link>
            <button
              onClick={handleButtonClick}
              className="min-w-[250px] md:w-auto group p-4 flex items-center hover:scale-95 justify-center px-6 py-4 rounded-full font-medium transition-colors duration-300 relative cursor-pointer"
              style={{
                background: "transparent",
                border: "none",
                padding: "3px",
              }}
            >
              <span
                className="relative z-10 text-[#6C69B1] w-full"
                style={{
                  background: "white",
                  borderRadius: "inherit",
                  padding: "16px 24px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {renderText(t("hero.secondary-button"))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6C69B1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-l from-[#E2E1FF] to-[#B9B6E9]"></div>
            </button>
          </div>
        </div>
      </section>

      <StyleWrapper />
    </>
  );
}
