import React, { useState } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "antd";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../assets/icon/avatar.png";
import Friends from "../../menu/friendIcon";
import More from "../../more";
import RoomIcon from "../../menu/roomIcon";
import ChatIcon from "../../menu/chatIcon";
import MenuIcon from "../../menu/MenuIcon";

const Chatnav = () => {
  const [showMore, setShowMore] = useState(false);

  const router = useRouter();

  return (
    <div className="flex bg-[#2F3646] w-[380px] items-end justify-center space-x-8 py-6 ">
      <div className="border w-[44px] h-[44px] flex justify-center items-center rounded-full ">
        <div className="border w-[38px] h-[38px] flex justify-center items-center  rounded-full ">
          <Image
            src={avatar.src}
            width="48"
            height="48"
            alt=""
            style={{ border: "1px solid red" }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between space-x-8">
        <Link href="/room">
          <div className=" flex flex-col gap-1 text-white cursor-pointer items-center">
            <RoomIcon
              className={router.pathname === "/room" ? "#AAE8DF" : "#FFFFFF"}
            />{" "}
            <span
              className={
                router.pathname === "/room"
                  ? "text-[#AAE8DF]"
                  : "text-[#FFFFFF]"
              }
            >
              Rooms
            </span>
          </div>
        </Link>
        <Link href="/chats">
          <div className="flex flex-col gap-1 text-white cursor-pointer items-center">
            <ChatIcon
              className={router.pathname === "/chats" ? "#AAE8DF" : "#FFFFFF"}
            />{" "}
            <span
              className={
                router.pathname === "/chats"
                  ? "text-[#AAE8DF] pt-1"
                  : "text-[#FFFFFF] pt-1"
              }
            >
              Chats
            </span>
          </div>
        </Link>
        <Link href="/friends">
          <div className="flex flex-col gap-1 text-white  cursor-pointer items-center">
            <Friends
              className={router.pathname === "/friends" ? "#AAE8DF" : "#FFFFFF"}
            />{" "}
            <span
              className={
                router.pathname === "/friends"
                  ? "text-[#AAE8DF]"
                  : "text-[#FFFFFF]"
              }
            >
              Friends
            </span>
          </div>
        </Link>
        <Dropdown overlay={<More />}>
          <div className="flex flex-col pt-0.5 gap-1 text-white cursor-pointer items-center">
            <MenuIcon />
            <span className="pt-1">More</span>
          </div>
        </Dropdown>
      </div>
      {showMore && <More />}
    </div>
  );
};

export default Chatnav;
