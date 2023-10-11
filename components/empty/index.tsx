import React from "react";
import Image from "next/image";
import image from "../../assets/icon/image.svg";

const Empty = () => {
  return (
    <div className="flex bg-[#d4d4d4] dark:bg-[#383838] dark:text-[#DCE0E8] justify-center items-center h-screen w-full  ">
      <Image src={image.src} width="287" height="287" alt="" />
    </div>
  );
};

export default Empty;
