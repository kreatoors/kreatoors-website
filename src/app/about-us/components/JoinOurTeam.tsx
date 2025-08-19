"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function JoinOurTeam() {
  const { t } = useTranslation("about");
  const teamMembers = [
    {
      name: "Arzo Nadi",
      role: "CEO & Founder",
      image: "/images/team/member.png",
      socialIcon: "/images/linkedin3.svg",
      linkedinprofile: "#",
    },
    {
      name: "Rameez Rayok",
      role: " Growth Marketing Lead",
      image: "/images/team/member.png",
      socialIcon: "/images/linkedin3.svg",
      linkedinprofile: "#",
    },
    {
      name: "Mitra Kohnesheen",
      role: "Socials & Design",
      image: "/images/team/Mitra.jpg",
      socialIcon: "/images/linkedin3.svg",
      linkedinprofile:
        "https://www.linkedin.com/in/mitra-kohnesheen-15693a122/",
    },
  ];
  return (
    <div className="w-full max-w-6xl px-5 md:mx-auto py-16">
      <p className="text-[#140C74] font-medium text-xl tracking-wide mb-6 text-center">
        MEET OUR TEAM
      </p>
      <h1 className="sm:text-4xl text-3xl mb-16  text-center leading-[160%]">
        {" "}
        The <span className="font-playfair">People</span> Behind the Magic
      </h1>
      <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-sm:grid-cols-1 gap-8 mb-20">
        {teamMembers.map(
          (
            member,
            index //@typescript-eslint/no-unused-vars
          ) => (
            <div key={index} className="w-full h-[374px] rounded-3xl relative">
              <Image
                alt="team"
                fill
                src={member.image}
                className="object-cover w-full rounded-xl"
              />
              <Link target="_blank" href={member.linkedinprofile || "#"}>
                <div className="flex items-center gap-3 bg-white absolute bottom-3 left-3 right-0 p-4 rounded-l-2xl">
                  <Image
                    width={45}
                    height={45}
                    alt="social"
                    src={member.socialIcon}
                  />
                  <div className="flex flex-col ">
                    <p className="font-medium text-[18px]">{member.name}</p>
                    <p className="text-[#5B5A6C]">{member.role}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="w-full flex flex-col items-center text-center md:pt-8">
          <h1 className="text-4xl mb-4">
            {t("joinOur")} <span className="font-playfair">{t("team")}</span>
          </h1>
          <p className="text-sub-gray text-base max-w-2xl">
            {t("joinOurTeamDescription")}
          </p>
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
