import Header from "@/components/layout/Header";

export default function TermsConditionsLayout({
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
