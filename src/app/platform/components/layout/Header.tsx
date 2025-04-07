"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "@/components/extra/Logo";
import { scrollToComponent } from "@/utils/misc";
import Link from "next/link";

export function Header() {
  const { t } = useTranslation("platform");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8">
          <span
            onClick={(e) => scrollToComponent(e, "features")}
            // href="#"
            className="text-gray-800 hover:text-gray-900 cursor-pointer"
          >
            {t("A.Features")}
          </span>
          <span onClick={(e) => scrollToComponent(e, "benefits")} className="text-gray-800 hover:text-gray-900 cursor-pointer">
            {t("Platform Benefits")}
          </span>
          {/* <span
            onClick={(e) => scrollToComponent(e, "mission")}
            className="text-gray-800 hover:text-gray-900 cursor-pointer"
          >
            {t("A.Mission")}
          </span> */}
          <Link href="/" className="text-gray-800 hover:text-gray-900 cursor-pointer">
            {t("Consultancy")}
          </Link>
          <Link href="/about-us" className="text-gray-800 hover:text-gray-900 cursor-pointer">
            {t("About us")}
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
          {/* <button className="text-customGray hover:text-gray-900 font-medium">
            {t("A.Sign up")}
          </button> */}
          <button
            onClick={(e) => scrollToComponent(e, "contact")}
            className="bg-purple-gradient hover:bg-purple-gradient2 text-white px-6 py-3 rounded-full transition-colors"
          >
            {t("A.Get Early Access")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* <div className="ms-2">
          <LanguageSwitcher />
        </div> */}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full h-screen bg-white border-t">
          <div className="px-4 pt-2 pb-3 h-full w-full flex flex-col relative">
            <div className="flex flex-col space-y-7 text-2xl pt-8">
              <div
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToComponent(e, "features");
                }}
                className="block px-3 py-2 text-gray-800 hover:text-gray-900"
              >
                {t("A.Features")}
              </div>
              <div
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToComponent(e, "benefits");
                }}
                className="block px-3 py-2 text-gray-800 hover:text-gray-900"
              >
                {t("A.Benefits")}
              </div>
              <div
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToComponent(e, "mission");
                }}
                className="block px-3 py-2 text-gray-800 hover:text-gray-900"
              >
                {t("A.Mission")}
              </div>

              <a href="https://kreatoors.com/#solutions" target="_blank" className="block px-3 py-2 text-gray-800 hover:text-gray-900">
                {t("Services")}
              </a>

              <a href="https://kreatoors.com/about-us" target="_blank" className="block px-3 py-2 text-gray-800 hover:text-gray-900">
                {t("About us")}
              </a>
            </div>
            <div className="w-[90%] pt-4 space-y-4 absolute bottom-[150px] left-[5%]">
              {/* <button
                className="w-full text-center text-customGray hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("A.Sign up")}
              </button> */}
              <button
                className="w-full bg-purple-gradient hover:bg-purple-gradient2 text-white px-6 py-4 rounded-full transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToComponent(e, "contact");
                }}
              >
                {t("A.Get Early Access")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
