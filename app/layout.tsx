import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "오아시스 마이카 | 신차 장기렌트 · 오토리스 전문",
  description: "10년 전문가 정한일 대표가 직접 운영하는 신차 장기렌트 · 오토리스 전문. 화려한 광고가 아닌, 사람의 경험과 진심으로 고객을 케어합니다. 누적 출고 2,000대+.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="antialiased bg-[#F8FAFC] text-[#1E2937]">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
