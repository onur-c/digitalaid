import React from "react";
import estart from "@/public/estart.webp";
import tüyap from "@/public/tüyap.webp";
import paperworkRef from "@/public/paperworkRef.webp";
import akfenren from "@/public/akfenren.webp";
import akfen from "@/public/akfen.webp";
import ReferenceCard from "./ReferenceCard";

const ReferenceCardList = () => {
  return (
    <div className="flex w-full flex-row gap-5 flex-wrap items-center justify-center p-4 ">
      <ReferenceCard link="https://estarthealthgroup.com/tr/" url={estart} />
      <ReferenceCard link="https://tuyap.com.tr/" url={tüyap} />
      <ReferenceCard link="https://www.paperwork.com.tr/" url={paperworkRef} />
      <ReferenceCard link="https://akfenren.com.tr/" url={akfenren} />
      <ReferenceCard link="https://www.akfen.com.tr/" url={akfen} />
    </div>
  );
};

export default ReferenceCardList;
