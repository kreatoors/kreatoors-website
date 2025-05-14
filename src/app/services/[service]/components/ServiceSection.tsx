"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import {
  // ChevronLeft,
  // ChevronRight,
  // PlusIcon,
  // MinusIcon,
  // CheckIcon,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
// import personal_branding from "../../../assets/images/strategic-solution/personal branding.jpg";
// import employee_advocacy from "../../../assets/images/strategic-solution/employee_adocarcy.jpg";

// import employer_development from "../../../assets/images/strategic-solution/employer-brand-developmentemployer-brand-development.png";
// import internal_communication from "../../../assets/images/strategic-solution/internal-communications.png";
// import community_design_development from "../../../assets/images/strategic-solution/community-design-development.png";

// import plus from "../../../assets/images/plus.png";
// import minus from "../../../assets/images/minus.png";

import Link from "next/link";
import Image from "next/image";
import { SERVICES_ICONS } from "@/assets/icons/ServicesIcons";

const service_1 = "/images/services/hero1.png";
const service_2 = "/images/services/hero2.png";
const service_3 = "/images/services/hero3.png";
const service_4 = "/images/services/hero4.png";
const service_5 = "/images/services/hero5.png";
const service_6 = "/images/services/hero6.png";

const ServiceSection = ({ h1, description, heroImage, coreServices, buttontxt, impactItems, ctaTitle, slug }: any) => {
  const { t, i18n } = useTranslation("service");
  const [openSection, setOpenSection] = useState(coreServices[0]?.id || "");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setOpenSection(coreServices[0]?.id || "");
  }, [coreServices]);

  useEffect(() => {
    setHasAnimated(false);
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [coreServices]);

  const HeroSection = () => (
    <section className="py-10 px-4 md:px-6 lg:px-8 ">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col justify-between space-y-10">
            <div
              className={`space-y-4 md:space-y-10 lg:pr-8 ${!hasAnimated ? "animate-slideInFromTop" : ""}`}
              style={{
                animation: !hasAnimated ? "slideInFromTop 1s ease-out" : "none",
              }}
            >
              {h1}
              <p className="text-sub-gray text-base md:text-lg max-w-xl">{description}</p>
            </div>
            <div
              className={`relative md:mr-10  ${!hasAnimated ? "animate-slideInFromBottom" : ""}`}
              style={{
                animation: !hasAnimated ? "slideInFromBottom 1s ease-out" : "none",
              }}
            >
              <Image
                src={heroImage}
                alt={description}
                width={600}
                height={400}
                className={`w-full object-cover rounded-xl ${slug === 1 || slug === 3 ? "h-72 " : "h-full"}`}
                style={{
                  boxShadow: "16px 16px 0px 0px rgba(219, 216, 246, 1)",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-6 pb-6 ">
              {coreServices.map((service: any) => (
                <div key={service.id} className="bg-white rounded-2xl">
                  <button
                    onClick={() => setOpenSection(openSection === service.id ? "" : service.id)}
                    className="w-full py-4 px-2 md:px-8 flex justify-between items-center text-left transition-colors"
                  >
                    <span className="text-lg mr-8 font-medium text-gray-900">{service.title}</span>
                    {
                      openSection === service.id ? SERVICES_ICONS.minus : SERVICES_ICONS.plus
                      // <img
                      //   src={minus}
                      //   className="h-6 w-6"
                      //   alt="Collapse icon"
                      // />
                      // <img src={plus} className="h-6 w-6" alt="Expand icon" />
                    }
                  </button>
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      openSection === service.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-sub-gray p-2 md:px-10">{service.description}</p>
                      {service.content && (
                        <div className="p-2 md:px-10 pb-6 space-y-2">
                          {service.content.map((item: any, index: number) => (
                            <div key={index} className="flex max-w-lg md:max-w-sm">
                              <span className="text-sub-gray mr-2">•</span>
                              <p className="text-sub-gray-500">{item}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={"/contact-us"}
              className="w-full py-3 text-center px-6 bg-primary-gradient text-white rounded-full transition-colors duration-500 hover:scale-95"
            >
              {buttontxt}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  const OtherServices = ({ slug }: { slug: string }) => {
    const currentIndex = parseInt(slug);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isScrolling, setIsScrolling] = useState(false);

    const services = [
      {
        id: 1,
        title: "Corporate Influencing",
        titleDe: "Unternehmensbeeinflussung",
        image: service_1,
        link: "/services/corporate-influencing",
      },
      {
        id: 2,
        title: "Employee Brand Development",
        titleDe: "Mitarbeiter-Markenentwicklung",
        image: service_2,
        link: "/services/employee-brand-development",
      },
      {
        id: 3,
        title: "Employee Content Creation",
        titleDe: "Mitarbeiter-Content-Erstellung",
        image: service_3,
        link: "/services/employer-content-creation",
      },
      {
        id: 4,
        title: "Internal Communications & Culture",
        titleDe: "Interne Kommunikation & Kultur",
        image: service_4,
        link: "/services/internal-communications-culture",
      },
      {
        id: 5,
        title: "Advocacy & Content Governance",
        titleDe: "Advocacy & Content-Governance",
        image: service_5,
        link: "/services/advocacy-content-governance",
      },
      {
        id: 6,
        title: "Community Building & Management",
        titleDe: "Community-Aufbau & Management",
        image: service_6,
        link: "/services/community-building-management",
      },
    ];

    const otherServices = services.filter((service) => service.id !== currentIndex);

    useEffect(() => {
      const container = scrollContainerRef.current;

      const checkScroll = () => {
        if (container) {
          setIsScrolling(container.scrollLeft > 0);
        }
      };

      container?.addEventListener("scroll", checkScroll);
      return () => container?.removeEventListener("scroll", checkScroll);
    }, []);

    const renderComponent = (service: any, index: number) => (
      <Link
        key={index}
        className="flex-none my-3 md:my-0 group cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "instant",
          });
        }}
        href={service.link}
      >
        <div className="h-full w-full">
          <div className="relative overflow-hidden rounded-2xl h-[300px] w-full">
            <Image
              height={440}
              width={300}
              src={service.image}
              alt={i18n.language === "de" ? service.titleDe : service.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="py-2 md:py-7">
            <div className="flex justify-between w-full">
              <h3 className="text-xl font-normal max-w-[200px] md:max-w-[80%]">{i18n.language === "de" ? service.titleDe : service.title}</h3>
              <div
                className="shadow-lg p-2 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center bg-white
                      transition-transform duration-300 transform hover:scale-110 hover:bg-blue-custom-100"
              >
                <ArrowUpRight className="text-blue-custom-700 h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );

    return (
      <div className="w-full py-7 md:py-16">
        <div className="mx-auto px-4">
          <h2 className="text-4xl mb-6 md:mb-12 text-left max-w-6xl mx-auto">
            {t("other")} <span className="font-playfair italic">{t("services")}</span>
          </h2>

          <div className="relative overflow-hidden w-full">
            <div className="hidden md:flex flex-row gap-10 animate-marquee w-full">{Array(50).fill(otherServices).flat().map(renderComponent)}</div>
            <div className="flex flex-col md:hidden gap-10 w-full">{otherServices.map(renderComponent)}</div>
          </div>

          <style jsx>{`
            .animate-marquee {
              display: flex;
              animation: marquee 50s linear infinite;
            }

            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .relative.overflow-hidden > .animate-marquee {
              width: 200%;
            }
          `}</style>
        </div>
      </div>
    );
  };

  const ImpactItems = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
      <section ref={sectionRef} className="impact-section md:py-10 px-4 md:px-8 w-full bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="arrow flex justify-center h-48">
            <Image height={602} width={31} src={"/images/Arrow 2.png"} className="py-10" alt="Arrow" />
          </div>

          <div className="content">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              <span className="font-playfair ">{t("impact")}</span> {t("andROI")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactItems.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-blue-custom-400 rounded-xl p-5 flex md:flex-col items-center gap-2 md:gap-0 md:items-start md:space-y-4 transition-all duration-300 hover:bg-blue-custom-500 hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-8 h-8">{SERVICES_ICONS.check}</div>
                  <h4 className="text-gray-700 font-medium max-w-52">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CTASection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.5,
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
      <div ref={sectionRef} className="w-full py-16 px-4 md:p-0 rounded-t-[50px] mb-16">
        <div className="max-w-6xl mx-auto">
          <div
            className={`gap-y-3 flex-col bg-primary-gradient rounded-3xl 
              p-4 flex items-center text-center 
              transition-all duration-100 ease-out md:px-8 md:py-12 
                            ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
                        `}
          >
            {ctaTitle}

            <p
              className={`
                                 w-full text-white/90 text-sm md:text-base 
                                md:max-w-xl mx-auto text-center
                                transition-all duration-700 ease-out delay-200 py-4
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                            `}
            >
              {t("serviceCta.subheading")}
            </p>
            <Link href="https://calendly.com/coachingwitharzo/free-discovery-call" target="_blank" rel="noopener noreferrer">
              <button
                className={`  p-4
                                bg-white text-blue-custom-700 px-6 
                                rounded-full font-semibold hover:bg-purple-50 
                                transition-all duration-700 ease-out delay-400
                               hover:scale-105 
                                ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}
                            `}
              >
                {t("serviceCta.button")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16 ">
      <HeroSection />
      <ImpactItems />
      <CTASection />
      <OtherServices slug={slug} />
    </div>
  );
};

export default ServiceSection;
