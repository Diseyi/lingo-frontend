import React from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";


const FriendList = ({ item }: any) => {
  return (
    <ul className=" px-6 h-[600px] overflow-y-scroll ">
      {item.map((friend: any) => {
        return (
          <div key={friend} className="cursor-pointer">
            <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
              <div className="">
                <Image src={avatar.src} width="48px" height="48px" alt="" />
              </div>
              <div className="truncate w-2/3">{friend}</div>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default FriendList;
