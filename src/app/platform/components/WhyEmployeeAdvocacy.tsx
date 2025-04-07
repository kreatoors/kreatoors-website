"use client";
import { renderText } from "@/utils/misc";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function WhyEmployeeAdvocacy() {
  const { t } = useTranslation("platform");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blocks: any = t("L.sections", { returnObjects: true });

  return (
    <section
      id="#"
      className="w-full bg-[#F8F6FF] md:py-16 pt-[7em] pb-[4em] flex flex-col justify-center space-y-10 md:space-y-20 px-4 mt-[3rem] lg:mt-[30rem]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[25px] sm:text-[34px] font-medium md:text-3xl lg:text-[42px] mx-auto text-center mb-[70px] text-black max-w-4xl">
          <span className="lg:leading-[60px]">{renderText(t("L.heading"))}</span>
        </h2>
        <div className="mb-[70px] grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-[70px] w-full">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {blocks.map((block: any, index: number) => (
            <div key={index} className="w-full group hover:scale-[1.02] py-[49px] px-6 bg-white rounded-tr-[56px] rounded-l-lg rounded-b-lg">
              <Image src={block.icon} alt={block.title} width={60} height={60} className="mb-9 h-[60px] w-[60px] object-contain" />
              <h2 className="text-xl lg:text-2xl mb-3">{block.title}</h2>
              <p className="text-base lg:text-xl flex flex-col">
                <span className="text-[#5B5A6C]">{block.text}</span>
                {/* <span className='text-[#6A67AF]'>{block.subtext}</span> */}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {/* <button
                    onClick={(e) => scrollToComponent(e, "contact")}
                    className="group hover:scale-[1.01] duration-200 bg-purple-gradient text-white px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full flex items-center gap-2"
                    >
                    {t("L.button")}
                    <ArrowRight className="group-hover:translate-x-[5px] transform duration-200" />
                </button> */}
        </div>
      </div>
    </section>
  );
}
