"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function JoinOurTeam() {
  const { t } = useTranslation("about");

  return (
    <div className="w-full max-w-6xl px-5 md:mx-auto py-16">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="w-full flex flex-col items-center text-center md:pt-8">
          <h1 className="text-4xl mb-4">
            {t("joinOur")} <span className="font-playfair">{t("team")}</span>
          </h1>
          <p className="text-sub-gray text-base max-w-2xl">{t("joinOurTeamDescription")}</p>
        </div>

        <div className="w-full flex flex-col items-center text-center">
          {/* <p className="text-sub-gray text-base max-w-2xl">{t("sendResume")}<br /> {t("descriptionTo")} <a href="mailto:careers@kreatoors.com" className="text-indigo-600">careers@kreatoors.com</a></p> */}
          <Link
            href="/contact-us"
            rel="noopener noreferrer"
            className="bg-primary-gradient text-white px-6 py-3 rounded-full transition-all duration-700 ease-out hover:scale-105 inline-block font-medium"
          >
            Drop us a Line
          </Link>
        </div>
      </div>
    </div>
  );
}
