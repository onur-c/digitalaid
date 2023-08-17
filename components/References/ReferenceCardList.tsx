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
      <ReferenceCard
        link="https://estarthealthgroup.com/tr/"
        url={estart}
        key={1}
      />
      <ReferenceCard link="https://tuyap.com.tr/" url={tüyap} key={2} />
      <ReferenceCard
        link="https://www.paperwork.com.tr/"
        url={paperworkRef}
        key={3}
      />
      <ReferenceCard link="https://akfenren.com.tr/" url={akfenren} key={4} />
      <ReferenceCard link="https://www.akfen.com.tr/" url={akfen} key={5} />
    </div>
  );
};

export default ReferenceCardList;
