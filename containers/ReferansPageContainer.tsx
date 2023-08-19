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
        <div className="flex flex-col gap-12">
          <h2 className="text-3xl lg:text-5xl text-light text-center font-bold my-8">
            Referanslarimiz
          </h2>
          <ReferenceCardList />
          <div className="flex flex-col  bg-primary rounded">
            <h3 className="text-2xl text-light lg:text-5xl m-auto font-bold p-5 text-headerBg">
              İş Ortaklarımız
            </h3>
            <Image src={paperwork} alt="paperwork" className="m-auto py-5" />
          </div>
          <h3 className="text-center text-light text-2xl lg:text-5xl">
            Müşterilerimiz neler diyor?
          </h3>
        </div>
        <CommentCardList />
      </SectionRevealer>
    </>
  );
};

export default ReferansPageContainer;
