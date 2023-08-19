"use client";
import SectionRevealer from "@/components/Animation/SectionRevealer";
import CourseCardList from "@/components/CourseCard/CourseCardList";
import React from "react";

const EgitimPageContent = () => {
  return (
    <>
      <SectionRevealer>
        <h2 className="text-4xl text-light font-bold p-5 text-center">
          Eğitimlerimiz
        </h2>
        <CourseCardList />
      </SectionRevealer>
    </>
  );
};

export default EgitimPageContent;
