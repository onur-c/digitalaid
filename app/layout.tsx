import "@/styles/global.css";
import "@/styles/reset.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/Layout/Header/Header";
import ButtonScrollToTop from "@/components/Layout/ButtonScrollToTop";
import Footer from "@/components/Layout/Footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

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
        <Footer />
      </body>
    </html>
  );
}
