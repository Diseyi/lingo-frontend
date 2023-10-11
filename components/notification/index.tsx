import React from "react";
import Image from "next/image";
import notification from "../../assets/icon/notification.svg";

const Notification = () => {
  return (
    <div className=" bg-[#AAE8DF] flex items-center px-6 py-2 gap-4 ">
      <div className="bg-[#2F3646] w-[40px] h-[40px] p-2 rounded-full flex justify-center items-center">
        <Image src={notification.src} width="32" height="32" alt="" />
      </div>
      <div className="text-[#003333] ">Get notified of new messages</div>
    </div>
  );
};

export default Notification;
