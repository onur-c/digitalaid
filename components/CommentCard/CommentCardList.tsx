import React from "react";
import CommentCard from "./CommentCard";
import { commentData } from "./commentcarddata";

const CommentCardList = () => {
  return (
    <div className="relative w-fit m-auto flex flex-wrap gap-6 rounded items-center justify-center  p-5">
      {commentData.map((comment, idx) => (
        <CommentCard {...comment} key={idx} />
      ))}
    </div>
  );
};

export default CommentCardList;
