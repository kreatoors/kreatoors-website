"use client";
import Image from "next/image";
import JoinOurTeam from "./components/JoinOurTeam";
import { useTranslation } from "react-i18next";
import ComingSoonSmallSection from "./components/CommingSoonSmall";

export default function AboutUs() {
  const { t, i18n } = useTranslation("about");

  const values = [
    {
      id: 1,
      icon: "/images/about-us/tabler_bulb-filled.png",
      title: "Innovation",
      description: "We embrace cutting-edge ideas and practices, constantly pushing the boundaries of what's possible in HR and personal branding.",
    },
    {
      id: 2,
      icon: "/images/about-us/icon-park-solid_circular-connection.png",
      title: "Creatorship",
      description:
        "We foster an environment where compelling content and unique personal brands flourish, empowering each member to express their authentic voice.",
    },
    {
      id: 3,
      icon: "/images/about-us/mingcute_content-ai-fill.png",
      title: "Connection",
      description: "We believe in the power of community, facilitating meaningful networks and collaborations among visionary professionals.",
    },
    {
      id: 4,
      icon: "/images/about-us/uil_arrow-growth.png",
      title: "Growth",
      description:
        "We are committed to continuous learning and development, providing resources and mentorship to accelerate personal and professional advancement.",
    },
    {
      id: 5,
      icon: "/images/about-us/tick.png",
      title: "Authenticity",
      description:
        "We champion the freedom to explore, express, and evolve, enabling our members to chart their own paths in their careers and personal brands.",
    },
  ];

  const valuesDe = [
    {
      id: 1,
      icon: "/images/about-us/tabler_bulb-filled.png",
      title: "Innovation",
      description:
        "Wir umarmen wegweisende Ideen und Praktiken und erweitern ständig die Grenzen dessen, was im Bereich HR und Personal Branding möglich ist.",
    },
    {
      id: 2,
      icon: "/images/about-us/icon-park-solid_circular-connection.png",
      title: "Schöpfergeist",
      description:
        "Wir fördern eine Umgebung, in der fesselnder Content und einzigartige persönliche Marken gedeihen und jedes Mitglied ermächtigt wird, seine authentische Stimme zu entfalten.",
    },
    {
      id: 3,
      icon: "/images/about-us/mingcute_content-ai-fill.png",
      title: "Verbindung",
      description:
        "Wir glauben an die Kraft der Gemeinschaft und fördern bedeutungsvolle Netzwerke und Kooperationen zwischen visionären Fachleuten.",
    },
    {
      id: 4,
      icon: "/images/about-us/uil_arrow-growth.png",
      title: "Wachstum",
      description:
        "Wir verpflichten uns zu kontinuierlichem Lernen und Entwicklung, bieten Ressourcen und Mentoring, um persönliche und berufliche Fortschritte zu beschleunigen.",
    },
    {
      id: 5,
      icon: "/images/about-us/tick.png",
      title: "Authentizität",
      description:
        "Wir setzen uns für die Freiheit ein, zu erkunden, auszudrücken und sich weiterzuentwickeln, damit unsere Mitglieder ihren eigenen Weg in ihrer Karriere und persönlichen Marke gestalten können.",
    },
  ];

  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Robin Williams",
  //     role: "HR Director",
  //     image: fouderImg,
  //   },
  //   {
  //     id: 2,
  //     name: "Robin Williams",
  //     role: "HR Director",
  //     image: fouderImg,
  //   },
  //   {
  //     id: 3,
  //     name: "Robin Williams",
  //     role: "HR Director",
  //     image: fouderImg,
  //   },
  //   {
  //     id: 4,
  //     name: "Robin Williams",
  //     role: "HR Director",
  //     image: fouderImg,
  //   },
  // ];

  const currentValues = i18n.language === "de" ? valuesDe : values;

  return (
    <div className=" md:pt-28">
      {/* Story & Mission Section */}
      <div className="py-10 md:py-16 md:px-4">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <h1 className="text-center mb-16">
            <span className="text-[27px] md:text-4xl ">{t("our")} </span>
            <span className="text-[27px] md:text-4xl font-playfair italic  ">{t("storyAndMission")}</span>
          </h1>

          <div className="space-y-12">
            <div className="grid md:grid-cols-[200px,1fr] gap-5">
              <h2 className="text-[15px] font-semibold">{t("theAIParadox")}</h2>
              <div className="space-y-4">
                <p className=" text-sub-gray leading-relaxed">{t("aiParadoxDesc1")}</p>
                <p className=" text-sub-gray leading-relaxed">{t("aiParadoxDescription")}</p>
              </div>
            </div>

            <div className="grid  md:grid-cols-[200px,1fr] gap-5">
              <h2 className="text-[15px] font-semibold">{t("ourMission")}</h2>
              <p className=" text-sub-gray leading-relaxed">{t("ourMissionDescription")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6">
            Meet Our <span className="text-4xl md:text-4xl font-playfair italic">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative rounded-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white p-3 rounded-2xl">
                <div className="flex items-center  justify-between">
                 
                  <div>
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sub-gray text-sm">{member.role}</p>
                  </div>
                  <div className="h-7 w-7  overflow-hidden border-2 border-white">
                    <img
                      src={linkedIn}
                      alt="linkedIn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-primary-gradient  px-6 py-4 rounded-full  mt-14 text-white mx-auto block">
          Book a Call With Our Team
        </button>
      </section> */}

      <section className="py-10 md:py-16 px-4  bg-primary-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl  text-white text-center mb-12">
            {t("our")} <span className="md:text-4xl font-playfair italic ">{t("values")}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {currentValues.slice(0, 3).map((value) => (
              <div
                key={value.id}
                className=" bg-blue-custom-400 p-6 shadow-lg rounded-lg rounded-tr-[40px]  transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12  bg-primary-gradient  rounded-full flex items-center justify-center">
                    {/* <span className="text-xl">{value.icon}</span> */}

                    <Image alt="icon" height={50} width={50} src={value.icon} className=" h-6 w-6 " />
                  </div>
                  <h3 className="text-xl font-medium">{value.title}</h3>
                </div>
                <p className=" text-sub-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentValues.slice(3).map((value) => (
              <div
                key={value.id}
                className=" bg-blue-custom-400 rounded-lg rounded-tr-[40px] p-6 shadow-lg  transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center">
                    {/* <span className="text-xl">{value.icon}</span> */}
                    <Image height={50} width={50} alt="icon" src={value.icon} className=" h-6 w-6 " />
                  </div>
                  <h3 className="text-xl font-medium">{value.title}</h3>
                </div>
                <p className="text-sub-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinOurTeam />

      <ComingSoonSmallSection />
    </div>
  );
}
