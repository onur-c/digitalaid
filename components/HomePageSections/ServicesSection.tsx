import React from "react";
import Consulting from "@/public/consulting.jpg";
import Education from "@/public/education.jpg";
import Software from "@/public/software.jpg";
import Image from "next/image";
import Link from "next/link";
import SectionRevealer from "@/components/Animation/SectionRevealer";

const data = [
  {
    title: "Danışmanlık Hizmetlerimiz",
    desc: "Değer Odaklı Süreç Yönetimi ve Dijital Dönüşüm",
    goToURL: "/danismanlik",
    imageURL: "/consulting.jpg",
  },
  {
    title: "Eğitim",
    desc: "Yöneticiler ve Uygulayıcılar için Süreç Yönetimi ve Uygulaması",
    goToURL: "/egitim",
    imageURL: "/education.jpg",
  },
  {
    title: "Yazılım",
    desc: "Dijital Dönüşüm, Süreçleri Stratejiyle Uyumlu Hale Getirir",
    goToURL: "/yazilim",
    imageURL: "/software.jpg",
  },
];

const ServicesSection = () => {
  return (
    <SectionRevealer>
      <section className="mt-24">
        <h1 className="font-bold md:text-6xl text-3xl text-center mb-14 text-dark">
          Hizmetlerimiz
        </h1>
        <div className="flex relative w-full left-0 flex-wrap gap-5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="w-[400px] m-auto relative h-[400px] items-center justify-center rounded-md  overflow-hidden "
            >
              <Image
                src={item.imageURL}
                alt={item.title}
                fill={true}
                className="object-cover -z-10 brightness-[0.3]"
              />
              <div className="flex gap-4 flex-col items-center justify-center h-full">
                <h2 className="text-light text-center text-3xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                  {item.title}
                </h2>
                <p className="text-center text-light">{item.desc}</p>
                <Link
                  href={item.goToURL}
                  className="bg-dark/80 border-2 border-solid border-gray text-light px-8 py-5 rounded-md hover:scale-105 transition-transform duration-300"
                >
                  İncele
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionRevealer>
  );
};

export default ServicesSection;
