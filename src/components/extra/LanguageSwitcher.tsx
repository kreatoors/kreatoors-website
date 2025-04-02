"use client";

import { useTranslation } from "react-i18next";
// import { usePathname, useRouter } from 'next/navigation';
import { JSX } from "react";

export default function LanguageSwitcher(): JSX.Element {
  const { i18n } = useTranslation();
  // const pathname = usePathname();
  // const router = useRouter();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    // You may want to redirect to a localized route in App Router
    // For example: router.push(`/${lng}${pathname}`);
    // This depends on your routing strategy
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("de")}>Español</button>
    </div>
  );
}
