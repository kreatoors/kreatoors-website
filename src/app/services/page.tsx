"use client";

import { useTranslation } from "react-i18next";
import { servicesData, servicesDataDe } from "./ServicesData";
import ServiceSection from "./[service]/components/ServiceSection";

export default function Services() {
  const { i18n } = useTranslation("service");

  // Pick correct language data
  const currentData = i18n.language === "de" ? servicesDataDe : servicesData;

  return (
    <div className="service-page">
      {Object.entries(currentData).map(([slug, service]) => (
        <ServiceSection
          key={slug}
          {...service}
          slug={slug}
          isLandingPage={true} // 👈 hides “Other Services” carousel
        />
      ))}
    </div>
  );
}
