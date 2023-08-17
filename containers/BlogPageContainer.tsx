"use client";
import SectionRevealer from "@/components/Animation/SectionRevealer";
import Tag from "@/components/Tag/Tag";
import React from "react";

const BlogPageContainer = () => {
  return (
    <>
      <SectionRevealer>
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-6">
          Blog
        </h2>
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="bg-headerBg rounded-lg hover:bg-white hover:text-headerBg transition-all duration-500 italic text-5xl my-8 border border-t-0 border-l-0 border-b-4 border-r-4  p-5 border-solid ">
            Bi' Kahve Molasında Dijital Dönüşüm.
          </h3>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <Tag
              text="#digitalaid"
              url="https://www.youtube.com/hashtag/digitalaid"
              icon={null}
            />
            <Tag
              text="#paperwork"
              url="https://www.youtube.com/hashtag/paperwork"
              icon={null}
            />
            <Tag
              text="#bpm"
              url="https://www.youtube.com/hashtag/bpm"
              icon={null}
            />
            <Tag
              text="#süreçyönetimi"
              url="https://www.youtube.com/hashtag/s%C3%BCre%C3%A7y%C3%B6netimi"
              icon={null}
            />
            <Tag
              text="#dijital-dönüşüm"
              url="https://www.youtube.com/hashtag/dijitald%C3%B6n%C3%BC%C5%9F%C3%BCm"
              icon={null}
            />
          </div>
          <iframe
            className=" w-[354px] h-[216px] md:w-[708px] md:h-[416px] lg:w-[1080px] lg:h-[625px]"
            src="https://www.youtube.com/embed/6IGEkK8bPQA?controls=0?"
          ></iframe>
          <p className="leading-5">
            DigitalAid' den yepyeni bir video serisi! Kahveleri hazırlayın.
            DigitalAid olarak "Bi' Kahve Molasında Dijital Dönüşüm Serisi" çok
            yakında başlatıyoruz. Her ay farklı süreç ve konular sizleri
            bekliyor olacak. Mesut Gürbüz'ün anlatımıyla uçtan uca süreç,
            arayüz, rapor tasarımları yapılacak ve test edilip canlıya alınacak.
            Tüm bunlar sadece Bi' Kahve Molasında yani "15" dakikada
            tamamlanacak. Çok yakında Bi' Kahve Molasında görüşmek üzere!
          </p>
        </div>
      </SectionRevealer>
    </>
  );
};

export default BlogPageContainer;
