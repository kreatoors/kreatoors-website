import Header from "@/components/layout/Header";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Kreatoors AI",
//   description: "Kreatoors AI - Your AI-Powered Creative Assistant",
// };

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F8F0FD]">
      <Header />
      {children}
    </div>
  );
}
