/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useTranslation } from "react-i18next";

import { renderText } from "@/utils/misc";
import Image from "next/image";

const ComingSoonSection = () => {
  const { t } = useTranslation("home");

 

  return (
    <div>
      <div className="mx-auto">
        <div className="relative bg-primary-gradient p-2 md:p-8 md:p-12">
          <div className="relative mx-auto max-w-7xl">
            <div className="img1 md:absolute top-10 left-0 mb-2 md:mb-0">
              <Image
                src="/images/comingsoon.png"
                width={1432}
                height={759}
                className="w-[200px] md:w-[300px]"
                alt="Img1"
              />
            </div>
            <div className="img2 absolute top-10 right-0 hidden md:block">
              <Image
                src={"/images/comingsoon2.png"}
                height={1090}
                width={1505}
                className="w-[250px]"
                alt="Img1"
              />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex md:gap-10">
            <div className="w-full p-2 md:px-4 flex flex-col justify-center text-center gap-4">
              <div className="max-w-xl mx-auto space-y-4">
                <h2 className="text-[25px] md:text-[28px] text-white tracking-wide leading-[35px] md:pt-12 text-center">
                  {renderText(t("coming-soon.heading"))}
                </h2>
              </div>

              <div className="w-full justify-center flex flex-col-reverse gap-6 lg:gap-10 items-center">
                <div className="phone-apps">
                  <Image
                    src="/images/phoneAppsScreenshot.png"
                    width={1211}
                    height={731}
                    alt="phone-apps-screenshots"
                  />
                </div>

              <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
