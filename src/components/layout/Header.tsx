"use client";
// import Button from "./Button";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import { SERVICES_ICONS } from "@/assets/icons/ServicesIcons";
import Logo from "../extra/Logo";

import Link from "next/link";
import { usePathname } from "next/navigation";

const servicesDropdownItems = [
  {
    name: "Corporate Influencing",
    nameDe: "Unternehmens-beeinflussung",
    path: "/services/corporate-influencing",
    icon: SERVICES_ICONS.services["1"],
  },
  {
    name: "Employer Brand Development",
    nameDe: "Mitarbeiter-Markenentwicklung",
    path: "/services/employee-brand-development",
    icon: SERVICES_ICONS.services["2"],
  },
  {
    name: "Employee Content Creation",
    nameDe: "Mitarbeiter-Inhaltserstellung",
    path: "/services/employer-content-creation",
    icon: SERVICES_ICONS.services["3"],
  },
  {
    name: "Internal Communications & Culture",
    nameDe: "Interne Kommunikation & Kultur",
    path: "/services/internal-communications-culture",
    icon: SERVICES_ICONS.services["4"],
  },
  {
    name: "Advocacy & Content Governance",
    nameDe: "Befürwortung & Inhaltsgovernance",
    path: "/services/advocacy-content-governance",
    icon: SERVICES_ICONS.services["5"],
  },
  {
    name: "Community Building & Management",
    nameDe: "Gemeinschaftsaufbau & -management",
    path: "/services/community-building-management",
    icon: SERVICES_ICONS.services["6"],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation("navbar");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { name: t("home"), path: "/" },
    {
      name: "Platform",
      path: "https://kreatoors.ai/platform",
    },
    { name: t("services"), path: "#" },
    {
      name: "Community",
      path: "/community",
    },
    { name: t("aboutUs"), path: "/about-us" },
    { name: t("blog"), path: "/blog" },
    { name: t("Request Demo"), path: "https://calendly.com/coachingwitharzo/free-discovery-call" },
  ];
  

  const handleServiceClick = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
    return false;
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky z-50 top-5 md:top-10 left-0 right-0 z-50 md:max-w-[87%] mx-2 md:mx-10 lg:mx-10 xl:mx-auto  " ref={menuRef}>
      <nav className="z-[999] relative flex items-center justify-between p-2 md:py-5 md:px-5 bg-white rounded-full ">
        <Logo />
        <ul className="hidden xl:flex items-center gap-8 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">


          {menuItems.map((item, index) =>
            item.name === t("services") ? (
              <li key={index} className="relative" onMouseEnter={() => setIsServicesHovered(true)} onMouseLeave={() => setIsServicesHovered(false)}>
                <button
                  onClick={() => handleServiceClick}
                  className={`text-lg font-normal text-sub-gray hover:text-[#6B5B95] md:text-base lg:text-lg flex items-center space-x-1 ${
                    pathname.startsWith("/services") ? "text-transparent bg-clip-text bg-primary-gradient font-semibold" : ""
                  }`}
                >
                  <span className={`flex-1 ${pathname.startsWith("/services") ? "text-transparent" : "text-gray-900 hover:text-[#6B5B95]"}`}>
                    {item.name}
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${isServicesHovered ? "rotate-180" : ""} ${
                      pathname.startsWith("/services") ? "text-[#6B5B95]" : "text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesHovered && (
                  <div className="absolute top-full md:-left-40 w-[35rem] bg-white rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-3">
                    {servicesDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        className={` flex items-center space-x-3 px-4 py-1.5 text-sm transition-colors ${
                          pathname === subItem.path ? "text-[#6B5B95] bg-purple-50" : "text-gray-700 hover:bg-purple-50 hover:text-[#6B5B95]"
                        }`}
                      >
                        <div className="bg-blue-custom-400 p-3 rounded-full">{subItem.icon}</div>
                        <span className="font-normal max-w-40 text-sub-gray break-words leading-snug">
  {i18n.language === "de" ? subItem.nameDe : subItem.name}
</span>

                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )  : item.name === t("blog") ? (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` text-lg font-normal ${
                    pathname.includes(item.path)
                      ? "text-transparent bg-clip-text bg-primary-gradient font-semibold md:text-base lg:text-lg text-center"
                      : "text-sub-gray hover:text-[#6B5B95] md:text-base lg:text-lg text-center"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` text-lg font-normal ${
                    pathname === item.path
                      ? "text-transparent bg-clip-text bg-primary-gradient font-semibold md:text-base lg:text-lg text-center "
                      : "text-sub-gray hover:text-[#6B5B95] md:text-base lg:text-lg text-center whitespace-nowrap"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
              
            )
          )}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden xl:block">
            <Link
              href="https://calendly.com/coachingwitharzo/free-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize bg-primary-gradient text-white px-6 py-3 rounded-full transition-colors duration-300 hover:scale-95 inline-block font-medium"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* <div className="hidden xl:block">
            <LanguageSwitcher />
          </div> */}
        </div>

        <div className="xl:hidden flex items-center gap-2">
          <button className="text-gray-600 p-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* <div className="xl:hidden block">
            <LanguageSwitcher />
          </div> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden overflow-auto pt-[100px] w-full h-screen bg-white fixed top-0 left-0 z-[19] rounded-b-2xl">
          <div className="flex flex-col justify-between h-full p-4 space-y-3 mt-4">
            <div className="flex flex-col items-center space-y-11">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.name === t("navbar.services") ? (
                    <div key={index} className="">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-center gap-3 w-full text-gray-600"
                      >
                        <span className="text-[22px]">{item.name}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isMobileServicesOpen && (
                        <div className="space-y-2 border rounded-md shadow-md mt-4">
                          {servicesDropdownItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className={`flex items-center space-x-3 px-4 py-2 text-sm rounded-lg ${
                                pathname === subItem.path ? "text-[#6B5B95] bg-purple-50" : "text-gray-600 hover:bg-purple-50 hover:text-[#6B5B95]"
                              }`}
                            >
                              <div className="bg-blue-custom-400 p-3 rounded-full">
                                {subItem.icon} {/* <img src={subItem.icon} className="w-6 h-6" /> */}
                              </div>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={index}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      //   className={({ isActive }) => `block text-[22px] ${isActive ? "text-[#6B5B95]" : "text-gray-600 hover:text-[#6B5B95]"}`}
                      className={`block text-[22px] ${pathname === item.path ? "text-[#6B5B95]" : "text-gray-600 hover:text-[#6B5B95]"}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              rel="noopener noreferrer"
              className="w-full text-center capitalize bg-primary-gradient text-white px-6 py-3 rounded-full ease-out hover:scale-105 transition-all duration-300 inline-block font-medium !mb-[70px]"
            >
              {t("navbar.contactUs")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
