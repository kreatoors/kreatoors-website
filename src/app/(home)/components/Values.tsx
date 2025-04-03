"use client";
import { renderText } from "@/utils/misc";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const useCounter = (end: number, duration = 10000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(percentage);

      countRef.current = Math.min(Math.floor(easedProgress * end), end);
      setCount(countRef.current);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isInView];
};

const ValueStats = () => {
  const { t } = useTranslation("home");

  const [ref, isInView] = useInView();
  const animatedValue = useCounter(92, 3000, isInView as boolean);

  return (
    <section className="w-full bg-white py-16" ref={ref as React.RefObject<HTMLDivElement | null>}>
      <div className="max-w-6xl px-5 bg-primary-gradient text-white py-10 mx-5 md:mx-auto rounded-3xl">
        <div className="text-center">
          <h1 className="text-[25px] sm:text-2xl md:text-3xl lg:text-4xl md:mx-10 tracking-wide md:tracking-normal lg:leading-[58px]">
            {renderText(
              t("line1", {
                value: `<span class='md:!min-w-[100px]  text-right inline-block'>${animatedValue}%</span>`,
              })
            )}
          </h1>
        </div>
        <div className="flex justify-center">
          <Link
            href={"https://calendly.com/coachingwitharzo/free-discovery-call"}
            target="_blank"
            className="px-6 py-4 mt-10 rounded-full font-medium bg-white border border-border-gradient flex items-center justify-center space-x-2  transition-colors duration-500 hover:scale-95  "
          >
            <span className="text-blue-custom-700 font-semibold">
              {/* {renderText(t("hero.primary-button"))} */}
              Book Free Audit
            </span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform text-blue-custom-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValueStats;
