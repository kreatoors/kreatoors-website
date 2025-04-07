/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        tsecondary: "gray",
        veryLightPurple: "#F8F6FF",
        "sub-gray-500": "#5B5A6C",
        "blue-custom-400": "rgba(245, 244, 254, 1)",
        "blue-custom-500": "rgba(245, 244, 254, 1)",
        "blue-custom-600": "rgba(108, 105, 177, 1)",
        "blue-custom-700": "rgba(81, 79, 157, 1)",
        "blue-custom-800": "rgba(106, 103, 175, 1)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #6A67AF 0%, #9996DE 100%)",
        "cta-gradient": "linear-gradient(180deg, #E7E5FF 0%, #FAF9FF 100%)",
        "blue-to-white-gradient": "linear-gradient(180deg, #F5F2FB 0%, #FFFFFF 100%)",
        "border-gradient": "linear-gradient(180deg, #E7E5FF 0%, #FAF9FF 100%)",
        "primary-gradient2": "linear-gradient(180deg, #DFDDFF 0%, #F8F7FF 100%)",
        "purple-gradient": "linear-gradient(to right, #6A67AF, #9996DE)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 1.2s cubic-bezier(0.33, 1, 0.68, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
