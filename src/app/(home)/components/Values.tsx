"use client";
import { renderText } from "@/utils/misc";
import Link from "next/link";
import React, { useState, useEffect, useRef, FormEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
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
   const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        console.log(response);
  
        if (response.status === 200) {
          toast.success("Thank you for subscribing!", {
            style: { color: "#333" },
          });
          setEmail("");
        } else {
          toast.error("Something went wrong!", {
            style: { color: "#333" },
          });
        }
      } catch (error: any) {
        console.error("Subscription error:", error);
        toast.error(error?.response?.data?.message || "Unexpected error occurred.", {
          style: { color: "#333" },
        });
      } finally {
        setLoading(false);
      }
    };
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
          <div className="flex justify-center items-center">
            <form
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row  w-full md:min-w-[500px] justify-center md:w-2/4 mt-10 items-center gap-4 sm:mb-0 md:bg-[#9794D8] px-2 pl-4 py-2 rounded-full"
                >
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("coming-soon.waitlist")}
                    className="bg-[#9794D8] px-4 py-2 md:p-2 rouneded-lg w-full md:w-auto border-white md:border-0 md:bg-transparent flex flex-1 text-white placeholder-white outline-none border-0 rounded-full focus:ring-0 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white w-auto hover:bg-gray-200 text-blue-custom-700 px-6 py-2 rounded-full md:font-semibold transition-colors"
                  >
                    {loading ? renderText(t("Loading...")) : renderText(t("join"))}
                  </button>
                </form>
          </div>
      </div>
    </section>
  );
};

export default ValueStats;
