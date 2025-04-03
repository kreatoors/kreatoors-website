"use client";

import { ReactNode, useEffect, useState } from "react";
import "../../i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    i18n.loadNamespaces(["navbar"]).then(() => {
      setIsMounted(true);
    });
    // Initialize i18n on the client side
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
