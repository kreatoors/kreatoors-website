"use client";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { renderText } from "@/utils/misc";
import Image from "next/image";

interface SectionProps {
  title: string | ReactElement[];
  description: string | ReactElement[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  impacts: string[] | any;
  image: string;
  reverse: boolean;
  bgColor: string;
}

const Section = ({ title, description, impacts, image, reverse, bgColor }: SectionProps) => {
  return (
    <div
      className={`flex ${!reverse ? "flex-col-reverse" : "flex-col"}  ${
        reverse ? "md:flex-row" : "md:flex-row-reverse"
      } justify-evenly items-center md:p-5 gap-5 ${bgColor} rounded-2xl`}
    >
      {/* {reverse && (
        <div className="lg:w-2/5 order-2 md:order-1">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full object-cover p-3 md:p-10 lg:p-0"
          />
        </div>
      )} */}

      <div className={` ${"lg:w-3/5 p-3 md:p-0 lg:p-0"} `}>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="space-y-2">
          <h3 className="text-blue-custom-600 font-medium mb-3">Impact:</h3>
          <ul className="space-y-3 text-gray-700">
            {impacts.map((impact: string, index: number) => (
              <li key={index} className="flex  ">
                <span className="text-sub-gray mr-2">•</span>
                <p className="text-sub-gray-500">{impact}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:w-2/5">
        <Image src={image} alt={title as string} width={1944} height={1176} className="rounded-lg w-full h-full object-cover p-3 md:p-0" />
      </div>
    </div>
  );
};

const EGCSection = () => {
  const { t } = useTranslation("home");

  return (
    <>
      {/* EGC Section */}
      <div className="w-full bg-blue-custom-400 py-10 md:py-20">
        <section className="max-w-6xl rounded-2xl px-5 lg:px-8 mx-auto">
          <h2 className=" text-3xl md:text-3xl lg:text-4xl mb-5 md:mb-12">{renderText(t("EGC.heading"))}</h2>
          <Section
            title={renderText(t("EGC.heading"))}
            description={renderText(t("EGC.subheading"))}
            impacts={t("EGC.impact.points", { returnObjects: true })}
            image="/images/egc.png"
            bgColor="bg-white"
            reverse={true}
          />
        </section>
      </div>

      {/* Corporate Influencing Section */}
      <div className="bg-white py-20">
        <section className="rounded-2xl px-5 md:px-8 lg:px-8 max-w-6xl mx-auto">
          <h2 className=" text-3xl md:text-3xl lg:text-4xl mb-5 md:mb-12">{renderText(t("corporate-influencing.heading"))}</h2>
          <Section
            title={renderText(t("corporate-influencing.heading"))}
            description={renderText(t("corporate-influencing.subheading"))}
            impacts={t("corporate-influencing.impact.points", {
              returnObjects: true,
            })}
            image={"/images/egc2.png"}
            bgColor="bg-blue-custom-400"
            reverse={false}
          />
        </section>
      </div>
    </>
  );
};

export default EGCSection;
