import React from "react";
import SectionRevealer from "@/components/Animation/SectionRevealer";

const AboutSection = () => {
  return (
    <SectionRevealer>
      <section>
        <div
          className="text-dark bg-gradient-to-br from-secondary to-primary  left-0 mt-24 mb-16
           flex flex-col gap-5 py-14 items-center rounded-lg border-r-8 border-b-8 border-solid border-gray"
        >
          <h2 className="lg:text-5xl  text-2xl font-bold">Hakkımızda</h2>
          <h3 className="text-2xl">Biz Kimiz?</h3>
          <p className="text-lg max-w-3xl text-center">
            Şirketimiz bilişim alanında kamu kurum ve kuruluşları ile özel
            sektöre&nbsp;
            <span className="font-bold text-lg">İş Süreç Yönetimi</span> ve
            <span className="font-bold text-lg"> Dijital Dönüşüm</span> başta
            olmak üzere alanında deneyimli ve yenilikçi kadrosu <br />
            <span className="font-bold text-xl">
              İş Süreçleri Yönetimi, Süreç İyileştirme, Dijital Dönüşüm, Akıllı
              Otomasyon, Yönetim Danışmanlığı, CX Excellence, PaperWork ve BT
              Danışmanlık
            </span>{" "}
            hizmetleri vermektedir.{" "}
          </p>
        </div>
      </section>
    </SectionRevealer>
  );
};

export default AboutSection;
