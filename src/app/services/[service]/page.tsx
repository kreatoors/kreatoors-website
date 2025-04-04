"use client";
import { useTranslation } from "react-i18next";
import { servicesData, servicesDataDe } from "../ServicesData";
import ServiceSection from "./components/ServiceSection";
import BrandSolutionsLanding from "@/app/(home)/components/StrategicSolution";

export default function SingleService({ params }: { params: { service: string } }) {
  const { i18n } = useTranslation("service");
  const slug = params.service;

  const currentData = i18n.language === "de" ? servicesDataDe : servicesData;

  const renderContent = (slug: string) => {
    const serviceData = currentData[slug as keyof typeof servicesData];

    if (serviceData) {
      return <ServiceSection {...serviceData} slug={slug} />;
    }

    return (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-gray-800 w-full">
          <BrandSolutionsLanding isPage />
        </h1>
      </div>
    );
  };

  return <div className={`service-page md:pt-32 ${slug !== undefined ? "" : ""}`}>{renderContent(slug)}</div>;
}
