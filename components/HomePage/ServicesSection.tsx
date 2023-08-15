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
    goToURL: "/",
    imageURL: "/consulting.jpg",
  },
  {
    title: "Eğitim",
    desc: "Yöneticiler ve Uygulayıcılar için Süreç Yönetimi ve Uygulaması",
    goToURL: "/",
    imageURL: "/education.jpg",
  },
  {
    title: "Yazılım",
    desc: "Dijital Dönüşüm, Süreçleri Stratejiyle Uyumlu Hale Getirir",
    goToURL: "/",
    imageURL: "/software.jpg",
  },
];

const ServicesSection = () => {
  return (
    <SectionRevealer>
      <section className="mt-24">
        <h1 className="font-bold text-6xl text-center mb-14 ">Hizmetlerimiz</h1>
        <div className="flex relative w-full left-0 flex-wrap ">
          {data.map((item) => (
            <>
              <div className="basis-1/3 relative h-[600px] items-center justify-center rounded-bl-lg rounded-tl-lg  overflow-hidden ">
                <Image
                  src={item.imageURL}
                  alt={item.title}
                  fill={true}
                  className="object-cover -z-10 brightness-[0.3]"
                />
                <div className="flex gap-4 flex-col items-center justify-center h-full">
                  <h2 className="text-gray-50 text-3xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                    {item.title}
                  </h2>
                  <p>{item.desc}</p>
                  <Link
                    href={item.goToURL}
                    className="bg-black px-8 py-5 rounded-md hover:scale-105 transition-transform duration-300 outline outline-primaryBg"
                  >
                    İncele
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </SectionRevealer>
  );
};

export default ServicesSection;
