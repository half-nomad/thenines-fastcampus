import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Nines - 아시아 크리에이터 마케팅 전문",
  description: "진짜 아시아 시장을 위한 크리에이터 마케팅 솔루션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
