"use client";

import { scrollToComponent } from "@/utils/misc";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CTASection1() {
  const { t } = useTranslation("platform");

  return (
    <div className="w-full bg-white mt-[1rem] lg:mt-[5rem]">
      <div className="max-w-7xl mx-auto p-5">
        <div className="px-10 py-14 rounded-[40px] bg-primary-gradient flex flex-col items-center">
          <h2 className="font-normal text-2xl lg:text-[48px] md:text-4xl text-center text-white px-4 mb-5">{t("K.heading")}</h2>
          <p className="text-base md:text-xl text-[#D2D0F3] mb-[50px] text-center max-w-3xl">{t("K.heading2")}</p>

          <button
            onClick={(e) => scrollToComponent(e, "contact")}
            className="group hover:bg-cta-gradient bg-white text-blue-custom-600 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full flex items-center gap-2"
          >
            {t("K.button")}
            <ArrowRight className="group-hover:translate-x-[5px] transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
