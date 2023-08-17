"use client";
import React from "react";
import Sustainability from "@/public/sustainability.jpg";
import Image from "next/image";
import MissionSection from "@/components/HomePageSections/MissionSection";
import SectionRevealer from "@/components/Animation/SectionRevealer";

const HakkimizdaPageContent = () => {
  return (
    <SectionRevealer>
      <div className="flex flex-col items-center justify-center h-full gap-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mt-16">
          Hakkımızda
        </h2>
        <p className="w-2/3 leading-7 text-center">
          Şirketimiz bilişim alanında kamu kurum ve kuruluşları ile özel sektöre{" "}
          <span className="font-bold">İş Süreçleri Yönetimi</span> ve{" "}
          <span className="font-bold">Dijital Dönüşüm</span> başta olmak üzere
          alanında deneyimli ve yenilikçi kadrosu{" "}
          <span className="font-bold">İş Süreçleri Yönetimi</span>,{" "}
          <span className="font-bold">Süreç İyileştirme</span>,{" "}
          <span className="font-bold">Dijital Dönüşüm</span>,
          <span className="font-bold"> Akıllı Otomasyon</span>,{" "}
          <span className="font-bold">Yönetim Danışmanlığı</span>,{" "}
          <span className="font-bold">CX Excellence</span> ve{" "}
          <span className="font-bold">PaperWork Uygulama Danışmanlığı</span>{" "}
          hizmetleri vermektedir.{" "}
        </p>
        <iframe
          className="w-[354px] h-[216px] md:w-[708px] md:h-[416px] lg:w-[1080px] lg:h-[625px]"
          src="https://www.youtube.com/embed/jSk_UJZo85o?controls=0?"
        ></iframe>
        <MissionSection />
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Sürdürülebilirlik
          </h3>
          <p className="leading-5 mb-4 w-4/5 m-auto">
            DigitalAid olarak tamamladığımız Dijital Dönüşüm projeleriyle kağıt
            ve kaynak israfını önleyerek sürdürülebilirliğe katkı sağlıyoruz.
            &quot;Çevreye Duyarlı Teknoloji Üretimi&quot; vizyonumuzu
            müşterilerimiz ve çözüm ortaklarımızla paylaşmaktan mutluluk
            duyuyoruz.
          </p>
          <Image
            src={Sustainability}
            alt="Sustainability"
            className="rounded-lg"
          />
        </div>
      </div>
    </SectionRevealer>
  );
};

export default HakkimizdaPageContent;
