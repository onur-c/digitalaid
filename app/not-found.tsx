import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className=" text-red-700 text-3xl font-extrabold outline outline-red-700 p-3 rounded-sm">
          404
        </p>
        <p>Üzgünüz, aradığınız sayfayı bulamadık.</p>
        <Link href="/" className="bg-headerBg p-3 ">
          {"<"} Anasayfaya dön.
        </Link>
      </div>
    </>
  );
};

export default NotFound;
