"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderText } from "@/utils/misc";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AudienceSection = () => {
  const { t, i18n } = useTranslation("home");

  interface TabContent {
    [key: string]: {
      title: string;
      description: string;
      features: string[];
      ctaText: string;
    };
  }

  const [tabContent, setTabContent] = useState<TabContent>({});
  const [activeTab, setActiveTab] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Recalculate tabContent whenever language changes
  useEffect(() => {
    const empowerData: any = t("empower.list", { returnObjects: true });
    const newTabContent = empowerData.reduce((acc: any, item: any) => {
      acc[item.heading] = {
        title: item.details.heading,
        description: item.details.subheading,
        features: item.details.points.list,
        ctaText: item.details.points.button,
      };
      return acc;
    }, {});
    setTabContent(newTabContent);

    // Set the active tab dynamically (first tab)
    if (Object.keys(newTabContent).length > 0) {
      setActiveTab(Object.keys(newTabContent)[0]);
    }
  }, [t]); // Dependency array ensures this runs when the language changes

  const handleTabChange = (tab: any) => {
    setIsContentVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsContentVisible(true);
    }, 200);
  };
  // const tabContent = {
  //   "Marketing & Communications Teams": {
  //     title: "Marketing & Communications Teams",
  //     description:
  //       "Drive growth and trust through authentic employee stories. Our services & solutions helps expand your reach and deliver real business impact.",
  //     features: [
  //       "Strategic Content Programs: Implement company-wide content frameworks",
  //       "Advocacy Measurement: Track engagement, reach, and business impact",
  //       "Communications Integration: Align internal and external messaging",
  //       "Platform Optimization: Leverage technology for scalable engagement",
  //     ],
  //     ctaText: "Book a Free Audit",
  //   },

  //   "People & Culture Teams": {
  //     title: "People & Culture Teams",
  //     description:
  //       "Employee voices are your strongest cultural asset. Power your employer brand through authentic employee voices. Turn internal experiences into compelling stories that attract and retain top talent.",
  //     features: [
  //       "Culture Amplification: Showcase authentic workplace stories",
  //       "Employee Experience: Create engaging internal content programs",
  //       "Talent Attraction: Build compelling employer brand narratives",
  //       "Team Brand: Build your personal brand as a trusted leader and the professional brand of your team.",
  //     ],
  //     ctaText: "Build Authentic Engagement",
  //   },

  //   "Corporate Leaders": {
  //     title: "Corporate Leaders",
  //     description:
  //       "Elevate your personal brand to amplify organizational impact. Transform leadership visibility into a catalyst for business growth and team advocacy.",
  //     features: [
  //       "Thought Leadership: Position yourself as a trusted industry voice",
  //       "Strategic Alignment: Unite personal and organizational branding",
  //       "Team Amplification: Lead and inspire employee advocacy",
  //       "Executive Presence: Build visibility through speaking and content",
  //       "Impact Measurement: Track how leadership visibility drives growth",
  //     ],
  //     ctaText: "Lead With Influence.",
  //   },

  //   "Entrepreneurs & Coaches": {
  //     title: "Entrepreneurs & Coaches",
  //     description:
  //       "Build authority through strategic content that converts expertise into a magnetic market presence. Scale your influence while staying focused on delivering exceptional value and premium client outcomes.",
  //     features: [
  //       "Strategic Content: Create content that converts expertise into leads",
  //       "Save Time Through Automation: Build systems for consistent growth without the time drain ",
  //       "Authority Building: Position your unique methodology through thought leadership",
  //       "Client Attraction: Develop a brand that draws premium opportunities",
  //       "Community Growth: Build engaged networks that drive referrals",
  //     ],
  //     ctaText: "Scale Your Expert Brand",
  //   },
  //   Employees: {
  //     title: "Employees",
  //     description:
  //       "Elevate your career and personal brand while driving company success. Share your unique expertise through authentic content to build lasting professional influence and meaningful industry connections.",
  //     features: [
  //       "Personal Growth: Develop your professional voice and industry presence",
  //       "Content Creation: Learn to share compelling workplace stories and insights",
  //       "Career Development: Position yourself as a subject matter expert",
  //       "Network Building: Connect with peers and industry leaders authentically",
  //       "Impact Measurement: Track how your content drives engagement and growth",
  //     ],
  //     ctaText: "Build Your Career Brand",
  //   },
  // };

  // if (!tabContent) return;
  // if (!tabContent[activeTab]) return;
  // if (!tabContent[activeTab]?.title) return;

  return (
    <div className="w-full bg-white py-8 md:py-20">
      <div className="max-w-6xl mx-auto px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center ">{renderText(t("empower.heading"))}</h1>

        <div className="flex sm:flex-col text-[14px] md:flex-row flex-wrap bg-blue-custom-500 justify-start md:justify-between my-10 md:bg-blue-custom-400 py-4 px-4 rounded-lg md:rounded-full">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`font-medium cursor-pointer px-3 py-3 md:px-5 md:py-3 w-full md:w-auto rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 text-left md:text-center md:text-auto text-${
                i18n.language === "de" ? "[15px]" : "[18px]"
              } ${activeTab === tab ? "bg-primary-gradient text-white" : "text-black hover:bg-gray-200"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            className={` bg-blue-custom-500 p-5 md:p-10 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 ease-in-out transform ${
              isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-[23px] md:text-3xl font-medium mb-4">{tabContent[activeTab]?.title}</h2>
            <p className="text-sub-gray mb-6 max-w-4xl">{tabContent[activeTab]?.description}</p>

            <div className="mb-8">
              <h3 className="text-blue-custom-600 font-medium mb-4 text-[20px]">{t("whatItLooksLike")}</h3>
              <ul className="space-y-3">
                {tabContent[activeTab]?.features?.map((feature, index) => (
                  <li key={index} className={`text-sub-gray px-3 transform transition-all duration-300 ease-in-out delay-${index * 100}`}>
                    <div className="flex gap-2"> • {renderText(feature)}</div>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full md:w-auto bg-primary-gradient text-sm md:text-lg text-white px-6 py-4 md:py-3 rounded-full transition-colors duration-500 hover:shadow-lg hover:scale-95">
              <a href="https://calendly.com/coachingwitharzo/free-discovery-call" target="_blank" rel="noopener noreferrer">
                {tabContent[activeTab]?.ctaText}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceSection;
