import "../styles/global.css";
import "../styles/reset.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "../components/Layout/Header";
import ButtonScrollToTop from "@/components/Layout/ButtonScrollToTop";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalAid | Süreç Yönetim, Dijital Dönüşüm, PaperWork Danışmalık",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} container`}>
        <Header />
        {children}
        <ButtonScrollToTop />
      </body>
    </html>
  );
}
