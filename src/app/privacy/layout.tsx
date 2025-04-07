import Header from "@/components/layout/Header";

export default function PrivacyLayout({
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
