"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { useTranslation } from "react-i18next";
import { SERVICES_ICONS } from "@/assets/icons/ServicesIcons";
import { useRouter } from "next/navigation";
import { renderText } from "@/utils/misc";
import { ArrowUpRight } from "lucide-react";

const BrandSolutionsLanding = ({ isPage }: { isPage: boolean }) => {
  const router = useRouter();
  const { t } = useTranslation("home");

  // Fetching services from the JSON
  const services: any = t("services-section.services", { returnObjects: true });

  // Mapping the services to the solutions array
  const icons = [
    SERVICES_ICONS.services["1"],
    SERVICES_ICONS.services["2"],
    SERVICES_ICONS.services["3"],
    SERVICES_ICONS.services["4"],
    SERVICES_ICONS.services["5"],
    SERVICES_ICONS.services["6"],
  ];

  const solutions = services.map((service: any, index: any) => ({
    id: service.id,
    slug: service.slug,
    title: service.heading,
    buttonText: service.subheading,
    icon: icons[index], // Use the predefined icon array
  }));

  const handleServiceClick = (slug: string) => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    router.push(`/services/${slug}`);
  };

  return (
    <div className={`py-5 md:py-20 ${isPage === true ? "pb-0" : "bg-blue-custom-400 px-4"} md:px-0 w-full`} id="strategic-solutions">
      <div className="w-full">
        <div className="text-center mb-5 md:mb-16">
          <div>
            <h2 className="hidden md:block text-4xl md:text-5xl mb-6 mx-auto text-center">
              {renderText(t("services-section.heading"))}
              {!isPage && <span className="inline-block md:block mt-3 text-4xl md:text-2xl">{renderText(t("services-section.subheading"))}</span>}
            </h2>
            <h2 className="block md:hidden text-[29px] md:text-5xl mx-auto text-center">
              {isPage ? (
                <div className="mt-[100px] text-[40px]">{renderText(t("services-section.heading"))}</div>
              ) : (
                renderText(t("services-section.heading2"))
              )}
            </h2>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className={`${isPage === true && "bg-white md:pb-12 px-4"} w-full`}>
          <div className={`max-w-6xl mx-auto ${isPage === true && "py-4 md:pt-[70px]"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-5 gap-4">
              {solutions.map((solution: any) => {
                const formattedTitle = true
                  ? solution.title.split("\n").map((part: any, index: any) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <>
                            {part} <br />
                          </>
                        ) : (
                          part + " "
                        )}
                      </React.Fragment>
                    ))
                  : solution.title;
                return (
                  <div
                    key={solution.id}
                    onClick={() => handleServiceClick(solution.slug)}
                    className="relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out group"
                  >
                    {/* Content */}
                    <div
                      className={`relative p-4 h-full flex flex-col justify-between z-10 transition duration-500 ease-in-out group-hover:bg-primary-gradient ${
                        isPage === true ? "bg-[#f2f2f2]" : "bg-white"
                      }`}
                    >
                      {/* <div className="absolute inset-0 bg-white transition-opacity duration-500 ease-in-out" /> */}
                      {/* <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" /> */}

                      <div className="h-2/3 flex items-center md:items-start md:flex-col">
                        <div
                          className={`bg-blue-custom-400 ${
                            isPage !== true ? "bg-[#f2f2f2]" : "bg-white"
                          } md:p-2 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:scale-105`}
                        >
                          {solution.icon}
                          {/* <img
                        src={solution.icon}
                        alt={solution.icon}
                        className="w-6 h-6 transition-transform duration-300 ease-in-out"
                      /> */}
                        </div>
                        <h3 className="text-[18px] ml-3 md:ml-0 md:my-6 font-medium text-black transition-colors duration-100 ease-in-out group-hover:text-white">
                          <span className="block md:hidden">{solution.title}</span>
                          <span className="hidden md:block">{formattedTitle}</span>
                        </h3>
                      </div>
                      <div className="flex justify-between items-center mt-4 md:mt-0">
                        <p className="font-semibold w-4/5 text-[16px]  text-blue-custom-700 transition-colors duration-100 ease-in-out group-hover:text-white flex items-center gap-2">
                          {solution.buttonText}
                        </p>
                        <div className="bg-blue-custom-800 p-2 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transform translate-x-0 rotate-[45deg] transition-all duration-500 ease-in-out group-hover:rotate-0">
                          <ArrowUpRight size={24} strokeWidth={1} color="#ffffff" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSolutionsLanding;
