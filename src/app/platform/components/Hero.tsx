"use client";

import { renderText, scrollToComponent } from "@/utils/misc";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("platform");

  return (
    <section className="w-full h-full max-w-7xl mx-auto lg:px-2.5 ">
      <div className="lg:rounded-[40px] bg-[url(/images/platform/heroBackground.svg)] pt-10 lg:pt-0 min-h-screen md:min-h-[300px] lg:h-[700px] xl:min-h-full max-h-full mt-14 lg:mt-[120px]">
      <div className="text-center lg:pt-[60px] lg:px-0 px-3">
      <h1 className="down-slide-in-animation text-[25px] sm:text-[34px] font-[500] md:tracking-auto leading-[48px] lg:leading-[58px] sm:leading-[58px] md:text-3xl lg:text-[42px] tracking-[-0.42px] text-black mb-0 sm:mb-6 max-w-[42rem] mx-auto">
        {t("B.heading")}{" "}
        <span className="md:block">{t("B.subheading")}</span>{" "}
        <span className="block my-3">{t("B.subheading2")}</span>
      </h1>

      <p className="down-slide-in-animation font-normal text-[14px] sm:text-[14px] md:text-lg text-[#667085] mb-3 sm:mb-8 mx-auto">
        {renderText(t("B.paragraph"))}
      </p>

      <p className="down-slide-in-animation font-normal text-[14px] sm:text-[14px] md:text-lg text-[#667085] mb-2 sm:mb-3 mx-auto">
        Join 500+ businesses leveraging employee stories at scale.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={(e) => scrollToComponent(e, "contact")}
          className="bg-primary-gradient hover:bg-purple-gradient2 text-white up-slide-in-animation duration-200 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full transition-colors"
        >
          Get Early Access
        </button>
        
      </div>
    </div>

<div className="relative flex items-center justify-center mt-10 lg:mt-20 md:max-w-[50rem] mx-auto lg:max-w-full overflow-hidden">
          <Image
            height={208}
            width={304}
            src="/images/platform/hero/botright.svg"
            alt="Bottom Right"
         className="hidden md:block left-slide-in-animation absolute top-0 lg:top-[1%] xl:top-[-2%] left-[2%] lg:w-[330px] xl:w-[400px] h-[120px] xl:h-[160px] object-contain z-10"
          />
          <Image
            height={840}
            width={416}
            src="/images/platform/hero/phoneMock.svg"
            alt="phone mockup"
            className="left-slide-in-animation w-[280px] lg:w-[330px] h-auto object-contain z-10"
          />
          <Image
            height={151}
            width={406}
            src="/images/platform/hero/bot-left.png"
            alt="Bottom Left"
            className="hidden md:block right-slide-in-animation absolute top-0 lg:top-[1%] right-1 lg:right-[-1%] xl:right-[4%] lg:w-[330px] h-[180px] lg:h-[180px] xl:h-[200px] object-contain z-10"
          />
          <Image
            height={215}
            width={409}
            src="/images/platform/hero/careerPotential.svg"
            alt="Bottom Left"
            className="hidden md:block right-slide-in-animation absolute bottom-[27%] lg:bottom-[25%] right-[14.5%] lg:right-[17%] xl:right-[24%] h-[180px] lg:w-[340px] lg:h-[250px] object-contain z-10"
          />
          <Image
            height={252}
            width={232}
            src="/images/platform/hero/linkedMetric.svg"
            alt="Bottom Right"
            className="hidden md:block left-slide-in-animation absolute bottom-[3%] xl:bottom-[5%] left-0 xl:left-[5%] h-[200px] lg:w-[400px] xl:w-[450px] lg:h-[200px] object-contain z-10"
          />
          <Image
            height={176}
            width={262}
            src="/images/platform/hero/engagements.svg"
            alt="Bottom Left"
            className="hidden md:block right-slide-in-animation absolute bottom-[1%] xl:bottom-[-2%] right-[1%] lg:w-[300px] xl:w-[400px] h-[150px] lg:h-[180px] xl:h-[220px] object-contain z-10"
          />
        </div>
      </div>
    </section>
  );
}