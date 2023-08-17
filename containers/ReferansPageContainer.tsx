"use client";
import ReferenceCardList from "@/components/References/ReferenceCardList";
import Image from "next/image";
import React from "react";
import paperwork from "@/public/paperwork.webp";
import CommentCardList from "@/components/CommentCard/CommentCardList";
import SectionRevealer from "@/components/Animation/SectionRevealer";
const ReferansPageContainer = () => {
  return (
    <>
      <SectionRevealer>
        <h2 className="text-3xl lg:text-5xl text-center font-bold my-8">
          Referanslarimiz
        </h2>
        <ReferenceCardList />
        <div className="flex flex-col w-full bg-secondaryBG mb-5">
          <h3 className="text-2xl lg:text-5xl m-auto font-bold p-5 text-headerBg">
            İş Ortaklarımız
          </h3>
          <Image src={paperwork} alt="paperwork" className="m-auto py-5" />
        </div>
        <h3 className="text-center text-2xl lg:text-5xl mb-5">
          Müşterilerimiz neler diyor?
        </h3>
        <CommentCardList />
      </SectionRevealer>
    </>
  );
};

export default ReferansPageContainer;
