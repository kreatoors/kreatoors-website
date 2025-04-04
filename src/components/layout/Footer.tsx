"use client";

import Link from "next/link";

import { useTranslation } from "react-i18next";
import { renderText, scrollToComponent } from "@/utils/misc";
import Image from "next/image";
import Logo from "../extra/Logo";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-blue-to-white-gradient px-4 pt-12 pb-7">
      <div className="md:text-md max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo and Social Links */}
          <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:space-y-8">
            <Link scroll={true} href="/" className="text-2xl font-bold text-[#FF8FAB]">
              {/* <img
                src="/images/small-logo.png"
                className="block md:hidden h-16"
                alt="Logo"
              /> */}
              {/* <img
                src="/images/Frame 1597885004.png"
                className="md:h-10 hidden md:block"
                alt="Logo"
              /> */}
              <div className="h-auto w-auto items-end cursor-pointer flex">
                <Logo />
              </div>
            </Link>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/kreatoors/posts/?feedView=all" target="_blank" aria-label="LinkedIn">
                <div className="w-16 h-16 md:w-12 md:h-12 shadow-lg rounded-full bg-white flex items-center justify-center">
                  <Image width={25} height={25} src="/images/linkedIn.svg" className="flex items-center justify-center" alt="LinkedIn" />
                </div>
              </a>

              {/* <a href="/#" target="_blank" aria-label="LinkedIn">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/images/insta.png"
                    className="h-5 w-5"
                    alt="LinkedIn"
                  />
                </div>
              </a>

              <a href="/#" target="_blank" aria-label="LinkedIn">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/images/twitter.png"
                    className="h-5 w-5"
                    alt="LinkedIn"
                  />
                </div>
              </a> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-20">
            <div>
              <h3 className="font-semibold text-black mb-4">{t("H.heading1")}</h3>
              <ul className="grid grid-cols-3 md:block md:space-y-3">
                <li>
                  <Link href={"/platform/#features"} className="cursor-pointer text-customGray hover:text-gray-700">
                    {t("H.title1.point2")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/platform/#benefits"}
                    onClick={(e) => scrollToComponent(e, "benefits")}
                    className="cursor-pointer text-customGray hover:text-gray-700"
                  >
                    {t("H.title1.point3")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="cursor-pointer text-customGray hover:text-gray-700">
                    {t("H.title1.point1")}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-customGray hover:text-gray-700">
                    {t("H.title1.point4")}
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-customGray hover:text-gray-700">
                    {t("H.title1.point5")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-4">{t("H.heading2")}</h3>
              <ul className="space-y-3">
                <li>
                  <Link scroll={true} href="/privacy" target="_blank" className="cursor-pointer text-customGray hover:text-gray-700">
                    {t("H.title2")}
                  </Link>
                </li>
                <li>
                  <Link scroll={true} href="/terms-conditions" target="_blank" className="cursor-pointer text-customGray hover:text-gray-700">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-4">{t("H.heading3")}</h3>
              <ul className="space-y-3 text-customGray">
                <li className="font-semibold">{t("H.title3.point1")}</li>
                <li className="hidden md:block">{renderText(t("H.title3.point2"))}</li>
                <li className="block md:hidden">{renderText(t("H.title3.point3"))}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-customGray flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:mt-16 pt-8 border-t border-gray-200">
          {/* <a href={`mail:${t("I.heading")}`} className="">
            {t("I.heading")}
          </a> */}
          <p className="">{t("paragraph")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
