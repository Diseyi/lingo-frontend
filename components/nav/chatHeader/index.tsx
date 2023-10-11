import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../../assets/icon/avatar.png";
import menu from "../../../assets/icon/menu.svg";

const ChatHeader = ({ roomName, members, online }: any) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="">
      <div className="flex justify-between bg-[#AAE8DF] w-full px-10 items-center py-3 ">
        <div className="flex gap-4 items-center">
          <div className="">
            <Image src={avatar.src} width="32px" height="32px" />
          </div>
          <div className="">
            <div className="font-semibold text-gray-600 text-base">
              {roomName}
            </div>
            <div className="text-xs font-medium text-gray-600">
              <span className=""> {members} </span>
              <span className=""> {online} </span>
            </div>
          </div>
        </div>
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center bg-[#2F3646]  "
          onClick={handleShowMore}
        >
          <Image src={menu.src} width="18px" height="18x" />
        </div>
      </div>

      {showMore && (
        <div className="bg-white font-light dark:bg-[#3f524f] absolute z-20 top-24 right-12 text-[#171B23] border text-base ">
          <div className="hover:bg-[#AAE8DF] hover:text-gray-500 dark:hover:text-gray-500 dark:text-[#DCE0E8] font-semibold cursor-pointer px-6 py-2">
            Room Info
          </div>
          <div className="hover:bg-[#AAE8DF] hover:text-gray-500 dark:hover:text-gray-500 dark:text-[#DCE0E8] font-semibold cursor-pointer px-6 py-2">
            Leave Room
          </div>
          <div className="hover:bg-[#AAE8DF] hover:text-gray-500 dark:hover:text-gray-500 dark:text-[#DCE0E8] font-semibold cursor-pointer px-6 py-2">
            Translate messages
          </div>
          <div className="hover:bg-[#AAE8DF] dark:text-red-500 font-semibold  text-[#C92929] cursor-pointer px-6 py-2">
            Report
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
