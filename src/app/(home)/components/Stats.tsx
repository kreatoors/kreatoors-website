"use client";
import { renderText } from "@/utils/misc";
import React from "react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation("home");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const list: any = t("engagement.list", { returnObjects: true });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stats = list.map((item: any) => ({
    multiplier: item.heading,
    description: item.subheading,
  }));

  return (
    <div className="bg-primary-gradient">
      <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 ">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-10 items-center justify-between  ">
          <h2 className="md:max-w-5xl text-[30px] md:text-5xl mb-2 text-white text-center">{renderText(t("engagement.heading"))}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-8 ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-start bg-white p-3 md:p-6 rounded-tr-3xl space-y-4 rounded-xl">
                <div className="text-transparent bg-clip-text bg-primary-gradient text-4xl md:text-5xl font-normal mb-4">{stat.multiplier}</div>
                <p className="text-sub-gray text-md text-start">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
