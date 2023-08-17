import React from "react";
import { consultingData } from "./consultingdata";
import ConsultingCard from "./ConsultingCard";

const ConsultingCardList = () => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-12">
      {consultingData.map((card, index) => (
        <ConsultingCard {...card} key={index} />
      ))}
    </div>
  );
};

export default ConsultingCardList;
