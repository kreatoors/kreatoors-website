import Header from "@/components/layout/Header";

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-to-white-gradient ">
      <Header />
      {children}
    </div>
  );
}
