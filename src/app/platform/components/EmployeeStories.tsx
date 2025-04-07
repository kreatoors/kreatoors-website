/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

const EmployeeStories = () => {
  const { t } = useTranslation("platform");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections: any = t("D.sections", { returnObjects: true });

  const [visibleSections, setVisibleSections] = useState<any>([]);
  const sectionRefs = useRef<any>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref: any, index: number) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            setVisibleSections((prev: any) => [...new Set([...prev, index])]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="features"
      className="max-w-7xl mx-auto md:py-16 pt-[7em] pb-[4em] flex flex-col justify-center space-y-10 md:space-y-20 px-4 mt-[1rem] lg:mt-[5rem]"
    >
      <h2 className="text-[25px] sm:text-[34px] font-medium md:text-3xl lg:text-[42px] mx-auto text-center mb-0 text-black">{t("D.heading")}</h2>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {sections.map((section: any, index: number) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el) as any}
          className={`flex justify-center gap-4 flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 transition-opacity duration-700 ease-out ${
            visibleSections.includes(index) ? "opacity-100" : "opacity-0"
          }
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            `}
        >
          <div
            className={`relative w-full md:w-1/2 transition-transform duration-700 ease-out transform ${
              visibleSections.includes(index) ? "translate-y-0 opacity-100" : "translate-y-[-50px] opacity-0"
            }`}
          >
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={100}
              quality={100}
              className="hover:translate-x-[5px] transform duration-200 rounded-lg object-contain"
            />
          </div>
          <div
            className={`w-full md:w-1/2 space-y-4 transition-transform duration-700 ease-out transform ${
              visibleSections.includes(index) ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"
            }`}
          >
            <h2 className="text-2xl md:text-2xl font-medium text-black max-w-md">{section.title}</h2>
            <p className="text-gray-900">{section.subheading}</p>

            <ul className="space-y-2">
              {section.description.map((desc: any, idx: number) => (
                <li key={idx} className="flex gap-4 text-gray-900">
                  <Image height={20} width={20} src="/images/check.svg" className="h-5 w-5" alt="check icon" />
                  {desc}
                </li>
              ))}
            </ul>
            {section.buttonText && (
              <button className="mt-4 px-4 py-2 bg-btn-gradient text-white rounded-full shadow-md hover:bg-pink-600">{section.buttonText}</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStories;
