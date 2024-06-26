import React from "react";

import type { Metadata } from "next";
import HakkimizdaPageContainer from "../../containers/HakkimizdaPageContainer";

export const metadata: Metadata = {
  title:
    "Hakkımızda | DigitalAid | Süreç Yönetim, Dijital Dönüşüm, PaperWork Danışmalık",
  description: "Generated by create next app",
};
const HakkimizdaPage = () => {
  return (
    <main>
      <HakkimizdaPageContainer />
    </main>
  );
};

export default HakkimizdaPage;
