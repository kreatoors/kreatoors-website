import { Header } from "./components/layout/Header";

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
