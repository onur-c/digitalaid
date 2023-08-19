import ConsultingCardList from "@/components/ConsultingCard/ConsultingCardList";
import React from "react";

const DanismanlikPageContent = () => {
  return (
    <>
      <h2 className="text-center text-light md:text-5xl font-bold text-3xl p-5">
        Danışmanlıklarımız
      </h2>
      <ConsultingCardList />
    </>
  );
};

export default DanismanlikPageContent;
