import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "@/components/extra/Clarity";
import I18nProvider from "@/providers/I18nProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kreatoors AI",
  description: "Kreatoors AI - Your AI-Powered Creative Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{
              className: "bg-primary-gradient",
              duration: 5000,
              removeDelay: 1000,
              style: {
                color: "#fff",
                padding: "10px 15px",
              },
              success: {
                className: "bg-green-500",
                duration: 3000,
                style: {
                  color: "#fff",
                },
                iconTheme: {
                  primary: "white",
                  secondary: "#22c55e",
                },
              },
              error: {
                className: "bg-red-500",
                duration: 3000,
                style: {
                  color: "#fff",
                },
                iconTheme: {
                  primary: "white",
                  secondary: "#ef4444",
                },
              },
            }}
          />
          <ClarityAnalytics />
          <I18nProvider>
            {children}
            <Footer />
          </I18nProvider>
        </>
      </body>
    </html>
  );
}
