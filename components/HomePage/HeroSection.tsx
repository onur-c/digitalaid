import React, { MutableRefObject } from "react";
import SectionRevealer from "@/components/Animation/SectionRevealer";
// className="bg-gradient-to-l from-black via-slate-100 to-sky-300 text-transparent bg-clip-text bg-300% animate-gradient"
// className="bg-gradient-to-br from-white via-sky-300 to-yellow-300 text-transparent bg-clip-text bg-300% animate-gradient"
const HeroSection = () => {
  return (
    <SectionRevealer>
      <section>
        <h1 className="m-auto lg:text-8xl mt-40  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-br from-yellow-200 to-sky-400 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
          <span className="lg:text-9xl">Süreç Yönetim</span>
          <br /> ve <br />{" "}
          <span className="lg:text-9xl">Dijital Dönüşümle</span>
          <br /> Yüksek Performanslı Süreçler
        </h1>
        <h3 className="mt-6 text-center">
          Başarılı bir{" "}
          <span className="font-bold text-lg">Dijital Dönüşüm</span>
          &nbsp; sağlayan{" "}
          <span className="font-bold text-lg">İç Süreç Yönetimini</span> kurma
          ve uygulamada uzmanız.
        </h3>
      </section>
    </SectionRevealer>
  );
};

export default HeroSection;
