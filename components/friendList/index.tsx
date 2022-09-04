import React from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";
import Spinner from "../spinner";

type Props = {
  data?: any;
  isloading?: boolean;
};

const FriendList = ({ data, isloading }: Props) => {
  return (
    <ul className=" px-6 h-[600px] overflow-y-scroll py-2 ">
      {isloading ? (
        <div className="flex h-full justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="">
          {data.map((friend: any) => {
            return (
              <div key={friend} className="cursor-pointer">
                <div className="flex flex-row gap-4 py-2 border-b px-4 hover:bg-[#E9EBEC] dark:hover:bg-[#11473F] hover:rounded dark:text-[#DCE0E8] cursor-pointer border-b dark:border-[#3f524f] items-center">
                  <div className="">
                    <Image src={avatar.src} width="48px" height="48px" alt="" />
                  </div>
                  <div className="truncate w-2/3 dark:text-[#DCE0E8] ">
                    {friend}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </ul>
  );
};

export default FriendList;
