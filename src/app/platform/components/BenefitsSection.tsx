// components/Benefits.js
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { renderText } from "@/utils/misc";

export default function Benefits() {
  const { t } = useTranslation("platform");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const points: any = t("E.points", { returnObjects: true });

  return (
    <section
      id="benefits"
      className="bg-primary-gradient2 rounded-t-[40px] lg:rounded-t-[60px] 2xl:rounded-t-[124px] py-20 mt-20 2xl:px-0 px-4 md:px-16 lg:px-12"
    >
      <div className="max-w-7xl mx-auto py-20 px-6 lg:px-16 bg-purple-gradient rounded-[40px]">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <h2 className="text-2xl lg:text-[28px] font-normal text-[#D2D0F3] text-center mb-3">{t("E.heading")}</h2>
          <p className="text-[25px] sm:text-[34px] lg:text-[42px] font-medium text-center text-white max-w-2xl mb-16">
            <span className="leading[40px] lg:leading-[60px]">{renderText(t("E.subheading"))}</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {points.map((point: any, index: string) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl ">
                <Image src={point.icon} alt={`Icon for ${point.text}`} width={64} height={64} className="mb-6 h-10 w-10" />
                {/* <h2 className="font-semibold text-gray-600 text-md mb-2">
                  {point.title}
                </h2> */}
                <p className="text-[#667085] text-lg font-normal">{point.text}</p>
              </div>
            ))}
          </div>
          {/* <button
            onClick={(e) => scrollToComponent(e, "contact")}
            className="mx-auto bg-blue-custom-500 hover:scale-105 text-blue-custom-600 px-6 py-2 rounded-full transition-colors"
          >
            {t("A.Get Early Access")}
          </button> */}
        </div>
      </div>
    </section>
  );
}
