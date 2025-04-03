"use client";

import React, { useEffect, useState } from "react";
// import kr from "../../assets/images/logo/kr.svg";
// import eato from "../../assets/images/logo/eato.svg";
// import flower from "../../assets/images/logo/flower.svg";
// import rs from "../../assets/images/logo/rs.svg";
// import logosmall from "../../assets/images/logo/small-full.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const [isRotating, setIsRotating] = useState(true);
  // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotating(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Link
        href={"/"}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="md:hidden"
      >
        <Image height={50} width={50} className="max-w-[50px] object-contain" src={"/images/logo/small-full.svg"} alt="" />
      </Link>
      <Link
        href={"/"}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="hidden h-auto w-auto md:flex items-end cursor-pointer"
      >
        <Image height={49} width={37} src={"/images/logo/kr.svg"} alt="Kr Logo" className="h-7 object-contain" />
        <Image height={49} width={95} src={"/images/logo/eato.svg"} alt="Eato Logo" className="h-7  object-contain  -ml-3" />
        <Image
          src={"/images/logo/flower.svg"}
          alt="Flower"
          height={25}
          width={25}
          style={{
            transform: isRotating ? "rotate(0deg)" : "rotate(360deg)",
            transition: isRotating ? "transform 0.10s ease-in-out" : "transform 5s linear",
          }}
          className={`h-6 -ml-1.5  object-contain ${isRotating ? "" : ""}`}
        />
        <Image height={49} width={37} src={"/images/logo/rs.svg"} alt="Rs Logo" className="h-[23px] object-contain -ml-0.5" />
      </Link>
    </>
  );
};

export default Logo;
