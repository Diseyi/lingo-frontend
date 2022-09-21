import React from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";
import Spinner from "../spinner";

type Props = {
  data?: any;
  isloading?: boolean;
  isloadingA?: boolean;
};

const FriendList = ({ data, isloading, isloadingA }: Props) => {

  return (
    <ul className=" px-6 h-[600px] relative  overflow-y-scroll py-2 ">
      <div className="">
        {isloadingA && (
          <div className="h-[600px] bg-white z-10 absolute opacity-50 top-0 left-0 w-full ">
            <div className="flex h-full justify-center border items-center">
              <Spinner />
            </div>
          </div>
        )}
      </div>
      {isloading ? (
        <div className="flex h-full justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="">
          {data.map((friend: any) => {
            return (
              <div key={friend + 1} className="cursor-pointer">
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
