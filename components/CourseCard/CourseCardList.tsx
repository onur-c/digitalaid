import React from "react";
import CourseCard from "./CourseCard";
import { courseData } from "./coursedata";

const CourseCardList = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {courseData.map((course, idx) => (
        <CourseCard {...course} key={idx} />
      ))}
    </div>
  );
};

export default CourseCardList;
